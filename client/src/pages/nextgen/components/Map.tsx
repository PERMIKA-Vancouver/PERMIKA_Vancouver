import map from '../../../assets/nextgenMap.jpg';

export const Map = () => {
  return (
    <div className="py-20 pl-all items-center">
      <h2 className="mb-4">Map</h2>
      <div className="md:flex">
        <div className="mb-10">
          <img className="w-[50rem] drop-shadow-xl" src={map} alt="brochure" />
        </div>

        <div className="">
          <h3 className="">Zones</h3>
          <div className="md:flex gap-10">
            <div className="mt-4">
              <h5 className="mb-2 tracking-tight text-red-600">STEM</h5>
              <a href="#0" className="block text-base text-gray-700">
                Nicholas Koesnadi, P.Eng
              </a>
              <a href="#4" className="block text-base text-gray-700">
                Calvin Wahyudi
              </a>
              <a href="#6" className="block text-base text-gray-700 ">
                Elaine Kojongian
              </a>
              <a href="#11" className="block text-base text-gray-700 ">
                Semuel Kadarusman
              </a>
            </div>
            <div className="mt-4">
              <h5 className="mb-2 tracking-tight text-blue-600 ">Business</h5>
              <a href="#1" className="block text-base text-gray-700 ">
                Ray Dwitama
              </a>
              <a href="#2" className="block text-base text-gray-700 ">
                Shadrina Wicaksono
              </a>
              <a href="#3" className="block text-base text-gray-700 ">
                Gratianus Deodatus Kavin
              </a>
              <a href="#5" className="block text-base text-gray-700 ">
                Aji Putra
              </a>
              <a href="#7" className="block text-base text-gray-700 ">
                Fathia Ulya Daruri
              </a>
              <a href="#9" className="block text-base text-gray-700 ">
                Anastasya Abigail
              </a>
            </div>
            <div className="mt-4">
              <h5 className="mb-2 tracking-tight text-green-600">Arts</h5>
              <a href="#8" className="block text-base text-gray-700 ">
                Dominique Suraya
              </a>
              <a href="#10" className="block text-base text-gray-700 ">
                Felicia Audrey Sugiarta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
