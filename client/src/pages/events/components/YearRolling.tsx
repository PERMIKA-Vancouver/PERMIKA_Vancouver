import { useEffect, useState } from 'react';
import SlotCounter from 'react-slot-counter';

export const YearRolling = ({
  completeHandler,
  className,
}: {
  completeHandler: (bool: boolean) => void;
  className: string;
}) => {
  const [year, setYear] = useState(2019);
  const complete = async () => {
    await setTimeout(() => completeHandler(true), 1800);
  };

  useEffect(() => {
    setYear(new Date().getFullYear());
    complete();
  }, []);

  return (
    <div className={className}>
      <SlotCounter
        value={year}
        autoAnimationStart={false}
        sequentialAnimationMode={true}
        duration={1.5}
        containerClassName=""
      />
    </div>
  );
};
