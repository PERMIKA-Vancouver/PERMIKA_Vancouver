import { CustomButton } from "../../../shared/components/CustomButton";
import ImageModal from "../../../shared/components/ImageModal";
import { useState } from "react";
import sample1 from "../../../assets/merchandise/hoodie.png";
import sample2 from "../../../assets/merchandise/hoodie2.png";

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
  const images1 = [sample1, sample2];
  const images2 = [sample2, sample1]; // Example
  return (
    <div className="flex flex-col p-28 gap-15">
      <div className="flex justify-between">
        <h3>Merchandise</h3>
        <CustomButton
          text="Buy"
          className=""
          link="https://forms.gle/z8AFC5m5PiJzKBEf7"
        />{" "}
      </div>
      <div className="flex gap-20 justify-evenly">
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={images1} />

          <p className="text-sm mt-3">Hoodie Collection</p>
          <p className="text-xl text-black-text">The PERMIKA Hoodie</p>
          <p className="text-sm">$45</p>
          <div className="flex justify-between mt-4">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5">
              5 Sizes - XS, S, M, L, XL
            </p>
            <p className="text-sm italic underline text-[#4F4F4F] py-1">
              Size & Fit
            </p>
          </div>
        </div>
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={images2} />

          <p className="text-sm mt-3">Hoodie Collection</p>
          <p className="text-xl text-black-text">The PERMIKA Hoodie</p>
          <p className="text-sm">$45</p>
          <div className="flex justify-between mt-4">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5">
              5 Sizes - XS, S, M, L, XL
            </p>
            <p className="text-sm italic underline text-[#4F4F4F] py-1">
              Size & Fit
            </p>
          </div>
        </div>
        <div className="flex flex-col text-grey-body">
          <ImageModalContainer images={images1} />

          <p className="text-sm mt-3">Hoodie Collection</p>
          <p className="text-xl text-black-text">The PERMIKA Hoodie</p>
          <p className="text-sm">$45</p>
          <div className="flex justify-between mt-4">
            <p className="text-sm text-black text bg-[#F1F1F1] py-1 px-3.5">
              5 Sizes - XS, S, M, L, XL
            </p>
            <p className="text-sm italic underline text-[#4F4F4F] py-1">
              Size & Fit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
