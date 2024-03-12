import OurEventArchive from "./components/OurEventArchive";
import {useMediaQuery} from "react-responsive";
import OurEventArchiveSmall from "./components/OurEventArchiveSmall";

export const Events = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 1023 }); // Adjust the values as per your tailwindCSS configuration

    return (
    <>
        {isSmallScreen ? <OurEventArchiveSmall /> : <OurEventArchive />}

    </>
  );
};
