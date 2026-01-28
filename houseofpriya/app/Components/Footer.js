import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* <footer className="bg-[#E2B05E] text-white">
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
                      <span>1st Floor, 356, Diwan Bahadur Rd, Opposite Kennedy Theatre, R.S. Puram, Coimbatore, Tamil Nadu 641002</span>
                    </li>

                    <li className="flex justify-center lg:justify-start items-center gap-3">
                      <img
                        src="/images/Vector (2).png"
                        alt="Email icon"
                        className="w-5 h-5"
                      />
                      <a href="mailto:houseofpriya@gmail.com">
                        thehouseofpriya@gmail.com
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
  href="https://www.youtube.com/@notdummy" 
  target="_blank"
  rel="noopener noreferrer"
  aria-label="House of Priya on YouTube"
>
  <FaYoutube className="w-6 h-6 cursor-pointer" />
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
                src="/images/logoimage.png"
                alt="House of Priya"
                className="w-28 sm:w-36 md:w-40"
              />

              <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px]">
                <iframe
                  title="House of Priya Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.690449659024!2d76.95141559999999!3d11.002993799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85998b228d577%3A0x1db4c3a7d55f0d68!2sHouse%20of%20Priya!5e1!3m2!1sen!2sin!4v1769499072974!5m2!1sen!2sin"
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
            Developed by{" "}
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
      </footer> */}
      <footer className="relative bg-[#E2B05E] text-white overflow-hidden hidden sm:block">
        {/* Background */}
        <img
          src="/images/Footer.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT — CONTACT */}
          <div className="text-left">
            <h4 className="font-[Gabriola] text-[30px] text-[#5B2D8B] mb-5">
              Contact us
            </h4>

            <ul className="space-y-4 font-readex text-[16px]">
          <li className="flex gap-3">
  <img src="/images/map.png" className="w-5 h-5 mt-1" />
  <span>
    <a
      href="https://maps.app.goo.gl/FfJAE7u8PAacKddm6"
      target="_blank"
      rel="noopener noreferrer"
      
    >
      1st Floor, 356, Diwan Bahadur Rd,
      <br />
      Opposite Kennedy Theatre, R.S. Puram,
      <br />
      Coimbatore, Tamil Nadu 641002
    </a>
  </span>
</li>


              <li className="flex gap-3 items-center">
                <img src="/images/Vector (2).png" className="w-5 h-5" />
                <a href="mailto:houseofpriya@gmail.com">
                  houseofpriya@gmail.com
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <img src="/images/phone-line.png" className="w-5 h-5" />
                <a href="tel:+919876543210">+91 9876543210</a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <FaInstagram className="w-7 h-7" />
              <CiFacebook className="w-7 h-7" />
              <FaYoutube className="w-7 h-7" />
            </div>
          </div>

          {/* CENTER — LOGO + QUICK LINKS */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/logos.svg"
              alt="House of Priya"
              className="w-32 mb-6"
            />

            <h4 className="font-[Gabriola] text-[28px] text-[#5B2D8B] mb-4">
              Quick Links
            </h4>

            <ul className="flex gap-6 font-readex text-[16px]">
              <li className="flex items-center gap-1">
                ↗ <a href="/">Home</a>
              </li>
              <li className="flex items-center gap-1">
                ↗ <a href="/about">About us</a>
              </li>
              <li className="flex items-center gap-1">
                ↗ <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* RIGHT — MAP */}
          <div className="text-left">
            <h4 className="font-[Gabriola] text-[30px] text-[#5B2D8B] mb-5">
              Our Location
            </h4>

            <div className="rounded-xl overflow-hidden shadow-lg border border-white/20">
              <iframe
                title="House of Priya Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.690449659024!2d76.95141559999999!3d11.002993799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85998b228d577%3A0x1db4c3a7d55f0d68!2sHouse%20of%20Priya!5e1!3m2!1sen!2sin!4v1769499072974!5m2!1sen!2sin"
                className="w-full h-[180px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#8B6220] py-4 text-center text-sm">
          Developed by{" "}
          <a
            href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
            target="_blank"
            className="underline"
          >
            Young Mynds Infotech
          </a>
        </div>
      </footer>
      <div className="block sm:hidden relative bg-[#E2B05E] text-white overflow-hidden ">
        {/* Background */}
        <img
          src="/images/image 55.png"
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 px-5 py-10 text-center">
          <img
            src="/images/logos.svg"
            alt="House of Priya"
            className="w-28 mx-auto mb-6"
          />

          {/* QUICK LINKS */}
          <h4 className="font-[Gabriola] text-[26px] text-[#5B2D8B] mb-3">
            Quick Links
          </h4>

          <ul className="flex justify-center gap-5 font-readex text-[15px] mb-8">
            <li className="flex items-center gap-1">
              ↗ <a href="/">Home</a>
            </li>
            <li className="flex items-center gap-1">
              ↗ <a href="/about">About us</a>
            </li>
            <li className="flex items-center gap-1">
              ↗ <a href="/blog">Blog</a>
            </li>
          </ul>

          {/* CONTACT */}
          <h4 className="font-[Gabriola] text-[26px] text-[#5B2D8B] mb-4">
            Contact us
          </h4>

          <ul className="space-y-4 font-readex text-[15px]">
            <li className="flex justify-center gap-3">
              <img src="/images/map.png" className="w-4 h-4 mt-1" />
              <span className="leading-relaxed">
                <a
      href="https://maps.app.goo.gl/FfJAE7u8PAacKddm6"
      target="_blank"
      rel="noopener noreferrer"
      
    >
      1st Floor, 356, Diwan Bahadur Rd,
      <br />
      Opposite Kennedy Theatre, R.S. Puram,
      <br />
      Coimbatore, Tamil Nadu 641002
    </a>
              </span>
            </li>

            <li className="flex justify-center gap-3 items-center">
              <img src="/images/Vector (2).png" className="w-4 h-4" />
              <a href="mailto:houseofpriya@gmail.com">houseofpriya@gmail.com</a>
            </li>

            <li className="flex justify-center gap-3 items-center">
              <img src="/images/phone-line.png" className="w-4 h-4" />
              <a href="tel:+919876543210">+91 9876543210</a>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-8 mt-6">
            <FaInstagram className="w-7 h-7"/>
            <CiFacebook className="w-7 h-7"/>
            <FaYoutube className="w-7 h-7"/>
          </div>

          {/* LOCATION */}
          <h4 className="font-[Gabriola] text-[26px] text-[#5B2D8B] mt-10 mb-4">
            Our Location
          </h4>

          <div className="rounded-xl overflow-hidden shadow-lg border border-white/20">
            <iframe
              title="House of Priya Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.690449659024!2d76.95141559999999!3d11.002993799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85998b228d577%3A0x1db4c3a7d55f0d68!2sHouse%20of%20Priya!5e1!3m2!1sen!2sin!4v1769499072974!5m2!1sen!2sin"
              className="w-full h-[180px]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="bg-[#8B6220] py-4 text-center text-sm">
          Developed by{" "}
          <a
             href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
            target="_blank"
         
          >
            Young Mynds Infotech
          </a>
        </div>
      </div>
      {/* MOBILE FOOTER */}
    </div>
  );
};

export default Footer;
