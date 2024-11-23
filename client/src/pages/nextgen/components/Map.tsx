import map from "../../../assets/nextgenMap.jpg";

export const Map = () => {
  return (
    <div className="py-20 flex items-center">
      <div className="pl-all">
        <img className="w-[30rem] drop-shadow-xl" src={map} alt="brochure" />
      </div>

      <div
        style={{ backgroundColor: "#006BED" }}
        className="block ml-[-20px] py-[100px] px-12 border border-gray-200 rounded-lg shadow"
      >
        <h1 className="text-center text-white pb-5"> Zones</h1>
        <div className="flex gap-10">
          <div>
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              STEM
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Nicholas Koesnadi, P.Eng
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Calvin Wahyudi
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Elaine Kojongian
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Senior Software Developer
            </p>
          </div>
          <div>
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Business
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Ray Dwitama
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Shadrina Wicaksono
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Ray Dwitama
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Fathia Ulya Daruri
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Anastasya Abigail
            </p>
          </div>
          <div>
            <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Arts
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Dominique Suraya
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ● Felicia Audrey Sugiarta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
