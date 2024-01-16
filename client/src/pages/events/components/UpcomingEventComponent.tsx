import { CustomButton } from '../../../shared/components/CustomButton';
import Arrow from '../../../assets/arrow.svg';
import { openExternalLink } from '../../../shared/utils/OpenLinkUtil';
import {
  getEventFullDate,
  getEventLocation,
  getEventName,
  getEventRsvp,
  getNextEvent,
  isNextEvent,
} from '../../../shared/utils/UpcomingEventUtils';

import { UpcomingEvent } from '../../../shared/types/types';

export const UpcomingEventComponent = () => {
  const event: UpcomingEvent = getNextEvent();

  if (!isNextEvent(event)) {
    return <div></div>;
  }

  const [eventLoc, eventLocLink] = getEventLocation(event);

  return (
    <div className="fade-in-up">
      <h1>{getEventName(event)}</h1>
      <div className="mt-4 mb-24 flex">
        <h4>{getEventFullDate(event)}</h4>
        <div
          className="ml-auto flex hover:cursor-pointer"
          onClick={() => openExternalLink(eventLocLink)}
        >
          <h4 className="whitespace-nowrap mr-3">{eventLoc}</h4>
          <img src={Arrow} alt="Arrow" />
        </div>
      </div>
      <CustomButton
        text="RSVP"
        className={`w-[9.45rem]`}
        link={getEventRsvp(event)}
      />
    </div>
  );
};
