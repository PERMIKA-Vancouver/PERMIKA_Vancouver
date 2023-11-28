import img1 from '../../../assets/landing-image/img1.webp';
import img2 from '../../../assets/landing-image/img2.webp';
import img3 from '../../../assets/landing-image/img3.webp';
import img4 from '../../../assets/landing-image/img4.webp';
import img5 from '../../../assets/landing-image/img5.webp';
import img6 from '../../../assets/landing-image/img6.webp';
import img7 from '../../../assets/landing-image/img7.webp';
import img8 from '../../../assets/landing-image/img8.webp';
import { useEffect, useState } from 'react';

const LandingImageSmall: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className={`h-screen min-h-[800px] max-h-[1100px] relative overflow-hidden fade-in-element ${
        isVisible ? 'visible' : ''
      }`}
    >
      <img
        src={img1}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-25 top-[83%] left-[75%] sm:left-[83%]"
      />
      <img
        src={img2}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-60 top-[24%] left-[86%]"
      />
      <img
        src={img3}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-60 top-[27%] left-[28%]"
      />

      <img
        src={img4}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-70 top-[13%] left-[55%]"
      />

      <img
        src={img5}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-60 top-[18%] left-[-5%]"
      />

      <img
        src={img6}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-60 top-[40%] left-[65%] sm:top-[53%] sm:left-[-6%]"
      />

      <img
        src={img7}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-40 top-[35%] left-[-22%] sm:top-[46%] sm:left-[90%]"
      />

      <img
        src={img8}
        alt="background"
        className="absolute w-1/4 sm:w-1/6 lgVertical:w-1/5 opacity-40 top-[86%] left-[-5%]"
      />

      <header
        className={`sm:h-[82%] h-[80%] min-h-[500px] flex flex-col items-start justify-end ml-all`}
      >
        <div className="z-20 flex flex-col items-start">
          <h1 className="z-20 text-[#0A0A0A]">This is</h1>
          <h1 className="z-20 bg-forest-green text-white px-1 rounded-sm">
            PERMIKA
          </h1>
          <h1 className="z-20 bg-forest-green text-white px-1 mt-1 rounded-sm">
            Vancouver,
          </h1>
        </div>

        <span className="sub z-20 text-left w-9/12 text-grey-body pt-4">
          A student-led organization that unites all Indonesians in
          post-secondary institutions across the Greater Vancouver area.
        </span>
      </header>
    </div>
  );
};

export default LandingImageSmall;
