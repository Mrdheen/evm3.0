import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-[url(/heroback.png)] w-full bg-cover bg-center">
      <div className="absolute w-full inset-0 bg-black/50"></div>

      <div className="py-35 relative app-width w-full text-white">
        {/* Content Container */}
        <div className="relative w-full flex flex-col lg:flex-row lg:items-center pt-10">
          {/* Left - Text Content */}
          <div className="lg:w-1/2">
            <div className="max-w-[610px]">
              <p className="text-orange-400 font-semibold">
                For Everyone, Every Business, and Every Electric Vehicle
              </p>
              <h1 className="text-3xl lg:text-7xl font-bold mt-2 leading-tight">
                Solutions for EV Charging Stations
              </h1>
              <p className="text-gray-300 text-base mt-6">
                Our residential, commercial, and fast charging stations are
                highly compatible, built on open standards, and designed for
                accessibility for all.
              </p>
              <div className="mt-10"></div>
              <p className="mt-6 text-gray-400">
                Help us minimize your carbon footprint,
                <br /> one charge at a time!
              </p>

              {/* Explore More Button */}
              <div className="mt-4">
                <Link
                  href="#"
                  className="inline-flex items-center text-white font-medium underline"
                >
                  Explore More ↓
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Floating Image */}
          <div className="flex-1 relative">
            <Image
              src="/phones.png"
              alt="EV App UI"
              width={670}
              height={530}
              className="lg:w-full mx-auto"
            />

            {/* Floating Download Box */}
            <div className="absolute bottom-[-10px]  left-20 bg-white/10 backdrop-blur-2xl p-4 rounded-2xl text-base">
              <p className="text-white">
                Boost efficiency with the cutting-edge <br /> Charging Station
                App for <br /> EV Owners
              </p>

              <Link
                href="#"
                className="mt-3 underline text-white rounded-lg flex items-center space-x-2"
              >
                <span>Download App</span> →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
