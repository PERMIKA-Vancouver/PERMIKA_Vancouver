import { PANELIST } from "../data/rundown";

export const Panelist = () => {
  const len = PANELIST.length;
  return (
    <div className="min-h-[50vh] bg-forest-green py-36 lg:flex pl-all">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-28">
        <div className="text-left col-span-1 text-white">
          <h2>Panelists</h2>
        </div>

        <div className="col-span-2 w-fit lg:w-auto">
          {PANELIST.map((item, index) => (
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
                  <a href={"#pan-" + index.toString()}>{item.name}</a>
                </h4>
                <p className="block md:hidden text-white">
                  <a href={"#pan-" + index.toString()}>{item.name}</a>
                </p>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
