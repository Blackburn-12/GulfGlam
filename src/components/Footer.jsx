import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cover bg-center text-black py-4 font-Montserrat">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <img
          src="/images/GulfGlam.png"
          alt="Logo"
          className="h-14 mx-auto mb-4"
        />
        <p className="text-gray-800 mb-6">
          Quality products and services you can trust.
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-black text-xl hover:text-[#90664e]">
            <FaFacebookF />
          </a>
          <a href="#" className="text-black text-xl hover:text-[#90664e]">
            <FaTwitter />
          </a>
          <a href="#" className="text-black text-xl hover:text-[#90664e]">
            <FaInstagram />
          </a>
          <a href="#" className="text-black text-xl hover:text-[#90664e]">
            <FaLinkedinIn />
          </a>
        </div>

        <div className="flex justify-center gap-6 text-gray-700 text-sm">
          <a href="#" className="hover:text-[#90664e]">
            About Us
          </a>
          <a href="#" className="hover:text-[#90664e]">
            Services
          </a>
          <a href="#" className="hover:text-[#90664e]">
            Contact
          </a>
          <a href="#" className="hover:text-[#90664e]">
            Privacy Policy
          </a>
        </div>

        <p className="text-gray-600 text-xs mt-6">
          &copy; {new Date().getFullYear()} Gulf Glam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
