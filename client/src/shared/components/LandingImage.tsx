import { useEffect, useState } from "react";
import img2 from "../../assets/DSC01469.JPG";
import img3 from "../../assets/DSC01479.JPG";
import img4 from "../../assets/DSC01487.JPG";
import img5 from "../../assets/DSC01610.JPG";
import img6 from "../../assets/DSC01614.JPG";
import img7 from "../../assets/DSC01481.JPG";
import React from "react";
const LandingImage: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Mouse Move Handler
  const mouseMoveHandler = (e: MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // Effect to Add and Remove Event Listener
  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // Position Calculation
  const calculatePosition = (initialTop: number, initialLeft: number) => {
    const navbarSize = 130 / window.innerHeight; // Convert to relative size based on viewport height

    let relativeCursorX = cursorPosition.x / window.innerWidth;
    let relativeCursorY = cursorPosition.y / window.innerHeight;

    let relativeImgX = initialLeft / 100;
    let relativeImgY = initialTop / 100;

    // Calculate distance
    let distanceX = relativeImgX - relativeCursorX;
    let distanceY = relativeImgY - relativeCursorY;

    // Calculate the overall distance (hypotenuse)
    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    let top = initialTop - distanceY * distance * 6; // multiply by distance and by 100 to increase the shift
    let left = initialLeft - distanceX * distance * 6;

    // Consider image size and limit the movement
    const imageSizeRelative = 1 / 5; // Image size relative to viewport size
    top = Math.min(
      Math.max(top, navbarSize * 100),
      100 - imageSizeRelative * 100
    ); // consider navbar size for the top boundary

    return { top: `${top}%`, left: `${left}%` };
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 750); // Delay of 500ms before starting the fade-in
  }, []);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-10">
        <img
          src={img7}
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          style={calculatePosition(20, 0)}
        />
        <img
          src={img2}
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          style={calculatePosition(20, 55)}
        />
        <img
          src={img3}
          alt="background"
          className="absolute h-2/6 opacity-50 transition-all duration-300 ease-out"
          style={calculatePosition(60, 2)}
        />
        <img
          src={img4}
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          style={calculatePosition(35, 83)}
        />
        <img
          src={img5}
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          style={calculatePosition(28, 29)}
        />
        <img
          src={img6}
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
          style={calculatePosition(76, 75)}
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
        <p className="z-20 text-lg text-left w-7/12 text-gray-500 pt-4 font-RegoReg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          excepturi laboriosam minima? Assumenda eos explicabo fugit nam non
          sint suscipit? Aspernatur eaque ex facere, maxime mollitia nobis non
          vitae voluptates.
        </p>
      </header>
    </div>
  );
};

export default LandingImage;
