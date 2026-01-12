"use client";

import React from "react";
import Footer from "../Components/Footer";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const Landing = () => {
  const pathname = usePathname();
  const popularPosts = [
    {
      id: 1,
      image: "../images/img (8).png",
      badge: "Saree Styling",
      badgeColor: "bg-[#6B2D8F]",
      title: "The Art of Draping: 5 Modern Styles for the Classic Saree",
      excerpt:
        "Discover contemporary draping techniques that honor tradition while embracing modern...",
      author: {
        name: "Ananya Sharma",
        image: "https://i.pravatar.cc/150?img=1",
      },
      date: "Dec 15, 2025",
    },
    {
      id: 2,
      image: "../images/img (9).png",
      badge: "Heritage",
      badgeColor: "bg-[#6B2D8F]",
      title: "Weaving Dreams: The Legacy of Banarasi Silk",
      excerpt:
        "Journey through centuries of craftsmanship as we explore the rich heritage of Banarasi...",
      author: {
        name: "Priya Mehta",
        image: "https://i.pravatar.cc/150?img=5",
      },
      date: "Dec 10, 2024",
    },
    {
      id: 3,
      image: "../images/img (10).png",
      badge: "Festive Wear",
      badgeColor: "bg-[#6B2D8F]",
      title: "Festive Elegance: Choosing Your Perfect Wedding Saree",
      excerpt:
        "From intimate ceremonies to grand celebrations, find the saree that captures your unique style.",
      author: {
        name: "Kavya Reddy",
        image: "https://i.pravatar.cc/150?img=9",
      },
      date: "Dec 5, 2024",
    },
  ];
  return (
    <>
      <section>
        <div className="h-[960px] md:h-[1100px] lg:h-auto relative overflow-hidden">
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
                <div className="w-full h-full absolute z-0 bg-[url('/images/bg.png')] rounded-xl hidden lg:block"></div>
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
    -mt-3 lg:-mt-30
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
        mt-4 lg:-mt-30 hidden sm:block 
      "
            >
              <a
                href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferer
           "
              >
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
            <div className="space-y-6 text-center lg:text-left -mt-13 sm:mt-0">
              <h1
                className="
          font-['Cormorant_Garamond']
          text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px]
          leading-tight sm:leading-[60px] lg:leading-[90px]
          tracking-[-0.5px]
          text-white
        "
              >
                Grace Woven in Every Thread
              </h1>

              <p
                className="
         font-readex 
          text-[16px] sm:text-[18px] lg:text-[18px]
          text-white font-medium
          tracking-[-0.5px]
        "
              >
                Insights, inspiration, and timeless elegance from House of
                Priya.
              </p>

              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
                <a
                  href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                  target="_blank"
                  rel="noopener noreferer"
                >
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
                  src="../images/DSC02440 1 (1).png"
                  className="w-full h-auto object-contain"
                  alt="Saree Model"
                />
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute bottom-0 left-0 w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-gradient-to-tr  rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
      <section>
        <div className="bg-white">
          {/* Article Container */}
          <article className="max-w-6xl mx-auto px-6 py-12">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-[36px] text-center  md:text-[66px] lg:text-[66px] font-gabriola text-purple-800 mb-4 leading-tight">
                Festive Elegance: Choosing Your
                <br /> Perfect Wedding Saree
              </h1>
              <p className="text-[#747B84] max-w-5xl    font-readex  text-lg mb-6">
                From vibrant ceremonies to grand celebrations, find the saree
                that captures your unique style.
              </p>

              {/* Meta Information */}
            </header>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img
                src="../images/placeholder.png"
                alt="Golden sarees with intricate patterns"
                className="w-full h-152 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 text-[16px] font-readex leading-relaxed mb-4">
                  Your wedding day is one of life's most memorable occasions,
                  and choosing the perfect saree is a deeply personal journey.
                  As one of the most versatile and timeless garments in the
                  world of bridal fashion, the wedding saree stands as a symbol
                  of tradition, grace, and cultural richness. With centuries-old
                  weaving techniques and modern design sensibilities coming
                  together, each wedding saree becomes more than just a piece of
                  clothing—it becomes a cherished heirloom that tells your
                  unique story.
                </p>
                <p className="text-gray-700 text-[16px]  font-readex leading-relaxed">
                  The world of bridal sarees is rich with options—from the
                  opulent silk weaves of Kanchipuram and Banarasi to the
                  delicate artistry of Bandhani and Leheriya. Each region of
                  India brings its own distinctive style and technique to
                  saree-making, creating a vast tapestry of choices for the
                  modern bride. Whether you're drawn to traditional motifs
                  steeped in symbolism or contemporary designs that reflect your
                  personal aesthetic, understanding the nuances of different
                  saree styles can help you make an informed choice that
                  perfectly captures your vision.
                </p>
              </div>

              {/* Pull Quote */}
              <div className="my-12 py-8 px-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-[#F34100] rounded-r-lg">
                <blockquote className="text-[24px] text-[#666666]  font-readex leading-relaxed">
                  "Friends worry that computers will get too smart and take over
                  the world, but the real problem is that they're too stupid and
                  they've already taken over the world."
                </blockquote>
                <cite className="block mt-4 text-[#333333] font-[readexPro]  text-[16px]">
                  — Pedro Domingos
                </cite>
              </div>

              {/* Paragraph with hyperlink styling */}
              <div className="mb-8">
                <p className="text-[#313131] font-readex leading-relaxed mb-4">
                  More than 3 billion people already benefit from AI-powered
                  features in Google Workspace, whether it’s using Smart Compose
                  in Gmail or auto-generated summaries in Google Docs. Now,
                  we’re excited to take the next step and bring a limited set of
                  trusted testers a new set of features that makes the process
                  of writing even easier. In Gmail and Google Docs, you can
                  simply type in a topic you’d like to write about, and a draft
                  will be instantly generated for you. So if you’re a manager
                  onboarding a new employee, Workspace saves you the time and
                  effort involved in writing that first welcome email. From
                  there, you can elaborate upon or abbreviate the message or
                  adjust the tone to be more playful or professional — all in
                  just a few clicks. We’ll be rolling out these new experiences
                  to testers in the coming weeks.
                </p>
              </div>

              {/* Image in Content */}
              <div className="my-12 rounded-2xl overflow-hidden">
                <img
                  src="../images/Image (1).png"
                  alt="Elegant saree details"
                  className="w-full h-78 object-cover rounded-2xl"
                />
              </div>

              {/* More Content */}
              <div className="mb-8">
                <p className="text-gray-700 font-readex leading-relaxed ">
                  We’re so excited by the potential of generative AI, and the
                  opportunities it will unlock — from helping people express
                  themselves creatively, to helping developers build brand new
                  types of applications, to transforming how businesses and
                  governments engage their customers and constituents. Stay
                  tuned for more to come in the weeks and months ahead.
                </p>
              </div>
            </div>

            {/* Tags */}

            {/* Author Bio */}
          </article>
        </div>
      </section>
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-[37px] lg:text-[66px] font-gabriola text-[#6B2D8F] text-center mb-16">
            Popular Posts
          </h2>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <span
                      className={`${post.badgeColor} text-white text-xs font-medium px-4 py-1.5 rounded-full`}
                    >
                      {post.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[20px] lg:text-[26px] font-gabriola text-gray-900 mb-3 leading-snug group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600  font-readex text-[16px] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span className="text-[14px] font-readex  text-gray-700 font-[readexPro]">
                        {post.author.name}
                      </span>
                    </div>
                    <span className="text-[14px] font-readex  text-gray-500 font-[readexPro]">
                      {post.date}
                    </span>
                  </div>

                  {/* Read More Link */}
                  <button className="flex items-center font-readex gap-2 text-[14px] text-[#6B2D8F] font-[readexPro] text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
