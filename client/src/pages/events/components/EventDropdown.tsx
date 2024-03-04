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
  }, [globalToggle.changeCounter]);

  const requireImage = (imagePath: string) => {
    try {
      return require(`../../../assets/${imagePath}`);
    } catch (err) {
      console.error(err);
      return undefined;
    }
  };

  return (
    <div className="relative w-11/12 mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-2 px-4 rounded hover:bg-amber-50 border-b-2"
      >
        <span className="flex-1 text-left">{year}</span>
        <span className="flex-1 text-center">{title}</span>
        <span className="flex-1 text-center">{date}</span>
        <span className="flex-1 text-right">{location}</span>
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
                      src={requireImage(image)}
                      alt={`Gallery item ${index}`}
                      className="inline-block h-32 w-auto bg-gray-300 rounded-md opacity-40"
                    />
                  ))}
              </div>
              <p className="pl-4">{description}</p>
            </div>
          </div>
        ) : null}
      </SlideDown>
    </div>
  );
};

export default EventDropdown;
