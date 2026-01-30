"use client";

import React from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { MoveUpRight } from "lucide-react";
const Landing = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const blogPosts = [
    {
      id: 1,
      image: "../images/img (8).png",
      badge: "Saree Styling",
      badgeColor: "bg-[#6B2D8F]",
      title: "The Art of Draping: 5 Modern Styles for the Classic Saree",
      excerpt:
        "Discover contemporary draping techniques that honor tradition while embracing modern...",
      author: "Ananya Sharma",
      authorImage: "https://i.pravatar.cc/150?img=1",
      date: "Dec 18, 2025",
    },
    {
      id: 2,
      image: "../images/img (9).png",
      badge: "Heritage",
      badgeColor: "bg-[#6B2D8F]",
      title: "Weaving Dreams: The Legacy of Banarasi Silk",
      excerpt:
        "Journey through centuries of craftsmanship as we explore the rich heritage of Banarasi...",
      author: "Priya Mehta",
      authorImage: "https://i.pravatar.cc/150?img=5",
      date: "Dec 16, 2025",
    },
    {
      id: 3,
      image: "../images/img (10).png",
      badge: "Festive Wear",
      badgeColor: "bg-[#6B2D8F]",
      title: "Festive Elegance: Choosing Your Perfect Wedding Saree",
      excerpt:
        "From vibrant ceremonies to grand celebrations, find the saree that captures...",
      author: "Kavya Reddy",
      authorImage: "https://i.pravatar.cc/150?img=9",
      date: "Dec 5, 2025",
    },
    {
      id: 4,
      image: "../images/img (11).png",
      badge: "Saree Styling",
      badgeColor: "bg-[#6B2D8F]",
      title: "Office to Evening: Versatile Saree Styling Tips",
      excerpt:
        "Master the art of transitioning your saree from professional settings to...",
      author: "Nisha Kapoor",
      authorImage: "https://i.pravatar.cc/150?img=10",
      date: "Nov 28, 2025",
    },
    {
      id: 5,
      image: "../images/img (12).png",
      badge: "Heritage",
      badgeColor: "bg-[#6B2D8F]",
      title: "Threads of Heritage: Supporting Indian Handloom Artisans",
      excerpt:
        "Explore the stories behind our master weavers and discover how choosing...",
      author: "Ananya Sharma",
      authorImage: "https://i.pravatar.cc/150?img=12",
      date: "Nov 20, 2025",
    },
    {
      id: 6,
      image: "../images/img (13).png",
      badge: "Festive Wear",
      badgeColor: "bg-[#6B2D8F]",
      title: "Spring Celebrations: Pastels and Florals for the Season",
      excerpt:
        "Embrace the beauty of spring with our curated collection of pastel sarees featuring...",
      author: "Priya Mehta",
      authorImage: "https://i.pravatar.cc/150?img=15",
      date: "Nov 12, 2025",
    },
  ];
  return (
    <>
      <main>
        <section>
          <div className="h-[880px] md:h-[1040px]  lg:h-auto relative overflow-hidden">
            {/* Background */}
           <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 hero-background  lg:-mt-5 2xl:-mt-8"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 block lg:hidden"
                style={{ backgroundImage: "url('/images/bgmobile1.png')" }}
              />
              <div className="absolute inset-0"></div>
            </div>

            {/* Border */}
            <div className="absolute inset-0 pointer-events-none block lg:hidden">
              {/* Border */}
              <div className="absolute top-6 sm:top-10 left-4 sm:left-6 right-4 sm:right-6 bottom-4 sm:bottom-6 border-2 border-white opacity-40 rounded-sm"></div>

              <img
                src="/images/Frame 52784.png"
                alt=""
                aria-hidden
                className="
      absolute
      bottom-3 sm:bottom-5
      right-7 sm:right-5
      w-10 sm:w-12
      z-20
    "
              />
            </div>

            {/* NAVBAR */}
            <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-6">
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl flex items-center justify-center lg:ml-10 relative">
                  {/* <div className="w-full h-full absolute bg-[url('/images/bg.png')] rounded-xl hidden lg:block"></div> */}
                  <img
                    src="/images/logos.svg"
                    alt="House of Priya Logo"
                    className="mt-5 md:mt-20 w-20 sm:w-24 lg:w-34 object-contain z-10 lg:-mt-9 block lg:hidden"
                  />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex gap-15 font-readex font-bold text-[20px] -mt-30">
                  <a
                    href="/"
                    className={
                      pathname === "/"
                        ? "text-[#6B46C1]"
                        : "text-[#6C6C6C] hover:text-purple-700"
                    }
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    className={
                      pathname === "/about"
                        ? "text-[#6B46C1]"
                        : "text-[#6C6C6C] hover:text-purple-700"
                    }
                  >
                    About
                  </a>
                  <a
                    href="/blog"
                    className={
                      pathname === "/blog"
                        ? "text-[#6B46C1]"
                        : "text-[#6C6C6C] hover:text-purple-700"
                    }
                  >
                    Blog
                  </a>
                  <a
                    href="https://maps.app.goo.gl/FfJAE7u8PAacKddm6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#6C6C6C] hover:text-purple-700"
                  >
                    <span>Location</span>
                    <MoveUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </a>
                </div>

                {/* Desktop Button */}
                <a
                  href="https://wa.me/919363167299"
                  target="_blank"
                  className="hidden lg:block bg-[#6B46C1] hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium shadow-lg -mt-30"
                >
                  Enquire on WhatsApp
                </a>

                {/* Hamburger (Mobile only – LAST) */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden text-4xl text-gray-500 z-50 p-5"
                  arial-label="Toggle menu"
                >
                  {menuOpen ? "✕" : "☰"}
                </button>
              </div>

              {/* MOBILE DROPDOWN */}
              {menuOpen && (
                <div className="lg:hidden mt-4 bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 font-readex font-bold text-lg">
                  <a
                    href="/"
                    onClick={() => setMenuOpen(false)}
                    className={
                      pathname === "/" ? "text-[#6B46C1]" : "text-gray-600"
                    }
                  >
                    Home
                  </a>
                  <a
                    href="/about"
                    onClick={() => setMenuOpen(false)}
                    className={
                      pathname === "/about" ? "text-[#6B46C1]" : "text-gray-600"
                    }
                  >
                    About
                  </a>
                  <a
                    href="/blog"
                    onClick={() => setMenuOpen(false)}
                    className={
                      pathname === "/blog" ? "text-[#6B46C1]" : "text-gray-600"
                    }
                  >
                    Blog
                  </a>
                  <a
                    href="https://maps.app.goo.gl/FfJAE7u8PAacKddm6"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-1 text-gray-600 hover:text-[#6B46C1] transition"
                  >
                    <span>Location</span>
                    <MoveUpRight className="w-5 h-5" strokeWidth={2.5} />
                  </a>
                </div>
              )}
            </nav>

            {/* MAIN CONTENT */}
            <div
              className="
      relative z-10
      grid grid-cols-1 lg:grid-cols-2
      gap-10 lg:gap-12
      items-center
      px-4 sm:px-8 lg:px-16
      py-16 lg:py-12
      max-w-7xl mx-auto
      mt-0 lg:-mt-26
    "
            >
              {/* Left Content */}
              <div className="space-y-6 text-center lg:text-left -mt-13 sm:mt-0">
                <h1
                  className="
          font-['Cormorant_Garamond'] font-semibold
          text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px]
          leading-tight sm:leading-15 lg:leading-22.5
          tracking-[-0.5px]
          lg:text-white text-[#6B46C1]
        "
                >
                  Stories Woven in Tradition & Style
                </h1>

                <p
                  className="
         font-readex 
          text-[16px] sm:text-[18px] lg:text-18px] font-readex
          lg:text-white text-gray-500 font-medium
          tracking-[-0.5px]
        "
                >
                  Insights, inspiration, and timeless elegance from House of
                  Priya.
                </p>

                <a
                  className="bg-[#6B46C1] hover:bg-purple-800 text-white px-8 py-3 rounded-md 
             font-medium transition shadow-lg inline-flex items-center gap-2 
             mt-4 font-readex"
                  href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>

              {/* Right Image */}
              <div className="relative flex justify-center">
                <div
                  className="
          px-0 sm:px-6 lg:px-1
          w-full sm:w-[380px] md:w-[450px] lg:w-[549px]
          h-auto lg:h-[600px]
        "
                >
                  <img
                    src="../images/DSC02599 1 (1).png"
                    className="w-full h-[470px] md:h-[550px] sm:h-auto lg:h-162.5 object-contain"
                    alt="Saree Model"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Circle */}
            <div className="absolute bottom-0 left-0 w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-gradient-to-tr  rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-2 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[48px] lg:text-[66px] font-gabriola text-purple-800 mb-4">
                Stories Woven in Tradition & Style
              </h2>
              <p className="text-gray-600 font-[Readex_Pro] text-lg max-w-2xl mx-auto">
                Insights, inspiration, and timeless elegance from House of
                Priya.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-25">
              {blogPosts.map((post) => (
                <article key={post.id} className="group cursor-pointer">
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <a href="/blogdetail">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </a>
                  </div>
                  <div className="mb-3">
                    <span
                      className={`${post.badgeColor} text-white text-xs font-medium px-3 py-1.5 rounded-full`}
                    >
                      {post.badge}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="lg:text-[26px] text-[18px] font-gabriola text-gray-900 leading-tight group-hover:text-purple-700 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 font-readex lg:text-sm text-[10px] leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="lg:text-sm  text-[10px] font-readex font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <span className="lg:text-sm text-[10px] font-readex text-gray-500">
                        {post.date}
                      </span>
                    </div> */}

                    {/* <button className="flex items-center gap-2 font-readex text-[#6B2D8F] font-medium lg:text-sm  text-[10px] group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div
            className="relative flex items-center justify-center overflow-hidden
                  bg-gradient-to-br from-[#EDE6F4] via-[#F5F1F9] to-[#EDE6F4]"
          >
            <img
              src="/images/Group (5).png"
              className="
        absolute left-0 top-1/2 -translate-y-1/2
        opacity-100 hidden lg:block
        max-h-[90%]
      "
              alt=""
            />

            <img
              src="/images/Group (2).png"
              className="
        absolute right-0 top-1/2 -translate-y-1/2
        opacity-100 hidden lg:block
        max-h-[90%] 
      "
              alt=""
            />

            {/* CENTER CONTENT */}
            <div className="relative z-10 text-center px-6 py-16 max-w-4xl">
              <h2
                className="text-[30px] font-gabriola md:text-[56px] lg:text-[66px]
                     text-purple-800 mb-6 leading-tight"
              >
                Experience Sarees That Tell a Story
              </h2>

              <p className="text-gray-600 text-lg md:text-xl mb-10 font-light">
                Discover handcrafted elegance designed for today's woman.
              </p>

              <button
                className="inline-flex items-center gap-3 bg-purple-600 font-readex
                         hover:bg-purple-700 text-white px-8 py-4 rounded-lg
                         font-medium text-lg transition-all duration-300
                         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FaWhatsapp className="w-6 h-6" />
                <a
                  href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp
                </a>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

function NavLink({ path, label, pathname, mobile }) {
  return (
    <a
      href={path}
      className={`transition ${
        pathname === path
          ? "text-[#6B46C1]"
          : mobile
            ? "text-gray-600"
            : "text-[#6C6C6C] hover:text-purple-700"
      }`}
    >
      {label}
    </a>
  );
}

export default Landing;
