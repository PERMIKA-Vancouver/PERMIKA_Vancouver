import { WelcomingMessage } from "./components/WelcomingMessage";
import { CountdownEvent } from "./components/CountdownEvent";
import { useEffect, useState } from "react";
import { MOBILE_WIDTH, TABLET_POTRAIT_WIDTH } from "../../shared/data/common";
import LandingImage from "./components/LandingImage";
import LandingImageSmall from "./components/LandingImageSmall";
import { useMediaQuery } from "react-responsive"; // replace with your component
import { Helmet } from "react-helmet-async";
import { Merchandise } from "./components/Merchandise";

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 }); // Adjust the values as per your tailwindCSS configuration

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      <Helmet>
        <title>PERMIKA Vancouver | Home</title>
        <meta
          name="description"
          content="A student-led organization that unites all Indonesians in
    post-secondary institutions across the Greater Vancouver area. We
    strive to bring a part of Indonesia through our events and services to
    your new life here!"
        />
        <link rel="canocical" href="/" />
      </Helmet>
      {isSmallScreen ? <LandingImageSmall /> : <LandingImage />}
      <WelcomingMessage
        isMobileView={windowWidth < MOBILE_WIDTH}
        isTabletPotraitView={windowWidth < TABLET_POTRAIT_WIDTH}
      />
      <CountdownEvent
        isMobileView={windowWidth < MOBILE_WIDTH}
        isTabletPotraitView={windowWidth < TABLET_POTRAIT_WIDTH}
      />
      <Merchandise />
    </>
  );
};
