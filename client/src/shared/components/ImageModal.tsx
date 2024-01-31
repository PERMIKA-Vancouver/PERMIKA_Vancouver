import React, { useEffect, useRef, useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

interface ImageModalProps {
  images: string[]; // Array of image sources
  currentIndex: number; // Current index of the displayed image
  onNext: () => void; // Callback for next image
  onPrevious: () => void; // Callback for previous image
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  onNext,
  onPrevious,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageStyle, setImageStyle] = useState({});
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    }
  }, [isOpen]);

  const openModal = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setImageStyle({
        position: "absolute",
        top: `${rect.top}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
        zIndex: 50,
      });
    }
    setShowModal(true); // First, make the modal appear in the DOM
    setTimeout(() => {
      setIsOpen(true); // Then, after a brief moment, trigger the transition
    }, 10); // A small delay like 10ms is typically enough
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // This duration should match the CSS transition duration
  };

  return (
    <div className="relative group">
      <img
        ref={imageRef}
        src={images[currentIndex]}
        alt="background"
        className="w-full z-50"
      />

      <div className="absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 z-0 p-2">
        <div
          className="cursor-pointer hover:bg-black hover:bg-opacity-50 rounded-full p-1"
          onClick={onPrevious}
        >
          <FaLessThan className="text-xl" />
        </div>
        <div
          className="cursor-pointer hover:bg-black hover:bg-opacity-50 rounded-full p-1"
          onClick={onNext}
        >
          <FaGreaterThan className="text-xl" />
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 p-1 text-center text-white bg-black bg-opacity-50 cursor-pointer"
          onClick={openModal}
        >
          Quick View
        </div>
      </div>

      {showModal && (
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out z-50 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div className="p-2" onClick={(e) => e.stopPropagation()}>
            s
            <img
              src={images[currentIndex]}
              alt="Enlarged"
              style={imageStyle}
              className={`object-contain transition-transform duration-300 ease-in-out transform ${
                isOpen ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
