import img1 from "../../../assets/tuxpi.com.1694742973-min.webp"
import img2 from "../../../assets/DSC01469-min.webp";
import img3 from "../../../assets/DSC01619-min.webp";
import img4 from "../../../assets/DSC01487-min.webp";
import img5 from "../../../assets/DSC01610-min.webp";
import img6 from "../../../assets/DSC01614-min.webp";
import img7 from "../../../assets/DSC01481-min.webp";
import img8 from "../../../assets/tuxpi.com.1694743036-min.webp";


const LandingImageSmall: React.FC = () => {

    return (
        <div className="h-screen relative overflow-hidden">
            <img
                src={img1}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-25"
                style={{ top: `80%`, left: `75%` }}
            />
            <img
                src={img2}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-25"
                style={{ top: `37%`, left: `75%` }}
            />
            <img
                src={img3}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-25"
                style={{ top: `40%`, left: `30%` }}
            />
            <img
                src={img4}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-25"
                style={{ top: `23%`, left: `55%` }}
            />
            <img
                src={img5}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-25"
                style={{ top: `26%`, left: `-5%` }}
            />
            <img
                src={img6}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-25"
                style={{ top: `55%`, left: `80%` }}
            />
            <img
                src={img7}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-40"
                style={{ top: `45%`, left: `-13%` }}
            />
            <img
                src={img8}
                alt="background"
                className="absolute w-1/4 sm:w-1/4 md:w-1/5 opacity-40"
                style={{ top: `75%`, left: `-5%` }}
            />
            <header
                className={`min-h-screen flex flex-col items-start justify-end ml-all xl:pb-44 pb-56`}
            >
                <div className="z-20 font-Avenir flex flex-col items-start">
                    <span className="text-[48px] z-20 pt-2">This is</span>
                    <span className="text-[48px] z-20 bg-[#102713] text-white px-1 mt-1 rounded-md">PERMIKA</span>
                    <span className="text-[48px] z-20 bg-[#102713] text-white px-1 mt-1 rounded-md">Vancouver</span>
                </div>


                <p className="z-20 text-md text-left w-9/12 text-gray-500 pt-4 font-RegoReg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
                    excepturi laboriosam minima?
                </p>
            </header>
        </div>
    );

};

export default LandingImageSmall;
