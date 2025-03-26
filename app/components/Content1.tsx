import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
  return (
    <section id="whoweare" className="max-w-8xl px-20 lg:py-16">
      {/* Title and Description */}
      <div className="grid lg:grid-cols-2 gap-60">
        <div>
          <h3 className="text-orange-400 font-bold text-2xl">Who We Are</h3>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mt-5">
            We Provide a Variety of Charging Solutions <br />
            Customized to Fit your Unique Business Model.
          </h2>
          <p className="text-gray-500 mt-4">
            We are dedicated to providing the necessary infrastructure and expertise to support the 
            transition to electric mobility, ensuring our customers are satisfied and their vehicles remain 
            fully operational.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-4">
            {[
              "Enjoy a warranty of 2 to 3 years, with the option to extend it up to 5 years.",
              "Track your charging activity and earn rewards while you charge.",
              "Access to hundreds of thousands of charging locations.",
              "Participate, engage, and stand a chance to win gift cards in our community video contests!",
            ].map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span>
                    <Image 
                      src="/button.png" 
                      alt="✔️"
                      width={32} 
                      height={32} 
                    />
                </span>
                <p className="text-gray-500">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Stats and Button */}
        <div className="w-full justify-end  flex-1 flex-col space-y-12">
          <div className="grid grid-cols-3 gap-12">
            {[
              { number: "7.5M+", text: "Charging sessions successfully initiated." },
              { number: "13K+", text: "Charging sessions currently active in the network." },
              { number: "82%", text: "Sustainable Charging Stations for a Greener Future" },
            ].map((stat, index) => (
              <div key={index}>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{stat.number}</h2>
                <p className="text-gray-500">{stat.text}</p>
              </div>
            ))}
          </div>

          <Link href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 w-max">
            <span>
            <Image 
                      src="/downcloud.png" 
                      alt="🚀"
                      width={24} 
                      height={24} 
                    />
            </span>
               Download Now
          </Link>
        </div>
      </div>

      {/* Single Image for the Phones */}
      <div className="mt-12 flex justify-center">
        <Image 
          src="/Image Holder.png" 
          alt="Three Phones" 
          width={1440} 
          height={401} 
          className="w-auto"
        />
      </div>
    </section>
  );
};

export default WhoWeAre;
