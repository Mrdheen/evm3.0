import Image from "next/image";

const MobileAppBanner = () => {
  return (
    <section className="relative text-gray-900 mx-10 py-10 my-10 overflow-hidden">
      <div className="bg-cyan-100 app-width pig">
         

        <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6">
             {/* Watermark Background Image */}
        <div className="absolute inset-0 bg-[url(/appdb.png)] bg-cover bg-center opacity-60"></div>
          {/* Left Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-orange-600 font-semibold text-lg md:text-xl">Our Mobile App</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2 mb-6 lg:mb-0">
              Now is the Perfect Moment to Embrace a Positive Transformation!
            </h2>
          </div>

          {/* Right Side - Mobile App Preview */}
          <div className="md:w-1/2 flex flex-col items-center mt-6">
            <Image
              src="/phonee.png"
              alt="Mobile App Preview"
              width={400}
              height={250}
              className="drop-shadow-lg w-full max-w-[300px] md:max-w-[400px]"
            />

            {/* App Store Buttons Below the Phone Image */}
            <p className="text-gray-700 mt-6 text-center text-base md:text-lg">
              Get it now from the Google Play Store or the Apple App Store!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 my-6">
              <Image
                src="/google.png"
                alt="Get it on Google Play"
                width={150}
                height={50}
                className="cursor-pointer w-[130px] sm:w-[150px]"
              />
              <Image
                src="/apple.png"
                alt="Download on the App Store"
                width={150}
                height={50}
                className="cursor-pointer w-[130px] sm:w-[150px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;
