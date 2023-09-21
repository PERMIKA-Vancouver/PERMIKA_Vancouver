import {
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa6';

const logoStyling =
  'w-[1.88rem] h-auto text-[#757575] hover:text-[#D07D14] transition duration-300';

export const Footer = ({
  isMobileView,
  isTabletPotraitView,
}: {
  isMobileView: boolean;
  isTabletPotraitView: boolean;
}) => {
  const openExternalLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className={`relative w-full bg-[#F8F8F8] h-[15vh]`}>
      <div
        className={`absolute top-[50%] -translate-y-2/4 ${
          isTabletPotraitView ? 'grid' : 'flex h-full'
        } items-center w-full `}
      >
        <div className={`${isTabletPotraitView ? 'text-center' : 'ml-[4%]'}`}>
          <span className={`${isMobileView ? 'footer' : 't1'} text-[#5B5B5B]`}>
            PERMIKA Vancouver 2023
          </span>
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
          <FaInstagram
            className={logoStyling}
            onClick={() =>
              openExternalLink('https://www.instagram.com/permika.van')
            }
          />
          <FaDiscord
            className={logoStyling}
            onClick={() =>
              openExternalLink('https://discord.com/invite/nSub8bbGHr')
            }
          />
          <FaYoutube
            className={logoStyling}
            onClick={() =>
              openExternalLink('https://www.youtube.com/@permikavancouver5643')
            }
          />
          <FaFacebookF
            className={logoStyling}
            onClick={() =>
              openExternalLink('https://www.facebook.com/permika.van')
            }
          />
          <FaTiktok
            className={logoStyling}
            onClick={() =>
              openExternalLink('https://www.tiktok.com/@permika.van')
            }
          />
        </div>
      </div>
    </div>
  );
};
