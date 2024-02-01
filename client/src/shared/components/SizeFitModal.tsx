import React, { useState } from "react";
import chart from "../../assets/merchandise/sizeChart.jpeg";

const SizeFitModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
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
    <>
      <p
        className="text-sm italic underline text-[#4F4F4F] py-1 cursor-pointer"
        onClick={openModal}
      >
        Size & Fit
      </p>

      {showModal && (
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out z-50 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div className="p-2" onClick={(e) => e.stopPropagation()}>
            <img
              src={chart}
              alt="chart"
              className={`object-contain transition-transform duration-300 ease-in-out transform ${
                isOpen ? "scale-150" : "scale-100"
              }`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SizeFitModal;
