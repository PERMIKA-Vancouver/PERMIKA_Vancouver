export const Home = () => {
  const navbarHeight = 15;

  return (
    <>
      <div className={`mt-navbar bg-light-grey h-screen`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
          <span>{navbarHeight}</span>
        </header>
      </div>
      <div className={`bg-light-grey h-screen`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
          <span>{navbarHeight}</span>
        </header>
      </div>
    </>
  );
};
