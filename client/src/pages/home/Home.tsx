import Logo from '../../assets/logo.png';

import './Home.css';

export const Home = () => {
  return (
    <>
      <div className="text-center">
        <header className="App-header h-[90vh] flex flex-col items-center justify-center text-2xl">
          <img
            src={Logo}
            className="App-logo min-h-[40vmin] pointer-events-none"
            alt="logo"
          />
          <p>PERMIKA Vancouver</p>
        </header>
      </div>
    </>
  );
};
