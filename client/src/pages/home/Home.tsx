import { CountdownEvent } from './components/CountdownEvent';

export const Home = () => {
  const navbarHeight = 15;

  return (
    <div className="bg-light-grey">
      <div className={`pt-navbar h-screen`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
          <span>{navbarHeight}</span>
        </header>
      </div>
      <CountdownEvent />
    </div>
  );
};
