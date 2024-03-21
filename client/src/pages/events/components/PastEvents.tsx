import React, {useState} from "react";
import EventDropdown from "./EventDropdown";
import {PAST_EVENTS} from "../../../shared/data/pastEvents";
import {RiArrowDropDownLine} from "react-icons/ri";

export const PastEvents = () => {
  const [globalToggle, setGlobalToggle] = useState({
    isOpen: true,
    changeCounter: 0,
  });

  const toggleAll = (isOpen: boolean) => {
    setGlobalToggle({
      isOpen,
      changeCounter: globalToggle.changeCounter + 1,
    });
  };

  const [isHovering, setIsHovering] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2023/24'");
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    toggleAll(false)
  };
  const filteredEvents = PAST_EVENTS.filter(
    (event) => event.year === selectedYear,
  );

  return (
    <div className="min-h-screen ml-all pt-navbar mb-9">
      <div className="pt-10 w-11/12 flex justify-between">
        <div className="flex justify-between">
          <h1 className="font-RegoBook text-2xl sm:text-4xl md:text-6xl">Year of</h1>

          <div
            className="pl-2 sm:pl-4 text-sunset-orange relative hover:cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h1 className="flex text-2xl sm:text-4xl md:text-6xl">
              {selectedYear}
              <RiArrowDropDownLine className="pt-3"></RiArrowDropDownLine>
            </h1>
            {isHovering && (
              <div className="absolute bg-white rounded-md overflow-hidden z-10 w-full text-center space-y-1 font-RegoBook">
                {["2023/24'", "2022/23'", "2021/22'", "2020/21'", "2019/20'"].map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className="block w-full py-2 text-lg text-gray-700 bg-gray-100 hover:bg-sunset-orange hover:text-white"
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <button
            className="hover:text-gray-500 mt-2 mr-2 hidden"
            onClick={() => toggleAll(true)}
          >
            expand all [ + ]
          </button>
          <button
            className="hover:text-gray-500 mt-2 mr-4 text-sm sm:text-md"
            onClick={() => toggleAll(false)}
          >
            collapse all [ - ]
          </button>
        </div>
      </div>
      <div>
        <div className="mt-5">
          {filteredEvents.map((event, index) => (
            <EventDropdown
              key={index}
              globalToggle={globalToggle}
              year={event.year}
              title={event.title}
              date={event.date}
              location={event.location}
              images={event.images}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
