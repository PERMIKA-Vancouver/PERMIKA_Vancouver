import { WelcomingMessage } from './components/WelcomingMessage';
import { CountdownEvent } from './components/CountdownEvent';
import { useCallback, useEffect, useState } from 'react';
import { MOBILE_WIDTH } from '../../shared/data/common';

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <>
      <div className={`pt-navbar h-screen bg-light-grey`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
        </header>
      </div>
      <WelcomingMessage isMobileView={windowWidth < MOBILE_WIDTH} />
      <CountdownEvent isMobileView={windowWidth < MOBILE_WIDTH} />
    </>
  );
};
