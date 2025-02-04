import { SPONSORS } from "../data/SponsorDetails"

import '../styles.scss';
const sponsorsToResize = ["Wizeprep", "Taphouse", 'ITPC', 'Westpath Maple Consulting', 'Woods Lozenges'];

const goldTier = ['']
const silverTier = ['Taphouse', 'PROMAG'] 
const bronzeTier = ['SAKATONIK ACTIV', 'Woods Lozenges', 'Indomie', 'Hakumori', 'Modo Yoga']
const brassTier = ['Wizeprep', 'Westpath Maple Consulting', 'ITPC', "Yeo's"]

export const Sponsors = () => {

    // helper fucntion to render sponsors based on tier
    const renderSponsors = (tier: string[], imagesPerRow: number) => {
        const rows = [];
        const sponsors = SPONSORS.filter(sponsor => tier.includes(sponsor.name)); 
        for (let i = 0; i < sponsors.length; i += imagesPerRow) {
        rows.push(sponsors.slice(i, i + imagesPerRow));
        }
        return rows.map((row, index) => (
            <div key={index} className={`sponsor-row sponsor-row-${imagesPerRow} p-10`}>
              {row.map((sponsor, index) => (
                <div key={index} className="sponsor-item">
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.logo} alt={sponsor.name} className={`sponsor-logo-${imagesPerRow}`} />
                  </a>
                </div>
              ))}
            </div>
          ));
        };

    // helper fucntion to render sponsors based on tier on mobile
    const renderMobileSponsors = (tier: string[], imagesPerRow: number) => {
        const rows = [];
        const sponsors = SPONSORS.filter(sponsor => tier.includes(sponsor.name)); 
        for (let i = 0; i < sponsors.length; i += imagesPerRow) {
        rows.push(sponsors.slice(i, i + imagesPerRow));
        }
        return rows.map((row, index) => (
            <div key={index} className={`mobile-sponsor-row-${imagesPerRow} p-10`}>
              {row.map((sponsor, index) => (
                <div key={index} className="sponsor-item">
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <img src={sponsor.logo} alt={sponsor.name} className={`mobile-sponsor-logo-${imagesPerRow}`} />
                  </a>
                </div>
              ))}
            </div>
          ));
        };

  return (
    <div className="h-auto bg-white text-white pt-navbar flex flex-col items-center">
        <div className="w-11/12 md:w-4/5 lg:w-2/3">
            {/* Title */}
            <div className="mb-1 text-left">
            <h1 className="text-6xl font-AveRom">
                <span className="text-[#050505]"> Our </span>
                <span className="text-[#CC7200]"> 2024 </span>
                <span className="text-[#050505]">Sponsors</span>
            </h1>
            </div>
        </div>

        {/* Desktop Sponsors Section */}
        <div className="sponsor-container text-black hidden sm:block">

            {goldTier.length > 0 && renderSponsors(goldTier, 1)}
            {/* <hr /> */}
            {silverTier.length > 0 && renderSponsors(silverTier, 2)}
            <hr />
            {bronzeTier.length > 0 && renderSponsors(bronzeTier, 3)}
            <hr />
            {brassTier.length > 0 && renderSponsors(brassTier, 4)}
            <hr />
        
            {/* Long Term Sponsors*/}
            <div className="slider flex flex-row w-11/12 md:w-4/5 lg:w-2/3 pt-20 pb-80">
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
            </div>
        
        </div>

        {/* Mobile Sponsors Section */}
        <div className="sponsor-container text-black block sm:hidden">

        {goldTier.length > 0 && renderMobileSponsors(goldTier, 1)}
        {silverTier.length > 0 && renderMobileSponsors(silverTier, 2)}
        <hr />
        {bronzeTier.length > 0 && renderMobileSponsors(bronzeTier, 3)}
        <hr />
        {brassTier.length > 0 && renderMobileSponsors(brassTier, 4)}
        <hr />

        </div>
    </div>
  );
};