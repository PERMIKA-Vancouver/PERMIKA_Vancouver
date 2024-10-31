import { SCHEDULE } from "../data/rundown";

export const Rundown = () => {
  const len = SCHEDULE.length;
  return (
    <div className="min-h-[50vh] py-36 lg:flex pl-all ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 lg:gap-28">
        <div className="text-left col-span-1">
          <h2>Rundown</h2>
        </div>

        <div className="col-span-2 w-fit lg:w-auto">
          {SCHEDULE.map((item, index) => (
            <div
              key={index}
              className={`flex gap-6 pr-8 sm:pr-32 lg:pr-0 md:gap-28 ${
                index !== len - 1 && "border-b"
              } border-[#BCBCBC] ${index === 0 ? "pb-4" : "py-4"}`}
            >
              <>
                <h4 className="hidden md:block text-black/50">{item.time}</h4>
                <p className="block md:hidden text-black/50">{item.time}</p>
              </>
              <>
                <h4 className="hidden md:block">{item.activity}</h4>
                <p className="block md:hidden">{item.activity}</p>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
