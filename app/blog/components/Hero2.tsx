
const Hero = () => {
    return (
      <div className="py-35 relative w-full h-screen bg-[url(/bckhro2.png)] bg-cover bg-center text-white">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        < div className = "app-width relative text-center mt-50 text-gray-100" >
          <h1 className="text-4xl lg:text-7xl font-bold">Blog</h1>
        </div>
      </div>
    );
  };
  
  export default Hero;
  