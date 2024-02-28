import {useCallback, useEffect, useRef, useState} from 'react';

const LandingImage: React.FC = () => {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const img5Ref = useRef<HTMLImageElement>(null);
  const img6Ref = useRef<HTMLImageElement>(null);
  const img7Ref = useRef<HTMLImageElement>(null);
  const img8Ref = useRef<HTMLImageElement>(null);

  // Function to update image positions
  const updateImagesPosition = useCallback(
    (cursorPosition: { x: number; y: number }) => {
      const applyStyleToImage = (
        img: HTMLImageElement | null,
        initialTop: number,
        initialLeft: number
      ) => {
        if (img) {
          const style = calculatePosition(
            initialTop,
            initialLeft,
            cursorPosition
          );
          img.style.top = style.top;
          img.style.left = style.left;
        }
      };

      applyStyleToImage(img1Ref.current, 20, 0);
      applyStyleToImage(img2Ref.current, 20, 55);
      applyStyleToImage(img3Ref.current, 60, -4);
      applyStyleToImage(img4Ref.current, 35, 83);
      applyStyleToImage(img5Ref.current, 28, 29);
      applyStyleToImage(img6Ref.current, 76, 75);
      applyStyleToImage(img7Ref.current, 95, 55);
      applyStyleToImage(img8Ref.current, 95, 30);
    },
    []
  );

  // Mouse Move Handler
  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
      const cursorPosition = { x: e.clientX, y: e.clientY }; // Get the current cursor position

      // Request to update image positions
      requestAnimationFrame(() => updateImagesPosition(cursorPosition));
    },
    [updateImagesPosition]
  );

  // Effect to Add and Remove Event Listener
  useEffect(() => {
    const defaultCursorPosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Set the initial position of the images
    updateImagesPosition(defaultCursorPosition);

    document.addEventListener('mousemove', mouseMoveHandler);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, [mouseMoveHandler, updateImagesPosition]);

  const calculatePosition = (
    initialTop: number,
    initialLeft: number,
    cursorPosition: { x: number; y: number }
  ) => {
    let relativeCursorX = cursorPosition.x / window.innerWidth;
    let relativeCursorY = cursorPosition.y / window.innerHeight;

    let relativeImgX = initialLeft / 100;
    let relativeImgY = initialTop / 100;

    let distanceX = relativeImgX - relativeCursorX;
    let distanceY = relativeImgY - relativeCursorY;

    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    let top = initialTop - distanceY * distance * 3;
    let left = initialLeft - distanceX * distance * 3;

    return { top: `${top}%`, left: `${left}%` };
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div className="relative h-screen min-h-[800px] max-h-[1150px] mb-15">
      <div
        className={`absolute inset-0 z-10 fade-in-element ${
          isVisible ? 'visible' : ''
        }`}
      >
        <img
          ref={img1Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img7.webp"
          alt="background"
          className="absolute w-1/6 opacity-60 transition-all duration-300 ease-out"
        />
        <img
          ref={img2Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img2.webp"
          alt="background"
          className="absolute w-1/6 opacity-40 transition-all duration-300 ease-out"
        />
        <img
          ref={img3Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img3.webp"
          alt="background"
          className="absolute w-1/6 opacity-60 transition-all duration-300 ease-out"
        />
        <img
          ref={img4Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img4.webp"
          alt="background"
          className="absolute w-1/6 opacity-60 transition-all duration-300 ease-out"
        />
        <img
          ref={img5Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img5.webp"
          alt="background"
          className="absolute w-1/6 opacity-60 transition-all duration-300 ease-out"
        />
        <img
          ref={img6Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img6.webp"
          alt="background"
          className="absolute w-1/6 opacity-60 transition-all duration-300 ease-out"
        />
        <img
          ref={img7Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img1.webp"
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
        />
        <img
          ref={img8Ref}
          src="https://permika.s3.us-west-2.amazonaws.com/assets/landing-image/img8.webp"
          alt="background"
          className="absolute w-1/6 opacity-50 transition-all duration-300 ease-out"
        />
      </div>
      <header
        className={`fade-in-element ${
          isVisible ? 'visible' : ''
        } flex flex-col items-start justify-end ml-all h-[80%] min-h-[650px]`}
      >
        <h1 className="z-20 text-[#0A0A0A]">
          This is{' '}
          <span className="relative z-20 bg-forest-green pt-2 text-white">
            PERMIKA Vancouver,
          </span>
        </h1>
        <h4 className="z-20 text-left w-7/12 text-grey-body pt-4">
          A student-led organization that unites all Indonesians in
          post-secondary institutions across the Greater Vancouver area. We
          strive to bring a part of Indonesia through our events and services to
          your new life here!
        </h4>
      </header>{' '}
    </div>
  );
};

export default LandingImage;
