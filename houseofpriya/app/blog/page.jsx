"use client";

import React from "react";
import Footer from "../Components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Landing = () => {
  const pathname=usePathname()
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
      <section>
        <div className="min-h-screen relative overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/images/bg.png')` }}
          >
            <div className="absolute inset-0"></div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-6 sm:top-10 lg:top-20 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 bottom-4 sm:bottom-6 lg:bottom-8 border-2 border-white opacity-40 rounded-sm"></div>
          </div>

          {/* NAVBAR */}
          <nav className="relative z-20 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-6 gap-4 lg:gap-0">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl flex items-center justify-center lg:ml-10 z-50 relative ">
                <div className="w-full h-full absolute z-0 bg-[url('/images/bg.png')] rounded-xl hidden sm:block"></div>
                <img
                  src="/images/logo.png"
                  alt="House of Priya Logo"
                  className="w-20 sm:w-24 lg:w-34 object-contain z-10 lg:-mt-9"
                />
              </div>
            </div>

            {/* Menu */}
       <div
  className="
    flex gap-6 sm:gap-10 lg:gap-15
    font-readex 
    font-bold
    text-base sm:text-lg lg:text-[20px]
    mt-4 lg:-mt-30
  "
>
  <a
    href="/"
    className={`transition ${
      pathname === "/"
        ? "text-purple-700  border-purple-700"
        : "text-[#6C6C6C] hover:text-purple-700"
    }`}
  >
    Home
  </a>

  <a
    href="/about"
    className={`transition ${
      pathname === "/about"
        ? "text-purple-700  border-purple-700"
        : "text-[#6C6C6C] hover:text-purple-700"
    }`}
  >
    About
  </a>

  <a
    href="/blog"
    className={`transition ${
      pathname === "/blog"
        ? "text-purple-700  border-purple-700"
        : "text-[#6C6C6C] hover:text-purple-700"
    }`}
  >
    Blog
  </a>
</div>


            {/* Button */}
            <button
              className="
        bg-purple-700 hover:bg-purple-800 text-white
        px-6 py-2 rounded-md font-medium transition shadow-lg
        mt-4 lg:-mt-30  
      "
            >
              <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
              target="_blank"
              rel="noopener noreferer">
                {" "}
                Enquire on WhatsApp
              </a>
            </button>
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
            <div className="space-y-6 text-center lg:text-left">
              <h1
                className="
          font-['Cormorant_Garamond']
          text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px]
          leading-tight sm:leading-15 lg:leading-22.5
          tracking-[-0.5px]
          text-white
        "
              >
                Grace Woven in Every Thread
              </h1>

              <p
                className="
         font-readex 
          text-[16px] sm:text-[18px] lg:text-18px]
          text-white font-medium
          tracking-[-0.5px]
        "
              >
Insights, inspiration, and timeless elegance from House of Priya.
              </p>

              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
                <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferer">
                  {" "}
                  Enquire on WhatsApp
                </a>
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center">
              <div
                className="
          px-0 sm:px-6 lg:px-8
          w-full sm:w-[380px] md:w-[450px] lg:w-[549px]
          h-auto lg:h-[600px]
        "
              >
                <img
                  src="../images/DSC02599 1.png"
                  className="w-full h-auto object-contain"
                  alt="Saree Model"
                />
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute bottom-0 left-0 w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-gradient-to-tr from-lime-300 to-yellow-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[48px] lg:text-[66px] font-[gabriola] text-purple-800 mb-4">
              Stories Woven in Tradition & Style
            </h2>
            <p className="text-gray-600 font-[Readex_Pro] text-lg max-w-2xl mx-auto">
              Insights, inspiration, and timeless elegance from House of Priya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25">
            {blogPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mb-3">
                  <span
                    className={`${post.badgeColor} text-white text-xs font-medium px-3 py-1.5 rounded-full`}
                  >
                    {post.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="text-[26px] font-[gabriola] text-gray-900 leading-tight group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 font-readex text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author & Date */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-readex font-medium text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm font-readex text-gray-500">{post.date}</span>
                  </div>

                  {/* Read More Link */}
                  <button className="flex items-center gap-2 font-readex text-[#6B2D8F] font-medium text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50">
          <div className="text-center px-6 py-16 max-w-4xl">
            {/* Main Heading */}
            <h1 className="text-[30px] font-[gabriola] md:text-[56px] lg:text-[66px]  text-purple-800 mb-6 leading-tight">
              Experience Sarees That Tell a Story
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-lg md:text-xl mb-10 font-light">
              Discover handcrafted elegance designed for today's woman.
            </p>

            {/* WhatsApp Button */}
            <button className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <FaWhatsapp className="w-6 h-6" />
              <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
              target="_blank"
              rel="noopener noreferer">
                {" "}
                Enquire on WhatsApp
              </a>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
