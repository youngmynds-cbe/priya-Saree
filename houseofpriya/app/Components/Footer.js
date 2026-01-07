import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#E2B05E] text-white">
        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div>
            <h4
              className="
    font-[Gabriola]
    font-normal
    text-[32px]
    leading-[78.89px]
    tracking-[0%]
    text-center
    text-[#5B2D8B]
    mb-6
    inline-block
    align-middle
  "
            >
              Contact us
            </h4>
            <ul className="space-y-6 font-[Readex_Pro] text-[20px]  font-normal">
              <li className="flex items-center gap-3">
                <img src="../images/map.png" className="w-6 h-6" />
                <span>XYZ, RS Puram, Coimbatore</span>
              </li>

              <li className="flex items-center gap-3">
                <img src="../images/Vector (2).png" className="w-6 h-6" />
                <span>houseofpriya@gmail.com</span>
              </li>

              <li className="flex items-center gap-3">
                <img src="../images/phone-line.png" className="w-6 h-6" />
                <span>+91 9876543210</span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-8 mt-6 text-lg">
              <span className="cursor-pointer">
                <FaWhatsapp className="w-6 h-6" />
              </span>
              <span className="cursor-pointer">
                <CiFacebook className="w-6 h-6" />
              </span>
              <span className="cursor-pointer">
                <FaInstagram className="w-6 h-6" />
              </span>
              <span className="cursor-pointer">
                <FaLinkedinIn className="w-6 h-6" />
              </span>
            </div>
          </div>

          {/* CENTER – LOGO */}
          <div className="flex justify-center ">
            <img src="/images/logo.png" alt="House of Priya" className="w-40" />
          </div>

          {/* RIGHT – QUICK LINKS */}
          <div className="text-right">
            <h4 className="font-[gabriola] text-[32px] text-[#5B2D8B] mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 font-[Readex_Pro] text-[20px] ">
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <span>↗</span><a href="/">
                 Home </a> 
              </li>
              <li className="flex justify-end items-center gap-2 cursor-pointer">
                <span>↗</span><a href="/about">
                 About us </a> 
              </li>
              <li className="flex justify-end items-center gap- cursor-pointer">
                <span>↗</span> <a href="/blog">Blog
                  </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-[#C08A2C] text-xs py-4">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['DM_Sans'] text-[14px]  leading-[25.4px] align-middle">
              Made with by <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service.">Young Mynds Infotech</a>
            </p>

            <div className="font-['DM_Sans']  flex gap-6 text-[14px]">
              <span className="cursor-pointer">Style Guide</span>
              <span className="cursor-pointer">Licensing</span>
              <span className="cursor-pointer">Instruction</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
