
const Hero = () => {
  return (
    <div className="py-35 relative w-full bg-[url(/bckhro.png)] bg-cover bg-center text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      < div className = "app-width relative text-center mt-45 text-gray-100" >
        <h1 className="text-3xl lg:text-7xl font-bold">Contact Maxwell Charging</h1>
        <p className="mt-5">Our team is ready to help you.</p>
      </div>
    </div>
  );
};

export default Hero;
