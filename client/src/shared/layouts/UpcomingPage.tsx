import {
  openDiscord,
  openInstagram,
  openYoutube,
  openFacebook,
  openTiktok,
} from '../utils/OpenLinkUtil';

import Cloud from '../../assets/cloud.svg';

const socialStyle = 'text-sunset-orange cursor-pointer';

export const UpcomingPage = () => {
  return (
    <div className="pt-navbar h-[85vh] h-[85dvh]">
      <div className="ml-all mr-[10%] h-full">
        <div className="relative h-[30%] lg:h-[40%]">
          <img
            src={Cloud}
            alt="cloud"
            className={`absolute bottom-0 left-0 w-1/4 lg:w-[15%]`}
          />
          <img
            src={Cloud}
            alt="cloud"
            className={`absolute bottom-[25%] sm:bottom-[40%] left-[30%] lg:left-[20%] w-1/4 lg:w-[15%]`}
          />
        </div>
        <div className="mt-[10%] lg:mt-[5%]">
          <h2>
            Hello, you're early! This page is currently undergoing renovations..
          </h2>
          <p className={`text-[#9a9a9a] mt-5`}>
            It will be up soon but in the meantime, you can find us on{' '}
            <span className={socialStyle} onClick={openInstagram}>
              instagram
            </span>
            ,{' '}
            <span className={socialStyle} onClick={openDiscord}>
              discord
            </span>
            ,{' '}
            <span className={socialStyle} onClick={openYoutube}>
              youtube
            </span>
            ,{' '}
            <span className={socialStyle} onClick={openFacebook}>
              facebook
            </span>
            , or{' '}
            <span className={socialStyle} onClick={openTiktok}>
              TikTok
            </span>
            !
          </p>
        </div>
      </div>
    </div>
  );
};
