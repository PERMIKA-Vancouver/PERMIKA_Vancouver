export const LandingPage = () => {
    return (
        <div className="fixed h-screen bg-forest-green text-white pt-navbar flex flex-col items-center justify-center">
            <div className="w-11/12 md:w-4/5 lg:w-2/3">
                {/* Title */}
                <div className="w-full md:w-4/5 text-left md:text-left mb-6 md:mb-0">  
                    <h1 className="text-6xl font-AveRom">
                    GET TO <span className="text-[#CC7200]">KNOW US</span>
                    </h1>
                </div>

                {/* Title Description */}
                <div className="w-full md:w-4/5 text-left md:text-left p-1">
                    <p className="text-left text-lg">
                    PERMIKA Vancouver is a community of international students from Indonesia, established in 2019 with the main goal of supporting Indonesian students in maximizing their academic experiences in Vancouver, BC. Our mission is to provide and relay important information to students, in hopes of keeping everyone up-to-date with relevant news and opportunities. 
                    </p>
                </div>
            </div>
        </div>
    )
}