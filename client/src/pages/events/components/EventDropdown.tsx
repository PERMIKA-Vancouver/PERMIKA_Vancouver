import React, { useEffect, useState } from 'react';
import SlideDown from 'react-slidedown/build/lib/slidedown';
import { Link } from 'react-router-dom';
import 'react-slidedown/lib/slidedown.css';

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
  const formatDate = (dateString: string) => {
    const dateObject = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    };
    let formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      dateObject
    );

    const day = dateObject.getDate();
    let suffix = 'th';
    if (day % 10 === 1 && day !== 11) {
      suffix = 'st';
    } else if (day % 10 === 2 && day !== 12) {
      suffix = 'nd';
    } else if (day % 10 === 3 && day !== 13) {
      suffix = 'rd';
    }

    return formattedDate.replace(new RegExp(' ' + day), ` ${day}${suffix}`);
  };
  const getYear = (date: string): number => {
    return parseInt(date.substring(0, 4));
  };

  useEffect(() => {
    setIsOpen(globalToggle.isOpen);
  }, [globalToggle.changeCounter, globalToggle.isOpen]);

  return (
    <div className="relative w-11/12 mb-2 text-xs sm:text-sm md:text-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center py-2 sm:px-4 rounded hover:bg-amber-50 border-b-2 gap-x-4`}
      >
        <span className="flex-none text-left hidden sm:block text-grey-body pr-7">
          {getYear(date)}
        </span>
        <span className="flex-1 text-left text-black-text">{title}</span>
        <span className="flex-1 text-left text-grey-body">
          {formatDate(date)}
        </span>
        <span className="flex-1 text-right hidden sm:block text-grey-body">
          {location}
        </span>
      </button>
      <SlideDown className="my-slide-container">
        {isOpen ? (
          <div className="mb-5">
            <div>
              <div className="overflow-x-auto whitespace-nowrap space-x-4 px-4 pt-2 pb-2">
                {images &&
                  images.map((image, index) => (
                    <div
                      key={index}
                      className="inline-block relative h-32 w-auto bg-gray-300 rounded-md"
                    >
                      <img
                        src={image}
                        alt={`Gallery item ${index}`}
                        className="h-full w-auto rounded-md"
                      />
                      {index === images.length - 1 && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-md">
                          <Link
                            to="/gallery"
                            state={{
                              year,
                              title,
                              date,
                              location,
                              images,
                              description,
                            }}
                            className="text-white text-lg"
                          >
                            Gallery...
                          </Link>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <p className="pl-4 text-xs sm:text-sm md:text-md text-grey-body">
                {description}
              </p>
            </div>
          </div>
        ) : null}
      </SlideDown>
    </div>
  );
};

export default EventDropdown;
