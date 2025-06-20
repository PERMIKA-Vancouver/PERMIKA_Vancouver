import { useCallback, useState } from 'react';
import { SPONSORS } from "../data/SponsorDetails";
import EventPNG from "../components/Permika - SPEDA.png"; // change logo for different event
import PermikaPNG from "../components/Logo Permika 2.png"
import '../styles.scss';
import {
  getNextEvents,
  isNextEvents,
} from '../../../shared/utils/UpcomingEventUtils';

type SponsorEvent = {
  eventName: string,
  logo: string,
  sponsors: string[],
}
const mobile = ['Taphouse', 'FV', 'Hive Gym', 'Wizeprep', 'Westpath Maple Consulting', 'ITPC', "Yeo's"];

const events: SponsorEvent[] = [{
  eventName: "Long term",
  logo: PermikaPNG,
  sponsors: ['Wizeprep', 'Westpath Maple Consulting', 'ITPC', "Yeo's"]
},
{
  eventName: "",
  logo: EventPNG, // change PNG, its hardcoded for now
  sponsors: [] // look for Sponsors in the SponsorDetails file
}
];

export const Sponsors = () => {
  const [sponsorEventIdx, setSponsorEventIdx] = useState(1);

  const switchEvent = useCallback(() => {
    setSponsorEventIdx((sponsorEventIdx + 1) % events.length)
  }, [sponsorEventIdx])

  const defaultEvent = events[0];

  // Renders the sponsor name, logo, description, and link to website
  const renderSponsors = (tier: string[]) => {
    const sponsors = SPONSORS.filter(sponsor => tier.includes(sponsor.name));
    return (
      <div className={`sponsor-container flex flex-col gap-4`}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`sponsor-item p-10 flex flex-row w-full items-center gap-4`}>
            <a className='flex flex-row justify-center items-center gap-x-16 w-full' href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} className={`w-1/5 flex-shrink`} />
              <p className="sponsor-description w-2/6">{sponsor.description}</p>
            </a>
          </div>
        ))}
      </div>
    );
  };

  const renderMobileSponsors = (tier: string[]) => {
    const sponsors = SPONSORS.filter(sponsor => tier.includes(sponsor.name));
    return (
      <div className={`mobile-sponsor-container gap-4 flex-row flex flex-wrap justify-center items-center overflow-auto`}>
        {sponsors.map((sponsor, index) => (
          <div key={index} className={`mobile-sponsor-item p-10 items-center gap-4`}>
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.logo} alt={sponsor.name} className={`w-full`}/>
            </a>
          </div>
        ))}
      </div>
    );
  };


  return (
    <div className="h-auto bg-white text-white pt-navbar flex flex-col items-center justify-center">
      <div className="md:w-4/5 lg:w-2/3 flex flex-col justify-center items-center">
        {getNextEvents().map((index:number) => (
          <div className='relative inline-block' onClick={isNextEvents(index) ? switchEvent : undefined}>
            <div className={`text-left p-2 text-6xl font-AveRom flex flex-wrap items-center text-[#050505]
                flex-row gap-x-2 rounded-lg transition 
                ${isNextEvents(index) ? 'md:hover:scale-110 hover:cursor-pointer' : ''}`}
                >
              <span className="text-[#050505]">Our </span>
              <span className="text-[#CC7200]">2025 </span>
              <span className="text-[#050505]">Sponsors</span>
            </div>
            <img 
              src={isNextEvents(index) ? events[sponsorEventIdx].logo : defaultEvent.logo}
              alt="PERMIKA Sponsors"
              className={`w-[18rem] absolute top-0 right-0 font-bold px-2 py-1 transform rotate-[30deg] translate-x-1/2 -translate-y-1/3 hidden sm:block`} />
          </div>
        ))}
      </div>

      {/* Renders event sponsors first if an event is running, otherwise just long term */}
      <div className="sponsor-container text-black hidden sm:block">
        {getNextEvents().map((index:number) => 
          isNextEvents(index) 
          ? renderSponsors(events[sponsorEventIdx].sponsors)
          : renderSponsors(defaultEvent.sponsors)
          )}

        {/* Carousel */}
        {/* <div className="slider flex flex-row w-11/12 md:w-4/5 lg:w-2/3 pt-20 pb-80">
                    <div className="slide-track">
                        {SPONSORS.concat(SPONSORS).map((sponsor, index) => (
                            <div className="slide" key={index}>
                                <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                                    <div className={`image-box ${sponsorsToResize.includes(sponsor.name) ? 'resize-logo' : ''}`}>
                                        <img src={sponsor.logo} alt={sponsor.name} />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div> */}
      </div>

      {/* Mobile Sponsors Section */}
      <div className="sponsor-container text-black block sm:hidden w-11/12">
          {renderMobileSponsors(mobile)}
      </div>
    </div>
  );
};
