import Image from "next/image";

const MobileAppBanner = () => {
  return (
    <section className="app-width relative bg-cyan-100 text-gray-900 pig mx-auto py-10 my-10 overflow-hidden">
      {/* Watermark Background Image */}
      <div className="absolute inset-0 bg-[url(/appdb.png)] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-orange-600 font-semibold text-lg md:text-xl">Our Mobile App</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Now is the Perfect Moment to Embrace a Positive Transformation!
          </h2>
        </div>

        {/* Right Side - Mobile App Preview */}
        <div className="md:w-1/2 flex flex-col items-center">
          <Image
            src="/phonee.png"
            alt="Mobile App Preview"
            width={400}
            height={250}
            className="drop-shadow-lg w-full max-w-[300px] md:max-w-[400px]"
          />

          {/* App Store Buttons Below the Phone Image */}
          <p className="text-gray-700 mt-4 text-center text-base md:text-lg">
            Get it now from the Google Play Store or the Apple App Store!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
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
    </section>
  );
};

export default MobileAppBanner;
