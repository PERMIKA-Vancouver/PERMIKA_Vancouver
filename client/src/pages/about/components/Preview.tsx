export const Preview = () => {
    return (
        <div className="fixed h-screen bg-forest-green text-white pt-navbar flex flex-col items-center justify-center">
            <div className="w-11/12 md:w-4/5 lg:w-2/3">
                {/* Title */}
                <div className="w-full md:w-4/5 text-left md:text-left mb-6 md:mb-0">  
                    <h1 className="text-6xl font-AveRom">
                    Get to <span className="text-[#CC7200]">know us</span>
                    </h1>
                </div>

                {/* Title Description */}
                <div className="w-full md:w-4/5 text-left md:text-left p-1">
                    <p className="text-left text-lg">
                    At PERMIKA Vancouver, we're proud to partner with organizations that share our vision of building a connected and thriving community for Indonesian students. Our sponsors play a crucial role in supporting our events, initiatives, and the overall student experience. Through their generous contributions, we're able to bring exciting events, cultural activities, and resources to students across the Greater Vancouver area. 
                    </p>
                </div>
            </div>
        </div>
    )
}