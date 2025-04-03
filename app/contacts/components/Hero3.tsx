
const Hero = () => {
    return (
      <div className="app-width py-35 relative w-full h-screen bg-[url(/bckhro3.png)] bg-cover bg-center text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        < div className = "relative text-center mt-40 text-gray-100" >
          <h1 className="text-3xl lg:text-7xl font-bold">Which EV charging station is <br /> best for my business</h1>
          <p className="text-lg lg:text-xl mt-12">Posted 10/28/2024</p>
        </div>
      </div>
    );
  };
  
  export default Hero;
  