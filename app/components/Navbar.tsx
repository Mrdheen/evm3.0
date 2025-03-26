import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-600/30 backdrop-blur-lg p-4 rounded-3xl flex items-center justify-between shadow-lg z-50">

      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/logos.png" alt="Logo" width={168} height={66} />
      </div>

      {/* Menu */}
      <div className="bg-gray-900/50 backdrop-blur-md px-6 py-4 rounded-2xl flex space-x-6 text-white text-base">
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

      {/* Contact Button */}
      <Link href="/contact">
        <span className="bg-blue-500 px-5 py-2 rounded-2xl text-white hover:bg-blue-700">
          Contact Us
        </span>
      </Link>
    </nav>
  );
};

export default Navbar;
