import { SPONSORS } from "../data/rundown";

export const Sponsors = () => {
  return (
    <div className="sponsors-page min-h-screen py-20 bg-forest-green text-white">
        {/* Title Section */}
      <h1 className="text-center text-5xl mb-8">
        Our <span className="text-[#CC7200]">Sponsors</span>
      </h1>
      <hr className="w-2/3 mx-auto mb-12 border-t border-[#FFFFFF33]" />

      {/* Sponsors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-8 md:px-16 lg:px-24">
        {SPONSORS.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-card flex flex-col items-center text-center"
          >
            <div className="logo-wrapper w-full h-40 bg-gray-100 flex items-center justify-center">
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <p>Image not available</p>
              )}
            </div>
            <p className="mt-4 text-xl font-medium">{sponsor.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};



