"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    title: "Which EV charging station is best for my business?",
    description:
      "Installing electric vehicle charging stations is becoming a strategic necessity for businesses. According to the report “Technology and Innovation Pathways for Zero Carbon Buildings”",
    image: "/frame1.png",
  },
  {
    title: "100 reasons to drive an electric vehicle",
    description:
      "In Latin America, we are joining Blink Charging’s global celebration campaign: “100 Reasons to Drive an Electric Vehicle”, an initiative that highlights the countless advantages of making the transition to electric mobility.",
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
      <div className="max-w-8xl mx-15">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-2xl text-orange-400 font-semibold">Our Blogs</h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
              Stay Informed on the Cutting-Edge of Technology
            </h3>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <button
              className="p-5 bg-gray-700 hover:bg-gray-600 rounded-full"
              title="Previous"
            >
              <FaArrowLeft className="text-white text-xl" />
            </button>
            <button
              className="p-5 bg-gray-700 hover:bg-gray-600 rounded-full"
              title="Next"
            >
              <FaArrowRight className="text-white text-xl" />
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#061627] rounded-xl overflow-hidden p-4"
            >
              <div className="relative w-full h-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl"
                />
              </div>
              <h3 className="text-3xl font-semibold mt-12">{blog.title}</h3>
              <p className="text-gray-300 text-xl mt-6">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
