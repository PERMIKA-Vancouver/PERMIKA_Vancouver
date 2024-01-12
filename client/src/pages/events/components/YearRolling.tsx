import { useEffect, useState } from 'react';
import SlotCounter from 'react-slot-counter';

export const YearRolling = ({
  completeHandler,
}: {
  completeHandler: () => void;
}) => {
  const [year, setYear] = useState(2019);
  const [yearRollingClassname, setYearRollingClassname] = useState('');

  const complete = () => {
    setYearRollingClassname('fade-out-up');
    completeHandler();
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
    setTimeout(() => complete(), 1800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <h1 className={yearRollingClassname}>
      <SlotCounter
        value={year}
        autoAnimationStart={false}
        sequentialAnimationMode={true}
        duration={1.5}
        containerClassName=""
      />
    </h1>
  );
};
