import ImageModal from "../../../shared/components/ImageModal";
import { useState } from "react";
import SizeFitModal from "../../../shared/components/SizeFitModal";
import { Link } from "react-router-dom";
// import SizeFitModal from "../../../shared/components/SizeFitModal";

const ImageModalContainer: React.FC<{ images: string[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const onPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
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
  const shirt = [
    "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/shirtFront.webp",
    "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/shirtBack.webp",
  ];
  const hoodieBlack = [
    "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieBlackFront.webp",
    "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieBlackBack.webp",
  ];
  const hoodieWhite = [
    "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieWhiteFront.webp",
    "https://permikawebsite.s3.us-west-2.amazonaws.com/assets/merchandise/hoodieWhiteBack.webp",
  ];

  return (
    <div
      id="merchandise"
      className="flex flex-col py-20 pr-[10%] xs:p-28 gap-15 pl-all"
    >
      <div className="flex justify-between flex-wrap xs:gap-5 gap-2">
        <h2>Merchandise</h2>
        <div
          className={`my-auto bg-sunset-orange w-[12.875rem] h-[2.1875rem] rounded-[0.1875rem] hover:bg-[#A86108] transition-colors ease-out duration-500 flex items-center justify-center cursor-pointer`}
        >
          <Link
            to="/order"
            className="text-white button-text w-full text-center"
          >
            Buy
          </Link>
        </div>
      </div>
      <div className="flex gap-20 justify-between flex-wrap">
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={shirt} />

          <p className="text-sm mt-[0.9rem]">Shirt Collection</p>
          <p className="text-xl text-black-text">Anak Rantau T-Shirt</p>
          <div className="flex gap-1">
            <p className="text-sm !decoration-2">$20</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5 rounded-sm">
              5 Sizes - S, M, L, XL, XXL
            </p>
            <SizeFitModal />
          </div>
        </div>
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={hoodieBlack} />

          <p className="text-sm mt-[0.9rem]">Hoodie Collection</p>
          <p className="text-xl text-black-text">Waroeng Cak Timmies Hoodie</p>
          <div className="flex gap-1">
            <p className="text-sm !decoration-2">$35</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5 rounded-sm">
              4 Sizes - M, L, XL, XXL
            </p>
            <SizeFitModal />
          </div>
        </div>
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={hoodieWhite} />

          <p className="text-sm mt-[0.9rem]">Hoodie Collection</p>
          <p className="text-xl text-black-text">Anak Rantau Hoodie</p>
          <div className="flex gap-1">
            <p className="text-sm !decoration-2">$35</p>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5 rounded-sm">
              4 Sizes - M, L, XL, XXL
            </p>
            <SizeFitModal />
          </div>
        </div>
      </div>
    </div>
  );
};
