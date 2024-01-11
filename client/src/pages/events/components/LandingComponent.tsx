import { useEffect, useState } from 'react';
import { YearRolling } from './YearRolling';
import { TitleCollection } from './TitleCollection';

export const LandingComponent = () => {
  const [state, setState] = useState(0);

  const nextState = () => {
    setTimeout(() => setState(state + 1), 1000);
  };

  return (
    <div className="bg-forest-green h-screen pt-navbar">
      <div className="h-full">
        <h1 className="relative text-white top-[39.5%] ml-[20%] -translate-y-[39.5%]">
          {state === 0 && <YearRolling completeHandler={nextState} />}
          {state === 1 && <TitleCollection />}
        </h1>
      </div>
    </div>
  );
};
