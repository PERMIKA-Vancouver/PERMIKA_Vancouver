// import { PastEvents } from './components/PastEvents';
// import OurEventArchive from './components/OurEventArchive';
// import { useMediaQuery } from 'react-responsive';
// import OurEventArchiveSmall from './components/OurEventArchiveSmall';
import { LandingComponent } from './components/LandingComponent';

export const Events = () => {
  // const isSmallScreen = useMediaQuery({ maxWidth: 1023 }); // Adjust the values as per your tailwindCSS configuration
  return (
    <>
      <LandingComponent />
      {/* {isSmallScreen ? <OurEventArchiveSmall /> : <OurEventArchive />} */}
      {/* <PastEvents /> */}
    </>
  );
};
