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
  const [selectedYear, setSelectedYear] = useState("2023");
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
  };
  const filteredEvents = PAST_EVENTS.filter(
    (event) => event.year === selectedYear,
  );

  return (
    <div className="min-h-screen ml-all pt-navbar mb-9">
      <div className="pt-10 w-11/12 flex justify-between">
        {/*<Dropdown*/}
        {/*  options={options}*/}
        {/*  value={defaultOption}*/}
        {/*  placeholder="Select an option"*/}
        {/*/>*/}
        <div className="text-5xl font-bold flex justify-between">
          <h1>Year of</h1>

          <div
            className="pl-4 text-sunset-orange relative hover:cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <h1 className="flex">
              {selectedYear}
              <RiArrowDropDownLine className="pt-3"></RiArrowDropDownLine>
            </h1>
            {isHovering && (
              <div className="absolute bg-white rounded-md overflow-hidden z-10 w-full text-center space-y-1 font-RegoBook">
                {["2023", "2022", "2021", "2020", "2019"].map((year) => (
                  <button
                    key={year}
                    onClick={() => handleYearChange(year)}
                    className="block py-2 text-lg text-gray-700 bg-gray-100 hover:bg-sunset-orange hover:text-white"
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
            className="hover:text-gray-500 mt-2 mr-4"
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
