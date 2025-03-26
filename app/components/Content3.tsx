import Image from "next/image";

const HowItWorks = () => {
  return (
    <section id="howitworks" className="bg-[#071E34] text-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-10 flex flex-col lg:flex-row gap-70">
        
        {/* Left Side: Vertical Text + Heading */}
        <div className="relative lg:w-1/4">
          <p className="text-orange-400 font-semibold text-xl ">How It Works</p>
          {/* <h2 className=" text-[18rem] font-bold opacity-10  -rotate-270">
            MAXWELL
          </h2> */}
          <Image src="/MAXWELL.png"
           alt="MAXWELL"
           width={367}
           height={1873} 
           className="mt-10 pl-15"
           />
        </div>

        {/* Right Side: Title + Description + Feature Grid */}
        <div className="lg:w-3/4">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Finding a Charging Station is Easy, Whether in the City or Countryside.
          </h1>
          <p className="mt-4 text-gray-300">
            Stop wasting time searching for charging stations! Our service guarantees an effortless 
            experience, allowing you to find charging stations easily. With our app, you’ll quickly 
            discover nearby options, keeping you powered up for anything.
          </p>

          {/* Feature Grid */}
          <div className="mt-10 grid grid-cols-2 gap-2">
            {[
              {
                image: <Image src="/temp1.png" alt="TRACKING" width={300} height={200} />,
                label: "TRACKING",
                title: "Monitor Your Charging Progress Instantly",
              },
              {
                image: <Image src="/temp5.png" alt="OPEN MAPS" width={300} height={200} />,
                label: "OPEN MAPS",
                title: "Locate Charging Stations Anytime, Anywhere",
              },
              {
                image: <Image src="/temp4.png" alt="DIRECTION" width={300} height={200} />,
                label: "DIRECTION",
                title: "Effortless Route Planning with Charging Stops Included",
              },
              {
                image: <Image src="/temp3.png" alt="COMMUNITY" width={300} height={200} />,
                label: "COMMUNITY",
                title: "Connect with Like-Minded Users, Vote, and Earn Rewards",
              },
              {
                image: <Image src="/temp6.png" alt="REWARDS" width={300} height={200} />,
                label: "REWARDS",
                title: "Keep Track of All Your Activities and Rewards in One Place",
              },
              {
                image: <Image src="/temp2.png" alt="CONNECTIVITY" width={300} height={200} />,
                label: "CONNECTIVITY",
                title: "Link Your Vehicle for Comprehensive Power Reports",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-[#071E34] p-6 rounded-lg">
                {feature.image}
                <p className="text-xs text-gray-400 mt-4 uppercase">{feature.label}</p>
                <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Charging Your Vehicle Section */}
      <div className="mt-20 text-center">
      <div className="grid grid-cols-2 items-center">
        <h2 className="text-5xl font-bold">Charging Your Vehicle</h2>
        <p className="text-gray-400 max-w-md">
            Follow these three easy steps to effortlessly connect your vehicle to our charging station.
        </p>
    </div>


        {/* Steps */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              image: "/how-to-charge-01.png",
              title: "Connect the Charger.",
            },
            {
              step: "2",
              image: "/how-to-charge-02.png",
              title: "Press to Begin Charging",
              desc: "Using the Maxwell app, RFID, or your credit card.",
            },
            {
              step: "3",
              image: "/how-to-charge-03.png",
              title: "Power Up and Hit the Road",
              desc: "Your next adventure is just around the corner.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-[#071E34] border border-gray-700 p-10 rounded-3xl flex flex-col items-center">
              <Image src={item.image} alt={item.title} width={296} height={258} />
              <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
              {item.desc && <p className="text-gray-400 text-base mt-2">{item.desc}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
