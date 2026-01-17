import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#E2B05E] text-white">
        <div className="relative w-full overflow-hidden">
          <img
            src="/images/Footer.png"
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute inset-0 w-full h-full"
          />

          <img
            src="/images/image 55.png"
            alt=""
            aria-hidden="true"
            className="block sm:hidden absolute inset-0 w-100 h-120 mt-25"
          />

          <div
            className="max-w-7xl mx-auto px-6 py-14
      grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left"
          >
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                <h4
                  className="
          font-[Gabriola]
          text-[28px] sm:text-[32px]
          leading-none sm:leading-[78.89px]
          text-[#5B2D8B]
          mb-6
        "
                >
                  Contact us
                </h4>
                <address className="not-italic">
                  <ul className="space-y-5 font-readex text-[16px] sm:text-[18px]">
                    <li className="flex justify-center lg:justify-start items-center gap-3">
                      <img
                        src="/images/map.png"
                        alt=""
                        aria-hidden="true"
                        className="w-5 h-5"
                      />
                      <span>XYZ, RS Puram, Coimbatore</span>
                    </li>

                    <li className="flex justify-center lg:justify-start items-center gap-3">
                      <img
                        src="/images/Vector (2).png"
                        alt="Email icon"
                        className="w-5 h-5"
                      />
                      <a href="mailto:houseofpriya@gmail.com">
                        houseofpriya@gmail.com
                      </a>
                    </li>

                    <li className="flex justify-center lg:justify-start items-center gap-3">
                      <img
                        src="/images/phone-line.png"
                        alt="Phone icon"
                        className="w-5 h-5"
                      />
                      <a href="tel:+919876543210">+91 9876543210</a>
                    </li>
                  </ul>
                </address>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center lg:justify-start gap-6 mt-6">
                  <a
                    href="https://www.instagram.com/notdummy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="House of Priya on Instagram"
                  >
                    <FaInstagram className="w-6 h-6 cursor-pointer" />
                  </a>
                  <a
                    href="https://www.instagram.com/notdummy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="House of Priya on Instagram"
                  >
                    <CiFacebook className="w-6 h-6 cursor-pointer" />
                  </a>

                  <a
                    href="https://www.instagram.com/notdummy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="House of Priya on Instagram"
                  >
                    <FaInstagram className="w-6 h-6 cursor-pointer" />
                  </a>

                  <a
                    href="https://www.instagram.com/notdummy/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="House of Priya on Instagram"
                  >
                    <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          <div className="relative flex flex-col h-full justify-center items-center">
              <h4 className="font-[Gabriola] text-[28px] sm:text-[32px] text-[#5B2D8B] mb-6">
                Quick Links
              </h4>

              <ul className="space-y-4 font-readex text-[16px] sm:text-[18px]">
                <li className="flex justify-center lg:justify-start items-center gap-2">
                  <span>↗</span>
                  <a href="/">Home</a>
                </li>

                <li className="flex justify-center font-readex lg:justify-start items-center gap-2">
                  <span>↗</span>
                  <a href="/about" aria-label="About House of Priya">
                    About us
                  </a>
                </li>

                <li className="flex justify-center font-readex lg:justify-start items-center gap-2">
                  <span>↗</span>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="relative flex flex-col items-center gap-6">
              <img
                src="/images/logo.png"
                alt="House of Priya"
                className="w-28 sm:w-36 md:w-40"
              />

              <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
                <iframe
                  title="House of Priya Location"
                  src="https://www.google.com/maps?q=RS%20Puram%20Coimbatore&output=embed"
                  className="w-full h-[150px] sm:h-[140px] md:h-[180px] rounded-xl shadow-lg border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#8B6220] py-4 text-center">
          <div
            className="max-w-6xl mx-auto px-6
        flex flex-col md:flex-row justify-center items-center gap-4"
          >
            <p className="font-['DM_Sans'] text-[13px] sm:text-[14px]">
              Made with by{" "}
              <a
                href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
              >
                Young Mynds Infotech
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
