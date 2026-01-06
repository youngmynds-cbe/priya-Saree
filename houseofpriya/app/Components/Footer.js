import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#E2B05E] text-white">
        {/* TOP FOOTER */}
        <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* LEFT – CONTACT */}
          <div>
            <h4 className="font-gabriola text-[24px] text-[#5B2D8B] mb-6">
              Contact us
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span>📍</span>
                <span>XYZ, RS Puram, Coimbatore</span>
              </li>
              <li className="flex items-center gap-3">
                <span>✉️</span>
                <span>houseofpriya@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>+91 9876543210</span>
              </li>
            </ul>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6 text-lg">
              <span className="cursor-pointer">✕</span>
              <span className="cursor-pointer">f</span>
              <span className="cursor-pointer">◎</span>
              <span className="cursor-pointer">in</span>
            </div>
          </div>

          {/* CENTER – LOGO */}
          <div className="flex justify-center">
            <img
              src="/images/logo.png"
              alt="House of Priya"
              className="w-40"
            />
          </div>

          {/* RIGHT – QUICK LINKS */}
          <div className="text-right">
            <h4 className="font-gabriola text-[24px] text-[#5B2D8B] mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm">
              <li className="flex justify-end items-center gap-2">
                <span>↗</span> Home
              </li>
              <li className="flex justify-end items-center gap-2">
                <span>↗</span> About us
              </li>
              <li className="flex justify-end items-center gap-2">
                <span>↗</span> Blog
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="bg-[#C08A2C] text-xs py-4">
          <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Made with by youngmynds</p>

            <div className="flex gap-6">
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
