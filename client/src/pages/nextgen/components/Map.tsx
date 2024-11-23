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
              <p className="text-gray-700">Nicholas Koesnadi, P.Eng</p>
              <p className="text-gray-700 ">Calvin Wahyudi</p>
              <p className="text-gray-700 ">Elaine Kojongian</p>
              <p className="text-gray-700 ">Semuel Kadarusman</p>
            </div>
            <div className="mt-4">
              <h5 className="mb-2 tracking-tight text-blue-600 ">Business</h5>
              <p className="text-gray-700 ">Ray Dwitama</p>
              <p className="text-gray-700 ">Shadrina Wicaksono</p>
              <p className="text-gray-700 ">Gratianus Deodatus Kavin</p>
              <p className="text-gray-700 ">Aji Putra</p>
              <p className="text-gray-700 ">Fathia Ulya Daruri</p>
              <p className="text-gray-700 ">Anastasya Abigail</p>
            </div>
            <div className="mt-4">
              <h5 className="mb-2 tracking-tight text-green-600">Arts</h5>
              <p className="text-gray-700 ">Dominique Suraya</p>
              <p className="text-gray-700 ">Felicia Audrey Sugiarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
