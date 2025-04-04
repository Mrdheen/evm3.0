"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-width fixed right-0 left-0 top-6 z-50 w-full">
      <nav className="mx-auto bg-gray-600/30 backdrop-blur-lg p-4 rounded-t-3xl lground flex items-center justify-between shadow-lg">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logos.png" alt="Logo" width={168} height={66} />
        </div>

        {/* Menu Button for Mobile */}
        <button
          className="menu1 text-white text-[24px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu */}
        <div
          className={`bg-gray-700/80 backdrop-blur-md px-6 py-4 rounded-2xl text-white text-base menu space-x-6 hidden`}
        >
          <Link href="/">
            <span className="bg-blue-900 py-2 px-4 rounded-xl">Home</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/#howitworks">
              <span className="hover:text-blue-400">How It Works</span>
            </Link>
            <Link href="/#whoweare">
              <span className="hover:text-blue-400">Who We Are</span>
            </Link>
            <Link href="/#howwehelp">
              <span className="hover:text-blue-400">How We Help</span>
            </Link>
            <Link href="/#faqs">
              <span className="hover:text-blue-400">FAQs</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full rounded-b-3xl bg-gray-600 shadow-lg text-white flex flex-col items-center space-y-4 py-6 menu1">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className="bg-blue-900 py-2 px-4 rounded-xl">Home</span>
            </Link>
            <Link href="/#howitworks" onClick={() => setIsOpen(false)}>
              <span className="hover:text-blue-400">How It Works</span>
            </Link>
            <Link href="/#whoweare" onClick={() => setIsOpen(false)}>
              <span className="hover:text-blue-400">Who We Are</span>
            </Link>
            <Link href="/#howwehelp" onClick={() => setIsOpen(false)}>
              <span className="hover:text-blue-400">How We Help</span>
            </Link>
            <Link href="/#faqs" onClick={() => setIsOpen(false)}>
              <span className="hover:text-blue-400">FAQs</span>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className="bg-blue-500 px-5 py-2 rounded-2xl text-white hover:bg-blue-700">
                Contact Us
              </span>
            </Link>
          </div>
        )}

        {/* Contact Button (Always Visible) */}
        <Link href="/contact" className="hidden menu3">
          <span className="bg-blue-500 px-5 py-2 rounded-2xl text-base text-white hover:bg-blue-700">
            Contact Us
          </span>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
