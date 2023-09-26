import { WelcomingMessage } from './components/WelcomingMessage';
import { CountdownEvent } from './components/CountdownEvent';
import { useEffect, useState } from 'react';
import { MOBILE_WIDTH, TABLET_POTRAIT_WIDTH } from '../../shared/data/common';
import LandingImage from "./components/LandingImage";
import LandingImageSmall from "./components/LandingImageSmall";
import {useMediaQuery} from "react-responsive"; // replace with your component

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isSmallScreen = useMediaQuery({ maxWidth: 1023 }); // Adjust the values as per your tailwindCSS configuration

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
        {isSmallScreen ? <LandingImageSmall /> : <LandingImage />}
      <WelcomingMessage isMobileView={windowWidth < MOBILE_WIDTH} />
      <CountdownEvent
        isMobileView={windowWidth < MOBILE_WIDTH}
        isTabletPotraitView={windowWidth < TABLET_POTRAIT_WIDTH}
      />
    </>
  );
};
