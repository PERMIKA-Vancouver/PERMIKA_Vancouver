import { DELEGATES } from "../data/rundown";

export const Delegates = () => {
  const len = DELEGATES.length;
  return (
    <div className="min-h-[50vh] bg-forest-green py-36 lg:flex items-center justify-center pl-all lg:!pl-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-28">
        <div className="text-left col-span-1 text-white">
          <h2>Delegates</h2>
        </div>

        <div className="col-span-2 w-fit lg:w-auto">
          {DELEGATES.map((item, index) => (
            <div
              key={index}
              className={`flex gap-6 pr-8 sm:pr-32 lg:pr-0 md:gap-28 ${
                index !== len - 1 && "border-b"
              } border-[#BCBCBC] ${index === 0 ? "pb-4" : "py-4"}`}
            >
              <>
                <h4 className="hidden md:block text-white/50">{index + 1}</h4>
                <p className="block md:hidden text-white/50">{index + 1}</p>
              </>
              <>
                <h4 className="hidden md:block text-white">
                  <a href={"#" + item.name}>{item.name}</a>
                </h4>
                <p className="block md:hidden text-white">
                  <a href={"#" + item.name}>{item.name}</a>
                </p>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
