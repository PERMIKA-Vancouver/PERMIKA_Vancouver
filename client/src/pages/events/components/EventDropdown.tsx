import React, {useEffect, useState} from "react";
import SlideDown from "react-slidedown/build/lib/slidedown";
import "react-slidedown/lib/slidedown.css";

interface DropdownProps {
  globalToggle: { isOpen: boolean; changeCounter: number };
  year: string;
  title: string;
  date: string;
  location: string;
  images?: string[];
  description: string;
}

const EventDropdown: React.FC<DropdownProps> = ({
  globalToggle,
  year,
  title,
  date,
  location,
  images,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(globalToggle.isOpen);
  }, [globalToggle.changeCounter, globalToggle.isOpen]);

  return (
    <div className="relative w-11/12 mb-2 text-xs sm:text-sm md:text-md lg:text-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-2 sm:px-4 rounded hover:bg-amber-50 border-b-2"
      >
        <span className="flex-1 text-left hidden sm:block">{year}</span>
        <span className="flex-1 text-left sm:text-center">{title}</span>
        <span className="flex-1 text-right sm:text-center">{date}</span>
        <span className="flex-1 text-right hidden sm:block">{location}</span>
      </button>
      <SlideDown className="my-slide-container">
        {isOpen ? (
          <div>
            <div>
              <div className="overflow-x-auto whitespace-nowrap space-x-4 p-4">
                {images &&
                  images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Gallery item ${index}`}
                      className="inline-block h-32 w-auto bg-gray-300 rounded-md"
                    />
                  ))}
              </div>
              <p className="pl-4 text-xs sm:text-sm md:text-md lg:text-lg">{description}</p>
            </div>
          </div>
        ) : null}
      </SlideDown>
    </div>
  );
};

export default EventDropdown;
