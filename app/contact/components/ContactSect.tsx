"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-white pt-10 max-w-8xl mx-auto">
      {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/contee.png"
            alt="EV Charging Station"
            width={493}
            height={696}
            className="rounded-lg w-full object-cover"
          />
        </div>
      

      {/* Right Form */}
          <div className="w-full lg:w-1/2 p-6">
            <h2 className="text-xl lg:text-4xl font-bold text-gray-900">We are here to help you</h2>
            <p className="text-gray-600 mt-10 text-xl">
              If you have any questions about our products, need help solving a problem or need assistance, our specialized team is here to help you with whatever you need.{" "}
              <a href="mailto:hello@maxwell.com" className="text-blue-600 font-semibold">
                hello@maxwell.com
              </a>
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-15 space-y-4">
                <p className="text-xl text-gray-800">Name</p>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full px-4 mt-2 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.name}
                onChange={handleChange}
              />
                <p className="text-xl mt-3 text-gray-800">Email</p>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="w-full px-4 py-3 mt-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.email}
                onChange={handleChange}
              />
                <p className="text-xl mt-3 text-gray-800">Phone Number</p>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 mt-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.phone}
                onChange={handleChange}
              />
                <p className="text-xl mt-3 text-gray-800">How can we help?</p>
              <textarea
                name="message"
                placeholder="Tell us a little about the project..."
                className="w-full px-4 py-3 mt-2 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-28"
                value={formData.message}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="flex items-center justify-center mt-4 bg-blue-600 text-white py-3 px-8 rounded-2xl hover:bg-blue-700 transition"
              >
                Send Message
                <span className="ml-2"><Image src="/sendicon.png" alt="✔️" width={20} height={20} /></span>
              </button>
            </form>
          </div>
    </section>
  );
}
