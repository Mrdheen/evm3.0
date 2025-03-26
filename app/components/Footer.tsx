"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B121D] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Logo & Social Icons */}
          <div>
            <div className="flex items-center space-x-2">
                <Image src="/logoss.png" alt="Logo" width={243} height={126} />
            </div>
            <div className="flex space-x-4 mt-4">
              <SocialIcon Icon={FaFacebookF} />
              <SocialIcon Icon={FaTwitter} />
              <SocialIcon Icon={FaInstagram} />
              <SocialIcon Icon={FaLinkedinIn} />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-xl text-gray-400">
                <li><a href="/contacts">Contact</a></li>
                <li><a href="/blog">Blog</a></li>
                <li>
                  <Link href="/#faqs">
                    <span>FAQs</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-3">Features</h3>
              <ul className="space-y-2 text-xl text-gray-400">
                <li>
                  <Link href="/#howitworks">
                      <span>How It Works</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#howwehelp">
                    <span>How We Help</span>
                  </Link>
                </li>
                <li>
                  <Link href="/#whoweare">
                    <span>Who We Are</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <ContactInfo Icon={HiLocationMarker} text="Learning Park 366 Jerry, Underpass 08966 Virgina, US" />
            <ContactInfo Icon={HiMail} text="hello@maxwell.com" />
            <ContactInfo Icon={HiPhone} text="+1 (903) 326 7104" />
          </div>
        </div>
        <div className="mt-16">
          <Image
            src="/maxwel2.png"
            alt="Image Container"
            width={1280} // Set width to match full screen width
            height={266}  // Adjust height as needed
            className=" px-15 py-5 w-full"
            /> 
        </div>
        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-gray-400">
          <p>Copyright Maxwell Co. © 2024</p>
          <p><a href="#" className="hover:text-white">Privacy & Policy</a></p>
        </div>
      </div>
    </footer>
  );
}

// Social Icon Component
import { IconType } from "react-icons";

const SocialIcon = ({ Icon }: { Icon: IconType }) => (
  <div className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full">
    <Icon className="text-white text-lg" />
  </div>
);

// Contact Info Component
const ContactInfo = ({ Icon, text }: { Icon: IconType, text: string }) => (
  <div className="flex items-start space-x-3">
    <Icon className="text-gray-200 text-3xl" />
    <p className="text-gray-400 text-xl">{text}</p>
  </div>
);
