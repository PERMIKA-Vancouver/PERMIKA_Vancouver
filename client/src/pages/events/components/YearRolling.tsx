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
    await setTimeout(() => completeHandler(true), 1000);
  };

  useEffect(() => {
    setYear(2023);
    complete();
  }, []);

  return (
    <div className={className}>
      <SlotCounter
        value={year}
        autoAnimationStart={false}
        sequentialAnimationMode={true}
        duration={0.7}
        containerClassName=""
      />
    </div>
  );
};
