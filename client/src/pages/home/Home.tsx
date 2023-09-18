import { CountdownEvent } from './components/CountdownEvent';

export const Home = () => {
  return (
    <div className="bg-light-grey">
      <div className={`pt-navbar h-screen`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
        </header>
      </div>
      <CountdownEvent />
    </div>
  );
};
