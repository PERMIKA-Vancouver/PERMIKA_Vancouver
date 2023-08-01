import Logo from '../../assets/logo.png';
import Black from '../../assets/black.png'
export const Home = () => {
  return (
      <div className="relative h-screen">
          <div className="absolute inset-0 opacity-20 z-10">
              <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={{ top: '10%', left: '5%' }} />
              <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={{ top: '8%', right: '10%' }} />
              <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={{ bottom: '5%', left: '15%' }} />
              <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={{ bottom: '3%', right: '7%' }} />
              <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={{ top: '2%', left: '40%' }} />
              <img src={Black} alt="background" className="absolute w-1/5 opacity-20" style={{ bottom: '10%', right: '35%' }} />
          </div>

          <div className="App z-20 relative">
              <header className="App-header">
                  <h1 className="text-6xl">This is <span className="bg-emerald-950 text-white">PERMIKA Vancouver</span></h1>
                  <p className="w-7/12 text-lg text-left text-gray-500 pt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio excepturi laboriosam minima? Assumenda eos explicabo fugit nam non sint suscipit? Aspernatur eaque ex facere, maxime mollitia nobis non vitae voluptates.</p>
              </header>
          </div>
      </div>

  );
};
