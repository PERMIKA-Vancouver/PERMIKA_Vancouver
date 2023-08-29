import Core from '../../../assets/core.png';

export const WelcomingMessage = () => {
  return (
    <div className="pt-[15vh] pb-[25vh] flex justify-between h-screen w-full">
      <div className="w-[32%] ml-[20%] h-[60%]">
        <h3 className="mb-6 text-black-permika">
          Welcoming message from PERMIKA 2023/24 Core team
        </h3>
        <p className="text-[#9A9A9A] mb-28">
          Hello there! Welcome to PERMIKA Vancouver's new chapter. We're so
          excited for you to experience both our signature and new events in
          this coming year. We also hope to create a community that you can call
          home while living in Vancouver. We're so glad you're here!
          <br />
          <br />
          Tell us a bit about yourself and become a part of Permika Vancouver!
        </p>
        <span>Custom Button</span>
      </div>
      <div>
        <img src={Core} alt="Core Team" className="max-h-[60vh] w-auto" />
      </div>
    </div>
  );
};
