import {
  FaInstagram,
  FaWhatsapp,
  FaDiscord,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa6';
import {
  openDiscord,
  openFacebook,
  openInstagram,
  openTiktok,
  openWhatsapp,
  openYoutube,
} from '../utils/OpenLinkUtil';

const logoStyling =
  'w-[1.88rem] h-auto text-[#757575] hover:text-[#D07D14] transition duration-300 cursor-pointer';

export const Footer = ({
  isMobileView,
  isTabletPotraitView,
}: {
  isMobileView: boolean;
  isTabletPotraitView: boolean;
}) => {
  return (
    <div className={`relative w-full bg-[#F8F8F8] h-[15vh]`}>
      <div
        className={`absolute top-[50%] -translate-y-2/4 ${
          isTabletPotraitView ? 'grid' : 'flex h-full'
        } items-center w-full `}
      >
        <div className={`${isTabletPotraitView ? 'text-center' : 'ml-[4%]'}`}>
          <p className={`${!isMobileView && 'navbar-text'} text-grey-footer`}>
            PERMIKA Vancouver 2025
          </p>
        </div>
        {!isTabletPotraitView && (
          <div className="border-l-2 border-solid border-[#969696] h-[65%] self-center mr-[4.4rem] ml-auto"></div>
        )}
        <div
          className={`flex gap-[1.875rem] self-center ${
            isMobileView
              ? 'h-5 mt-4'
              : isTabletPotraitView
              ? 'h-7 mt-7'
              : 'h-[24%]'
          } ${isTabletPotraitView ? 'justify-center' : 'mr-[4%]'}`}
        >
          <FaInstagram className={logoStyling} onClick={openInstagram} />
          <FaWhatsapp className={logoStyling} onClick={openWhatsapp} />
          <FaDiscord className={logoStyling} onClick={openDiscord} />
          <FaYoutube className={logoStyling} onClick={openYoutube} />
          <FaFacebookF className={logoStyling} onClick={openFacebook} />
          <FaTiktok className={logoStyling} onClick={openTiktok} />
        </div>
      </div>
    </div>
  );
};
