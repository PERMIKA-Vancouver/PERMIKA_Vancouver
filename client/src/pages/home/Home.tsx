import { WelcomingMessage } from './components/WelcomingMessage';
import { CountdownEvent } from './components/CountdownEvent';

export const Home = () => {
  return (
    <>
      <div className={`pt-navbar h-screen bg-light-grey`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
        </header>
      </div>
      <WelcomingMessage />
      <CountdownEvent />
    </>
  );
};
