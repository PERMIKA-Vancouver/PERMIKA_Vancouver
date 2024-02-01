import ImageModal from "../../../shared/components/ImageModal";
import {useState} from "react";
import hoodieWhiteBack from "../../../assets/merchandise/hoodieWhiteBack.png";
import hoodieWhiteFront from "../../../assets/merchandise/hoodieWhiteFront.png";
import hoodieBlackBack from "../../../assets/merchandise/hoodieBlackBack.png";
import hoodieBlackFront from "../../../assets/merchandise/hoodieBlackFront.png";
import shirtBack from "../../../assets/merchandise/shirtBack.png";
import shirtFront from "../../../assets/merchandise/shirtFront.png";
import SizeFitModal from "../../../shared/components/SizeFitModal";
import {Link} from "react-router-dom";
// import SizeFitModal from "../../../shared/components/SizeFitModal";

const ImageModalContainer: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <ImageModal
      images={images}
      currentIndex={currentIndex}
      onNext={onNext}
      onPrevious={onPrevious}
    />
  );
};

export const Merchandise = () => {
  const shirt = [shirtFront, shirtBack];
  const hoodieBlack = [hoodieBlackFront, hoodieBlackBack];
  const hoodieWhite = [hoodieWhiteFront, hoodieWhiteBack];

  return (
    <div className="flex flex-col p-28 gap-15">
      <div className="flex justify-between">
        <h2>Merchandise</h2>
        <div
          className={`bg-sunset-orange w-[12.875rem] h-[2.1875rem] rounded-[0.1875rem] hover:bg-[#A86108] transition-colors ease-out duration-500 flex items-center justify-center cursor-pointer`}
        >
          <Link to="/order" className="text-white button-text w-full text-center">
            Buy
          </Link>
        </div>{" "}
      </div>
      <div className="flex gap-20 justify-evenly">
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={shirt} />

          <p className="text-sm mt-[0.9rem]">Hoodie Collection</p>
          <p className="text-xl text-black-text">The PERMIKA Hoodie</p>
          <p className="text-sm">$45</p>
          <div className="flex justify-between mt-8">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5 rounded-sm">
              5 Sizes - XS, S, M, L, XL
            </p>
            <SizeFitModal />
          </div>
        </div>
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={hoodieBlack} />

          <p className="text-sm mt-[0.9rem]">Hoodie Collection</p>
          <p className="text-xl text-black-text">The PERMIKA Hoodie</p>
          <p className="text-sm">$45</p>
          <div className="flex justify-between mt-8">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5 rounded-sm">
              5 Sizes - XS, S, M, L, XL
            </p>
            <SizeFitModal />
          </div>
        </div>
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={hoodieWhite} />

          <p className="text-sm mt-[0.9rem]">Hoodie Collection</p>
          <p className="text-xl text-black-text">The PERMIKA Hoodie</p>
          <p className="text-sm">$45</p>
          <div className="flex justify-between mt-8">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5 rounded-sm">
              5 Sizes - XS, S, M, L, XL
            </p>
            <SizeFitModal />
          </div>
        </div>
      </div>
    </div>
  );
};
