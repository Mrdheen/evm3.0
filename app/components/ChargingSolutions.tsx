import Image from "next/image";
import Link from "next/link";

const ChargingSolutions = () => {
  return (
    <section className="mx-auto py-16">
      
      {/* 🔹 Header & Description Section */}
      <div className="app-width flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        
        {/* Left - Header Text */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 ">
            Electric Vehicle Charging Options Tailored for Every Business and Driver
          </h1>
        </div>

        {/* Right - Description & Contact Button */}
        <div className="lg:w-1/2">
          <p className="mt-4 text-gray-600">
            For over ten years, we’ve been pioneering the fueling network of the future.
            We’ve established more charging locations than any other provider, and our
            customers rely on us for their charging needs throughout the day.
          </p>

          {/* 🔹 Contact Button */}
          <div className="flex justify-center lg:justify-start">
            <Link
              href="#"
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium flex items-center gap-2 w-max mx-auto lg:mx-0"
            >
              <span>
                <Image src="/mail.png" alt="✔️" width={24} height={24} />
              </span>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Map Section */}
      <div className="app-width mt-10 mx-6 flex justify-center">
        <Image
          src="/Map.png" // Replace with your real map image
          alt="EV Charging Map"
          width={1000}
          height={500}
          className="w-full"
        />
      </div>

      {/* 🔹 Features Section */}
      <div className="app-width mx-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <Image src="/charge1.png" alt="✔️" width={48} height={48}/>,
            title: "Commercial and Business Solutions",
            description:
              "We provide a comprehensive array of deployment options, including single and dual-port configurations for all vehicles, as well as dual-port setups with e-bike charging.",
          },
          {
            icon: <Image src="/charge2.png" alt="✔️" width={48} height={48}/>,
            title: "Automakers and Fleet Solutions",
            description:
              "As the leading provider in fleet electrification, we deliver solutions for rideshare services, food delivery companies, and electric vehicle fleet managers across the nation.",
          },
          {
            icon: <Image src="/charge3.png" alt="✔️" width={48} height={48}/>,
            title: "Personal and Driver Use",
            description:
              "By creating an account, you gain access to a wider selection of charging options, enjoy zero roaming fees, and experience less hassle while using our app on the go.",
          },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-2xl p-6">
            {item.icon}
            <div className="flex items-center space-x-3">
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
            </div>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChargingSolutions;
