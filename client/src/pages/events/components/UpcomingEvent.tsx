import { CustomButton } from '../../../shared/components/CustomButton';
import Arrow from '../../../assets/arrow.svg';
import { openExternalLink } from '../../../shared/utils/OpenLinkUtil';
import { getNextEvent } from '../../../shared/utils/UpcomingEventUtils';

export const UpcomingEvent = () => {
  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isNextEvent,
    nextEventName,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nextEventTimestamp,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    nextEventDate,
    nextEventLink,
    nextEventLocation,
    nextEventLocationLink,
  ] = getNextEvent();

  return (
    <div className="fade-in-up">
      <h1>{nextEventName}</h1>
      <div className="mt-4 mb-24 flex">
        <h4>Saturday, October 21, 2023</h4>
        <div
          className="ml-auto flex hover:cursor-pointer"
          onClick={() => openExternalLink(nextEventLocationLink)}
        >
          <h4 className="whitespace-nowrap mr-3">{nextEventLocation}</h4>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <CustomButton
        text="RSVP"
        className={`w-[9.45rem]`}
        link={nextEventLink}
      />
    </div>
  );
};
