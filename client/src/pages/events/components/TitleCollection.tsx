import { useEffect, useState } from 'react';

const CONTENT = ['PERMIKA Vancouver Events', 'Coming up next,'];

export const TitleCollection = ({
  completeHandler,
}: {
  completeHandler: () => void;
}) => {
  const [content, setContent] = useState(0);
  const [className, setClassName] = useState('fade-in-up');

  const contentDone = () => {
    setClassName('fade-out-up');
    if (content >= CONTENT.length - 1) completeHandler();
    setTimeout(() => nextContent(), 1000);
  };

  const nextContent = () => {
    setClassName('fade-in-up');
    setContent(content + 1);
  };

  useEffect(() => {
    setTimeout(() => contentDone(), 1800);
  }, [content]);

  return <div className={className}>{CONTENT[content]}</div>;
};
