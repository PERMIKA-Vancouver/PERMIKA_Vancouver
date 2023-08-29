import { useCallback, useEffect, useRef, useState } from "react";
import img2 from "../../assets/DSC01469.JPG";
import img3 from "../../assets/DSC01479.JPG";
import img4 from "../../assets/DSC01487.JPG";
import img5 from "../../assets/DSC01610.JPG";
import img6 from "../../assets/DSC01614.JPG";
import img7 from "../../assets/DSC01481.JPG";
import React from "react";

const LandingImage: React.FC = () => {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const img5Ref = useRef<HTMLImageElement>(null);
  const img6Ref = useRef<HTMLImageElement>(null);

  // Function to update image positions
  const updateImagesPosition = useCallback((cursorPosition: { x: number, y: number }) => {
    const applyStyleToImage = (img: HTMLImageElement | null, initialTop: number, initialLeft: number) => {
      if (img) {
        const style = calculatePosition(initialTop, initialLeft, cursorPosition);
        img.style.top = style.top;
        img.style.left = style.left;
      }
    };

    applyStyleToImage(img1Ref.current, 20, 0);
    applyStyleToImage(img2Ref.current, 20, 55);
    applyStyleToImage(img3Ref.current, 60, 2);
    applyStyleToImage(img4Ref.current, 35, 83);
    applyStyleToImage(img5Ref.current, 28, 29);
    applyStyleToImage(img6Ref.current, 76, 75);
  }, []);

  // Mouse Move Handler
  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    const cursorPosition = { x: e.clientX, y: e.clientY }; // Get the current cursor position

    // Request to update image positions
    requestAnimationFrame(() => updateImagesPosition(cursorPosition));
  }, [updateImagesPosition]);

  // Effect to Add and Remove Event Listener
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [mouseMoveHandler]);

  const calculatePosition = (initialTop: number, initialLeft: number, cursorPosition: { x: number; y: number }) => {
    const navbarSize = 200 / window.innerHeight;

    let relativeCursorX = cursorPosition.x / window.innerWidth;
    let relativeCursorY = cursorPosition.y / window.innerHeight;

    let relativeImgX = initialLeft / 100;
    let relativeImgY = initialTop / 100;

    let distanceX = relativeImgX - relativeCursorX;
    let distanceY = relativeImgY - relativeCursorY;

    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    let top = initialTop - distanceY * distance * 5;
    let left = initialLeft - distanceX * distance * 5;

    const imageSizeRelative = 1 / 5;
    top = Math.min(
        Math.max(top, navbarSize * 100),
        100 - imageSizeRelative * 100
    );

    return { top: `${top}%`, left: `${left}%` };
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 750);
  }, []);

  return (
      <div className="relative h-screen">
        <div className="absolute inset-0 z-10">
          <img
              ref={img1Ref}
              src={img7}
              alt="background"
              className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          />
          <img
              ref={img2Ref}
              src={img2}
              alt="background"
              className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          />
          <img
              ref={img3Ref}
              src={img3}
              alt="background"
              className="absolute h-2/6 opacity-50 transition-all duration-300 ease-out"
          />
          <img
              ref={img4Ref}
              src={img4}
              alt="background"
              className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          />
          <img
              ref={img5Ref}
              src={img5}
              alt="background"
              className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          />
          <img
              ref={img6Ref}
              src={img6}
              alt="background"
              className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          />
        </div>

        <header
            className={`fade-in-element ${
                isVisible ? "visible" : ""
            } fade-in-element min-h-screen flex flex-col items-start justify-end pl-80 pb-28`}
        >
          <h1 className="z-20 text-5xl font-Avenir">
            This is <span className="permikaVancouver">PERMIKA Vancouver</span>
          </h1>
          <p className="z-20 text-md text-left w-7/12 text-gray-500 pt-4 font-RegoReg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            excepturi laboriosam minima? Assumenda eos explicabo fugit nam non
            sint suscipit? Aspernatur eaque ex facere, maxime mollitia nobis non
            vitae voluptates.
          </p>
        </header>      </div>
  );
};

export default LandingImage;
