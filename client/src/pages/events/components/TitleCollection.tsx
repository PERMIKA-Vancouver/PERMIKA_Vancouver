import { useEffect, useState } from 'react';

const CONTENT = ['PERMIKA Vancouver Events', 'Coming up next,'];

export const TitleCollection = ({
  completeHandler,
  isNextEvent,
}: {
  completeHandler: () => void;
  isNextEvent: boolean;
}) => {
  const [content, setContent] = useState(0);
  const [className, setClassName] = useState('fade-in-up');

  const contentDone = () => {
    setClassName('fade-out-up');
    if (!isNextEvent || content >= CONTENT.length - 1) completeHandler();
    setTimeout(() => nextContent(), 1000);
  };

  const nextContent = () => {
    setClassName('fade-in-up');
    setContent(content + 1);
  };

  useEffect(() => {
    setTimeout(() => contentDone(), 1800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return <h1 className={className}>{CONTENT[content]}</h1>;
};
