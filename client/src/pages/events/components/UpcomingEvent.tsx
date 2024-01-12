import { CustomButton } from '../../../shared/components/CustomButton';
import Arrow from '../../../assets/arrow.svg';
import { openExternalLink } from '../../../shared/utils/OpenLinkUtil';

export const UpcomingEvent = () => {
  return (
    <div className="fade-in-up">
      <h1>Layar Tancap</h1>
      <div className="mt-4 mb-24 flex">
        <h4>Saturday, October 21, 2023</h4>
        <div
          className="ml-auto flex hover:cursor-pointer"
          onClick={() =>
            openExternalLink('https://maps.app.goo.gl/A3vNgBUN2oPrKRYk6')
          }
        >
          <h4 className="whitespace-nowrap mr-3">KJRI, 1630 Alberni St</h4>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <CustomButton text="RSVP" className={`w-[9.45rem]`} link="" />
    </div>
  );
};
