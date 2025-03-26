import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="py-35 relative w-full h-screen bg-[url(/heroback.png)] bg-cover bg-center text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div className="relative mx-20 flex flex-col lg:flex-row items-center lg:items-start pt-10">
        
        {/* Left - Text Content */}
        <div className="lg:w-1/2">
          <p className="text-orange-400 text-base font-semibold">
            For Everyone, Every Business, and Every Electric Vehicle
          </p>
          <h1 className="text-6xl font-bold mt-2 leading-tight">
            Solutions for EV <br /> Charging <br /> Stations
          </h1>
          <p className="text-gray-300 mt-4">
            Our residential, commercial, and fast charging stations are highly compatible,
            built on open standards, and designed for accessibility for all.
          </p>
          <div className="py-10"></div>
          <p className="mt-6 text-gray-400">
            Help us minimize your carbon footprint,<br /> one charge at a time!
          </p>
          
          {/* Explore More Button */}
          <div className="mt-4">
            <Link href="#" className="inline-flex items-center text-white font-medium underline">
              Explore More ↓
            </Link>
          </div>
        </div>

        {/* Right - Floating Image */}
        <div className="w-1/2  relative mt-0 flex">
          <Image 
            src="/phones.png" 
            alt="EV App UI"
            width={670} 
            height={530} 
            className="w-auto drop-shadow-lg"
          />

          {/* Floating Download Box */}
          <div className="absolute bottom-[-10px] right-53 bg-white/10 backdrop-blur-2xl p-4 rounded-2xl text-base">
            <p className="text-white">
              Boost efficiency with the cutting-edge <br /> Charging Station App for <br /> EV Owners
            </p>
            
            <Link href="#" className="mt-3 underline text-white rounded-lg flex items-center space-x-2">
              <span>Download App</span> → 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
