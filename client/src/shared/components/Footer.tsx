import {
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from 'react-icons/fa6';

const logoStyling =
  'w-[1.88rem] h-auto text-[#757575] hover:text-[#D07D14] transition duration-300';

export const Footer = () => {
  return (
    <div className={`relative w-full bg-[#F8F8F8] h-[15vh]`}>
      <div
        className={`absolute top-[50%] -translate-y-2/4 flex justify-between items-center w-full`}
      >
        <div className="ml-[4%]">
          <span className="t1 text-[#5B5B5B]">PERMIKA Vancouver 2023</span>
        </div>
        <div className="flex gap-[1.875rem] mr-[4%]">
          <FaInstagram className={logoStyling} />
          <FaDiscord className={logoStyling} />
          <FaYoutube className={logoStyling} />
          <FaFacebookF className={logoStyling} />
          <FaTiktok className={logoStyling} />
        </div>
      </div>
    </div>
  );
};
