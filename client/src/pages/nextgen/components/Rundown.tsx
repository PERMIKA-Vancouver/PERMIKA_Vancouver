import { SCHEDULE } from '../data/rundown';

export const Rundown = () => {
  const len = SCHEDULE.length;
  return (
    <div className="min-h-[50vh] py-36 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-28">
        <div className="text-left col-span-1">
          <h2>Rundown</h2>
        </div>

        <div className="col-span-2">
          {SCHEDULE.map((item, index) => (
            <div
              key={index}
              className={`flex gap-28 ${
                index !== len - 1 && 'border-b'
              } border-[#BCBCBC] ${index === 0 ? 'pb-4' : 'py-4'}`}
            >
              <h4 className="text-black/50">{item.time}</h4>
              <h4>{item.activity}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
