import Image from "next/image";

export default function HowWeHelp() {
  return (
    <section id="howwehelp" className="py-16">
      <div className="app-width max-w-8xl mx-auto px-6 md:px-20">
        {/* Header */}
        <h2 className="text-orange-400 font-semibold text-center md:text-left">
          How We Help
        </h2>

        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">
              We Simplify the Transition to Electric Vehicles for Fleets.
            </h2>
          </div>
          <div>
            <p className="mt-6 text-gray-500">
             Since 2019, we&apos;ve led the way in creating EV charging solutions that work with
             all electric vehicle brands and models. Our software platform is designed to
              empower a wide array of organizations—from car manufacturers to workplaces
               and diverse fleet types—helping them
             streamline their EV charging operations and elevate the driver experience
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/image1.png"
              alt="Versatile Solutions"
              width={600}
              height={400}
              className="rounded-3xl w-full max-w-md md:max-w-none"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-bold">Versatile Solutions for Every Need.</h3>
            <h3 className="mt-4 font-semibold text-2xl text-gray-800">
              Customize your EV charging experience.
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Seamlessly establish, oversee, and track your charging operations...",
                "Power your preferred hardware or opt for adaptable charging stations.",
                "Draw in drivers to your charging stations...",
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start space-x-3">
                  <Image src="/button.png" alt="✔️" width={32} height={32} />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Third Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-bold">Fostering Customer Success.</h3>
            <h3 className="mt-4 font-semibold text-2xl text-gray-800">
              We collaborate with you and adapt as you expand.
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Lower operational costs while maximizing station availability...",
                "Boost efficiency with our proactive management tools...",
                "Meet your current and future operational demands...",
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start space-x-3">
                  <Image src="/button.png" alt="✔️" width={32} height={32} />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <Image
              src="/image2.png"
              alt="Customer Success"
              width={600}
              height={400}
              className="rounded-3xl w-full max-w-md md:max-w-none"
            />
          </div>
        </div>

        {/* Fourth Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-center">
          <div className="flex justify-center order-1 md:order-none">
            <Image
              src="/image3.png"
              alt="Driver Experience"
              width={600}
              height={400}
              className="rounded-3xl w-full max-w-md md:max-w-none"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-bold">Elevated Driver Experience.</h3>
            <h3 className="mt-4 font-semibold text-2xl text-gray-800">
              Charge wherever your journey takes you.
            </h3>
            <ul className="mt-6 space-y-4">
              {[
                "Easily find, initiate, and pay for charging using the Maxwell app.",
                "Connect to our network through Apple CarPlay, Android Auto...",
                "Charge at countless locations across our network...",
              ].map((item, index) => (
                <li key={index} className="flex items-center justify-center md:justify-start space-x-3">
                  <Image src="/button.png" alt="✔️" width={32} height={32} />
                  <span className="text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
