export const Opportunities = () => {
    return (
        <div className="h-screen bg-forest-green text-white flex items-center justify-center">
            <div className="w-11/12 md:w-4/5 lg:w-3/4 flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Left Section: Title */}
            <div className="w-full md:w-1/2 text-left md:text-left mb-6 md:mb-0">
                <h1 className="text-5xl font-AveRom">Opportunities</h1>
            </div>
    
            {/* Right Section: Content */}
            <div className="w-full md:w-1/2 text-left md:text-left p-1">
                <p className="text-lg mb-6">
                PERMIKA Vancouver are always open to valued partners looking to support our growing community of Indonesian students across the Greater Vancouver. By sponsoring our events and initiatives, your brand will gain visibility among a diverse and engaged audience while making a meaningful impact on the Indonesian student experience.
                </p>
                <a href="mailto:permika.vancouver@gmail.com">
                    <button className="bg-[#CC7200] text-white px-6 py-3 rounded-md hover:bg-orange-700">
                        Talk to our team
                    </button>
                </a>
            </div>
            </div>
        </div>
    );
  };
  