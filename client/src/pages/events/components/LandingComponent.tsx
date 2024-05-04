import { useState } from 'react';
import { YearRolling } from './YearRolling';
import { TitleCollection } from './TitleCollection';
import { UpcomingEventComponent } from './UpcomingEventComponent';
import {
  getNextEvents,
  isNextEvents,
} from '../../../shared/utils/UpcomingEventUtils';
import { useMediaQuery } from 'react-responsive';
import OurEventArchiveSmall from './OurEventArchiveSmall';
import OurEventArchive from './OurEventArchive';
import { PastEvents } from './PastEvents';

export const LandingComponent = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 }); // Adjust the values as per your tailwindCSS configuration
  const [state, setState] = useState(0);

  const nextEvent: number = getNextEvents()[0];
  const isNextEvent: boolean = isNextEvents(nextEvent);

  const nextState = () => {
    setTimeout(() => setState(state + 1), 1000);
  };

  return (
    <>
      <div className="bg-forest-green pt-navbar">
        {(state !== 2 || isNextEvent) && (
          <div className="h-screen">
            <div className="relative text-white top-[39.5%] ml-[20%] mr-[10.7%] -translate-y-[39.5%]">
              {state === 0 && <YearRolling completeHandler={nextState} />}
              {state === 1 && (
                <TitleCollection
                  completeHandler={nextState}
                  isNextEvent={isNextEvent}
                />
              )}
              {state === 2 && <UpcomingEventComponent />}
            </div>
          </div>
        )}
        {state === 2 &&
          (isSmallScreen ? (
            <OurEventArchiveSmall isNextEvent={isNextEvent} />
          ) : (
            <OurEventArchive isNextEvent={isNextEvent} />
          ))}
      </div>

      {/* When done animating, show past events */}
      {state === 2 && <PastEvents />}
    </>
  );
};
