import { WelcomingMessage } from './components/WelcomingMessage';
import { CountdownEvent } from './components/CountdownEvent';

export const Home = () => {
  const navbarHeight = 15;

  return (
    <>
      <div className={`pt-navbar h-screen bg-light-grey`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
          <span>{navbarHeight}</span>
        </header>
      </div>
      <WelcomingMessage />
      <CountdownEvent />
    </>
  );
};
