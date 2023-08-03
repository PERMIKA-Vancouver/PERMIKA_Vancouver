// import { useHeight } from '../../shared/components/NavigationBar';

export const Home = () => {
  // const { navbarHeight } = useHeight();
  const navbarHeight = 15;

  return (
    <>
      <div className={`mt-[20vh] bg-amber-300`}>
        <header className={`text-center text-2xl`}>
          <p>PERMIKA Vancouver</p>
          <span>{navbarHeight}</span>
        </header>
      </div>
    </>
  );
};
