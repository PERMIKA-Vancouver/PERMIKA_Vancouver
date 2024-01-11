import { useEffect, useState } from 'react';
import { YearRolling } from './YearRolling';

export const LandingComponent = () => {
  const [state, setState] = useState(0);
  const [isYearRollingDone, setIsYearRollingDone] = useState(false);
  const [yearRollingClassname, setYearRollingClassname] = useState('');

  const nextState = async () => {
    await setTimeout(() => setState(state + 1), 1000);
  };

  useEffect(() => {
    if (isYearRollingDone) {
      setYearRollingClassname('fade-out-up');
      nextState();
    }
  }, [isYearRollingDone]);

  return (
    <div className="bg-forest-green h-screen pt-navbar">
      <div className="h-full">
        <h1 className="relative text-white top-[39.5%] ml-[20%] -translate-y-[39.5%]">
          {state === 0 && (
            <YearRolling
              completeHandler={setIsYearRollingDone}
              className={yearRollingClassname}
            />
          )}
          {state === 1 && (
            <div className="fade-in-up">PERMIKA Vancouver Events</div>
          )}
        </h1>
      </div>
    </div>
  );
};
