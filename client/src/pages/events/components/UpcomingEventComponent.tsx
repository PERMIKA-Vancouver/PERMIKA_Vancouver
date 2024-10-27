import { CustomButton } from '../../../shared/components/CustomButton';
import Arrow from '../../../assets/arrow.svg';
import { openExternalLink } from '../../../shared/utils/OpenLinkUtil';
import {
  getEventLocation,
  getEventType,
  getNextEventButtonText,
  getNextEventFullDate,
  getNextEventLink,
  getNextEventName,
  getNextEvents,
} from '../../../shared/utils/UpcomingEventUtils';

export const UpcomingEventComponent = () => {
  const nextEvent: number = getNextEvents()[0];
  const [eventLoc, eventLocLink] = getEventLocation(nextEvent);

  return (
    <div className="fade-in-up">
      <h1>{getNextEventName(nextEvent)}</h1>
      <div className="mt-4 mb-24 sm:flex">
        <h4 className="text-grey-body sm:text-white">
          {getNextEventFullDate(nextEvent)}
        </h4>
        {getEventType(nextEvent) && (
          <div
            className="ml-auto flex hover:cursor-pointer"
            onClick={() => openExternalLink(eventLocLink)}
          >
            <h4 className="text-grey-body sm:text-white whitespace-nowrap mr-3">
              {eventLoc}
            </h4>
            <img src={Arrow} alt="Arrow" />
          </div>
        )}
      </div>
      <div className="flex gap-4">
        <CustomButton
          text={getNextEventButtonText(nextEvent)}
          className={`w-[9.45rem]`}
          link={getNextEventLink(nextEvent)}
        />
        <CustomButton
          text={'Learn More'}
          className="w-[9.45rem]"
          link={'/nextgen'}
        />
      </div>
    </div>
  );
};
