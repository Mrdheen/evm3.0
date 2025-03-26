import Image from "next/image";

const EvChargingSection = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-6">
      <div className="max-w-8xl mx-auto px-15">

        {/* Introductory Paragraph */}
        <div className="text-gray-600 text-xl mb-8">
         <p> Installing electric vehicle charging stations is becoming a strategic necessity for businesses.</p>
          <p className="mt-5">
                According to the report <span className="underline">“Technology and Innovation Pathways for Zero Carbon Buildings”</span>, 
                by 2030, electric vehicles will account for more than 60% of vehicles sold worldwide. This growth will 
                increase the demand for EV chargers in businesses, multi-family buildings, and public spaces. 
                For example, <span className="underline">Brazil is expected to need 150,000 charging stations by 2035,</span> while Mexico will require 38,000 by 2041.  
                Businesses must adopt EV charging solutions to stay competitive and sustainable.
          </p>
        </div>

        {/* Section 1: Benefits */}
        <h2 className="text-5xl font-bold mt-8 mb-4">
          Benefits of Installing EV Chargers in Businesses
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
            <p className=" w-1/2 text-gray-600 text-xl mb-6">
            Incorporating charging stations in your business not only responds to a global trend, 
            but also offers multiple benefits: generating additional income by offering an extra 
            service, attracting and retaining customers, standing out from the competition, promoting 
            sustainability in the community, and increasing the value of the property.</p>
            <div className="w-1/2 mb-10 flex justify-center">
                <Image
                    src="/framee1.png" 
                    alt="EV Charging Station Business"
                    width={800}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </div>
        <div className="text-gray-600 text-xl mb-10">
        <p>One of the most frequently asked questions we get from business owners interested in EV charging infrastructure is: Which EV
        charging station is best suited for my business?</p>
        <p className="mt-8">
        In this article, we explain the differences between the types of chargers and the key features you should consider when making
         the decision to install electric vehicle charging stations in your company.</p>
        </div>
            
        {/* Section 2: Key Factors */}
        <h2 className="text-5xl font-bold mt-10">
          Key Factors to Consider When Choosing EV<br /> Chargers for a Business
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10 pt-2">
          <div className="md:w-1/2">
            <Image
              src="/framee2.png"
              alt="Key Factors EV Charger"
              width={600}
              height={350}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl">
              <li>Type of industry and vehicle compatibility</li>
              <li>Required loading speed</li>
              <li>Existing electrical infrastructure</li>
              <li>Operating and installation costs</li>
              <li>Charging station expansion capacity</li>
              <li>Space and location of chargers</li>
            </ul>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-10 text-xl">
            <li className="underline">Type of industry</li>
            <li>Your customers&apos; needs and the types of vehicles they will be charging at your location</li>
            <li>Required loading speed</li>
            <li>Existing electrical infrastructure and, if necessary, updating</li>
            <li>Operating and installation costs</li>
            <li>Future expansion capacity</li>
            <li>Number of chargers and compatibility with energy management systems</li>
            <li>Installation options, for example, wall-mounted or pedestal chargers.</li>
            <li>Space and location of chargers</li>
        </ul>
        <p className="text-gray-700 text-xl">As a next step, you need to consider exactly what type of charging stations to choose, based on your charging level.</p>
        {/* Section 3: Level 2 Charging Benefits */}
        <h3 className="text-5xl font-bold mt-10 mb-3">
          Level 2 Charging Stations: Benefits and Features
        </h3>
        <div className="flex flex-col md:flex-row items-center mt-10 gap-6">
          <div className="md:w-1/2">
            <p className="text-gray-600 text-xl">
            Level 2 charging stations are an efficient and affordable solution for various types of businesses and residential environments. 
            Their main benefits are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mt-5">
              <li>Faster charging compared to Level 1 chargers, which are the chargers that are usually already
                 included with the electric vehicle when it is purchased. However, many drivers, not having 
                 a Level 1 charger at home, decide to recharge
                 their car at a public station, and this is where chargers in businesses come into play</li>
              <li>Easy installation and lower equipment and start-up costs.</li>
              <li>Ideal for businesses and locations where visitors or customers stay more than 45 minutes.</li>
              <li>They use the standard 220 V supply, and some establishments already have the necessary electrical infrastructure.</li>
              <li>Flexibility to install in homes, businesses, public spaces and adapt to the charging needs of many industries, including dealerships and fleets.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/frameee.png"
              alt="Level 2 EV Charger"
              width={600}
              height={700}
              className="rounded-3xl"
            />
          </div>
        </div>

        {/* Section 4: Industries */}
        <h2 className="text-5xl font-bold mt-10 mb-3">
          Industries Suitable for Installing Level 2 Charging Stations
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mt-5 underline">
            <li>Local businesses, shopping malls and entertainment areas.</li>
            <li>Multi-family and condominiums.</li>
            <li>Slow to medium traffic fleets.</li>
            <li>Electric vehicle dealers.</li>
            <li>Public and private parking, in workplaces, airports, companies, etc.</li>
            <li>Hotels, convention centers and tourist attractions.</li>
            <li>Universities, educational institutions.</li>
            <li>Government institutions.</li>
        </ul>

        {/* Section 5: Maxwell Charging Solutions */}
        <h2 className="text-5xl font-bold mt-10 mb-3">
          Maxwell Level 2 EV Charging Solutions:
        </h2>
        <div className="text-gray-700 text-xl mt-5">
            <ul className="list-disc list-inside"><li>Host property</li></ul>
            <p>Ideal for service locations, this business model option is for those who want to be the sole owner and operator of their 
                electric vehicle charging stations.</p>
            <ul className="list-disc list-inside"><li>Maxwell as a service</li></ul>
            <p>Maxwell subscription program provides an EV charging station with low upfront costs and full ownership control without any of the hassle.</p>
            <ul className="list-disc list-inside space-y-2">
                <li>Hybrid model</li>
                <li>With this business model, Blink covers the cost of equipment, operations, and management. All you have to do is prepare 
                    your location for the installation of the EV</li>
                <li>Turnkey</li>
                <li>For certain locations, Blink provides the facility, equipment, operations and management, and will share a portion of 
                    the revenue with the host. tion, and will share a portion of the revenue with the host.</li>
            </ul>
           
        </div>
      </div>
    </section>
  );
};

export default EvChargingSection;
