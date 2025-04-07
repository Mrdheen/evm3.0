"use client";

import Image from "next/image";

const EvChargingSection = () => {
  return (
    <section className="bg-white text-gray-900 py-12">
      <div className="app-width max-w-8xl mx-auto">

        {/* Introductory Paragraph */}
        <div className="text-gray-600 mb-8">
          <p>Installing electric vehicle charging stations is becoming a strategic necessity for businesses.</p>
          <p className="mt-5">
            According to the report <span className="underline">“Technology and Innovation Pathways for Zero Carbon Buildings”</span>, 
            by 2030, electric vehicles will account for more than 60% of vehicles sold worldwide. This growth will 
            increase the demand for EV chargers in businesses, multi-family buildings, and public spaces. 
            For example, <span className="underline">Brazil is expected to need 150,000 charging stations by 2035,</span> while Mexico will require 38,000 by 2041.
          </p>
        </div>

        {/* Section 1: Benefits */}
        <h2 className="text-3xl lg:text-5xl font-bold mt-8 mb-4">
          Benefits of Installing EV Chargers in Businesses
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <p className="w-full md:w-1/2 text-gray-600 mb-6">
            Incorporating charging stations in your business not only responds to a global trend but also offers multiple benefits:
            generating additional income, attracting and retaining customers, promoting sustainability, and increasing property value.
          </p>
          <div className="w-full md:w-1/2 mb-10 flex justify-center">
            <Image src="/framee1.png" alt="EV Charging Station Business" width={800} height={400} className="rounded-lg w-full h-auto" />
          </div>
        </div>

        <div className="text-gray-600 mb-10">
          <p>One of the most frequently asked questions we get is: Which EV charging station is best for my business?</p>
          <p className="mt-8">In this article, we explain the differences between chargers and the key features to consider.</p>
        </div>

        {/* Section 2: Key Factors */}
        <h2 className="text-3xl lg:text-5xl font-bold mt-10">
          Key Factors to Consider When Choosing EV Chargers
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div className="w-full md:w-1/2">
            <Image src="/framee2.png" alt="Key Factors EV Charger" width={600} height={350} className="rounded-lg w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2">
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Type of industry and vehicle compatibility</li>
              <li>Required charging speed</li>
              <li>Existing electrical infrastructure</li>
              <li>Operating and installation costs</li>
              <li>Charging station expansion capacity</li>
              <li>Space and location of chargers</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Level 2 Charging Benefits */}
        <h2 className="text-3xl lg:text-5xl font-bold mt-10 mb-3">
          Level 2 Charging Stations: Benefits and Features
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div className="w-full md:w-1/2">
            <p className="text-gray-600">
              Level 2 charging stations are an efficient and affordable solution for businesses and residential areas. Their main benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-5">
              <li>Faster charging compared to Level 1 chargers</li>
              <li>Easy installation and lower costs</li>
              <li>Ideal for businesses where customers stay 45+ minutes</li>
              <li>Uses standard 220V supply</li>
              <li>Flexible installation in homes, businesses, and public spaces</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/frameee.png" alt="Level 2 EV Charger" width={600} height={700} className="rounded-3xl w-full h-auto" />
          </div>
        </div>

        {/* Section 4: Industries */}
        <h2 className="text-3xl lg:text-5xl font-bold mt-10 mb-3">
          Industries Suitable for Level 2 Charging Stations
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mt-5 underline">
          <li>Shopping malls and entertainment areas</li>
          <li>Multi-family buildings and condominiums</li>
          <li>Medium traffic fleets</li>
          <li>Electric vehicle dealerships</li>
          <li>Public and private parking spaces</li>
          <li>Hotels and tourist attractions</li>
          <li>Universities and educational institutions</li>
          <li>Government institutions</li>
        </ul>

        {/* Section 5: Maxwell Charging Solutions */}
        <h2 className="text-3xl lg:text-5xl font-bold mt-10 mb-3">
          Maxwell Level 2 EV Charging Solutions
        </h2>
        <div className="text-gray-600 mt-5">
          <ul className="list-disc list-inside">
            <li className="font-semibold">Host Property</li>
          </ul>
          <p>Ideal for businesses that want full ownership and control of their EV charging stations.</p>
          <ul className="list-disc list-inside mt-3">
            <li className="font-semibold">Maxwell as a Service</li>
          </ul>
          <p>A subscription program providing EV charging with low upfront costs.</p>
          <ul className="list-disc list-inside mt-3">
            <li className="font-semibold">Hybrid Model</li>
          </ul>
          <p>Maxwell covers equipment and operation costs while businesses prepare the location.</p>
          <ul className="list-disc list-inside mt-3">
            <li className="font-semibold">Turnkey</li>
          </ul>
          <p>For select locations, Maxwell provides equipment, operations, and revenue sharing.</p>
        </div>
      </div>
    </section>
  );
};

export default EvChargingSection;
