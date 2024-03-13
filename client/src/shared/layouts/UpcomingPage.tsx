import {openDiscord, openFacebook, openInstagram, openTiktok, openYoutube,} from '../utils/OpenLinkUtil';

const socialStyle = 'text-sunset-orange cursor-pointer';

export const UpcomingPage = () => {
  return (
    <div className="pt-navbar h-screen">
      <div className="ml-all mr-[10%] h-full">
        <div className="relative h-[30%] lg:h-[40%]">
          <img
            src="https://permikawebsite.s3.us-west-2.amazonaws.com/assets/cloud.svg"
            alt="cloud"
            className={`absolute bottom-0 left-0 w-1/4 lg:w-[15%]`}
          />
          <img
            src="https://permikawebsite.s3.us-west-2.amazonaws.com/assets/cloud.svg"
            alt="cloud"
            className={`absolute bottom-[25%] sm:bottom-[40%] left-[30%] lg:left-[20%] w-1/4 lg:w-[15%]`}
          />
        </div>
        <div className="mt-[10%] lg:mt-[5%]">
          <h2 className="text-black-text">
            Hello, you're early! This page is currently undergoing renovations..
          </h2>
          <p className={`text-grey-body mt-5`}>
            It will be up soon but in the meantime, you can find us on{' '}
            <span className={socialStyle} onClick={openInstagram}>
              Instagram
            </span>
            ,{' '}
            <span className={socialStyle} onClick={openDiscord}>
              Discord
            </span>
            ,{' '}
            <span className={socialStyle} onClick={openYoutube}>
              Youtube
            </span>
            ,{' '}
            <span className={socialStyle} onClick={openFacebook}>
              Facebook
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
