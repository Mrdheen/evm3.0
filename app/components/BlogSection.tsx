"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "Which EV charging station is best for my business?",
    description:
      "Installing electric vehicle charging stations is becoming a strategic necessity for businesses. According to the report 'Technology and Innovation Pathways for Zero Carbon Buildings'.",
    image: "/frame1.png",
  },
  {
    title: "100 reasons to drive an electric vehicle",
    description:
      "In Latin America, we are joining Blink Charging’s global celebration campaign: '100 Reasons to Drive an Electric Vehicle', an initiative that highlights the countless advantages of making the transition to electric mobility.",
    image: "/frame2.png",
  },
  {
    title: "Charging Ahead: Navigating the Electric Car Station Landscape",
    description:
      "Maxwell is a social app designed for electric vehicle (EV) owners, providing them with information about nearby charging stations, real-time availability, and the ability to connect with other EV enthusiasts.",
    image: "/frame3.png",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-[#061627] text-white px-6">
      <div className="app-width max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h2 className="text-orange-400 font-semibold">Our Blogs</h2>
            <h3 className="text-3xl lg:text-5xl font-bold leading-tight mt-2">
              Stay Informed on the Cutting-Edge of Technology
            </h3>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full" title="Previous">
              <FaArrowLeft className="text-white text-lg md:text-xl" />
            </button>
            <button className="p-4 bg-gray-700 hover:bg-gray-600 rounded-full" title="Next">
              <FaArrowRight className="text-white text-lg md:text-xl" />
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-[#061627] rounded-xl overflow-hidden p-4">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="rounded-3xl w-full h-auto"
              />
              <h3 className="text-2xl font-semibold mt-6">{blog.title}</h3>
              <p className="text-gray-300 mt-4">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
