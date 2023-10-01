import {
  openDiscord,
  openInstagram,
  openYoutube,
  openFacebook,
  openTiktok,
} from '../utils/OpenLinkUtil';

const socialStyle = 'text-sunset-orange cursor-pointer';

export const UpcomingPage = () => {
  return (
    <div className="pt-navbar h-[85vh]">
      <h1>
        Hello, you're early! This page is currently undergoing renovations..
      </h1>
      <h4 className={`text-[#9a9a9a]`}>
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
      </h4>
    </div>
  );
};
