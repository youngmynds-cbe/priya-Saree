"use client";

import React from "react";
import Footer from "../Components/Footer";

const Landing = () => {
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
          <div className="w-full h-full absolute z-0 bg-[url('/images/bg.png')] rounded-xl"></div>
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
          text-[#6C6C6C]
          font-[var(--font-readex-pro)]
          font-bold
          text-base sm:text-lg lg:text-[20px]
          leading-normal lg:leading-[0.81]
          tracking-normal
          mt-4 lg:-mt-30
        "
      >
        <a href="/" className="hover:text-purple-700 transition">Home</a>
        <a href="/about" className="hover:text-purple-700 transition">About</a>
        <a href="/blog" className="hover:text-purple-700 transition">Blog</a>
      </div>

      {/* Button */}
      <button className="
        bg-purple-700 hover:bg-purple-800 text-white
        px-6 py-2 rounded-md font-medium transition shadow-lg
        mt-4 lg:-mt-30  
      ">
         <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."> Enquire on WhatsApp
 
                  </a>
      </button>
    </nav>

    {/* MAIN CONTENT */}
    <div className="
      relative z-10
      grid grid-cols-1 lg:grid-cols-2
      gap-10 lg:gap-12
      items-center
      px-4 sm:px-8 lg:px-16
      py-16 lg:py-12
      max-w-7xl mx-auto
      mt-0 lg:-mt-26
    ">
      {/* Left Content */}
      <div className="space-y-6 text-center lg:text-left">
        <h1 className="
          font-['Cormorant_Garamond']
          text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px]
          leading-tight sm:leading-[60px] lg:leading-[90px]
          tracking-[-0.5px]
          text-white
        ">
          Grace Woven in Every Thread
        </h1>

        <p className="
          font-[readexPro]
          text-[16px] sm:text-[18px] lg:text-[20px]
          text-white font-light
          tracking-[-0.5px]
        ">
          Discover timeless sarees crafted with passion.
        </p>

        <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
       <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."> Enquire on WhatsApp
 
                  </a>
        </button>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-center">
        <div className="
          px-0 sm:px-6 lg:px-8
          w-full sm:w-[380px] md:w-[450px] lg:w-[549px]
          h-auto lg:h-[600px]
        ">
          <img
            src="../images/DSC02638 (1) 1.png"
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
      <section className="bg-white py-15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          {/* LEFT CONTENT */}
          <div className="text-left">
            <h2 className="font-[gabriola] text-[56px] leading-[48px] tracking-[-0.5px] text-[#5B2D8B]">
              The House of Priya Philosophy
            </h2>

            <p className="mt-8 text-[16px] leading-[26px] text-gray-600 max-w-md">
              House of Priya was born from a deep love for sarees and the belief
              that every woman deserves to feel confident, graceful, and
              comfortable in what she wears.
            </p>

            <p className="mt-5 text-[16px] leading-[26px] text-gray-600 max-w-md">
              We curate and create sarees that balance timeless Indian
              craftsmanship with contemporary design sensibilities – making them
              perfect for both everyday elegance and special occasions.
            </p>

            <p className="mt-5 text-[16px] leading-[26px] text-gray-600 max-w-md">
              Each collection reflects our commitment to quality, detail, and
              aesthetics.
            </p>

            <button className="mt-8 bg-[#6D28D9] text-white px-6 py-3 rounded-md text-sm hover:bg-[#5B21B6] transition">
                 <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."> Enquire on WhatsApp
 
                  </a>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[340px] h-[520px] rounded-[180px] overflow-hidden bg-[#C97A4A] flex items-end justify-center">
                <img
                  src="/images/Rectangle 19466.png"
                  alt="House of Priya Saree"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ornaments (optional) */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-gray-400 text-xl">
                ✦
              </span>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-gray-400 text-xl">
                ✦
              </span>
            </div>
          </div>
        </div>
      </section>
      
      
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-3">
          {/* SECTION TITLE */}
          <h2 className="text-center font-[gabriola] text-[48px] leading-[52px] tracking-[-0.3px] text-[#5B2D8B]">
            What Defines House of Priya
          </h2>

          {/* CARDS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (2).png" />
              </div>

              <h3 className="mt-6 font-[gabriola]text-[22px] text-[#5B2D8B]">
                Thoughtfully Curated Designs
              </h3>

              <p className="mt-3 text-sm leading-[22px] text-gray-600">
                Sarees designed with attention to drape, comfort, and elegance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (3).png" />
              </div>

              <h3 className="mt-6 font-[gabriola] text-[22px] text-[#5B2D8B]">
                Premium Fabrics & Finishes
              </h3>

              <p className="mt-3 text-sm leading-[22px] text-gray-600">
                Carefully selected materials with refined craftsmanship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (4).png" />
              </div>

              <h3 className="mt-6 font-[gabriola] text-[22px] text-[#5B2D8B]">
                Modern Elegance for Woman
              </h3>

              <p className="mt-3 text-sm leading-[22px] text-gray-600">
                Styles that move effortlessly from day to evening.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (5).png" />
              </div>

              <h3 className="mt-6 font-[gabriola] text-[22px] text-[#5B2D8B]">
                Rooted in Indian Craft
              </h3>

              <p className="mt-3 text-sm leading-[22px] text-gray-600">
                Inspired by heritage, reimagined for today.
              </p>
            </div>
          </div>
        </div>
      </section>
 <section className="relative bg-[#FBF7FF] py-18 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="font-[gabriola] font-normal text-[48px] leading-[52px] tracking-[-0.5px] text-[#5B2D8B]">
      Crafted Across India
    </h2>

    {/* DESCRIPTION */}
    <p className="mt-6 max-w-[720px] mx-auto text-[16px] leading-[26px] text-[#6B6B6B]">
      We collaborate with skilled manufacturers and artisans across India
      to bring you authentic sarees that celebrate regional craftsmanship
      while meeting modern quality standards.
    </p>

    {/* ICON ROW */}
    <div className="mt-20 flex justify-center items-center gap-24">

      {/* ITEM 1 */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#EDE4FF] flex items-center justify-center">
          <img
            src="/images/div (6).png"
            alt=""
            className="w-16 h-16"
          />
        </div>
        <p className="mt-4 text-[14px] text-[#6B6B6B]">
          Regional Artisans
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-px h-10 bg-[#E4D6FF]" />

      {/* ITEM 2 */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#EDE4FF] flex items-center justify-center">
          <img
            src="/images/div (8).png"
            alt=""
            className="w-16 h-16"
          />
        </div>
        <p className="mt-4 text-[14px] text-[#6B6B6B]">
          Quality Standards
        </p>
      </div>

      {/* DIVIDER */}
      <div className="w-px h-10 bg-[#E4D6FF]" />

      {/* ITEM 3 */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-[#EDE4FF] flex items-center justify-center">
          <img
            src="/images/div (7).png"
            alt=""
            className="w-16 h-16"
          />
        </div>
        <p className="mt-4 text-[14px] text-[#6B6B6B]">
          Authentic Craft
        </p>
      </div>

    </div>
  </div>

  {/* LEFT DECOR */}
  <img
    src="/images/pattern-left.svg"
    className="absolute left-0 top-1/2 -translate-y-1/2 opacity-40 hidden lg:block"
    alt=""
  />

  {/* RIGHT DECOR */}
  <img
    src="/images/pattern-right.svg"
    className="absolute right-0 top-1/2 -translate-y-1/2 opacity-40 hidden lg:block"
    alt=""
  />
</section>

<section className="bg-white py-14">
  <div className="max-w-6xl mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="font-[gabriola] font-normal text-[48px] leading-[52px] tracking-[-0.5px] text-[#5B2D8B]">
      Our Signature Weave
    </h2>

    {/* SUBTEXT */}
    <p className="mt-4 max-w-[640px] mx-auto text-[15px] leading-[24px] text-[#6B6B6B]">
      From graceful dual-tone drapes to understated premium classics,
      our collections are designed to feel timeless yet relevant —
      sarees you’ll reach for again and again.
    </p>

    {/* CARDS */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="text-left">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/div (9).png"
            alt="Dual Tone Elegance"
            className="w-full h-[360px] object-cover"
          />
        </div>
        <p className="mt-4 text-[14px] font-medium text-[#5B2D8B]">
          Dual-Tone Elegance
        </p>
      </div>

      {/* CARD 2 */}
      <div className="text-left">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/div (10).png"
            alt="Premium Classics"
            className="w-full h-[360px] object-cover"
          />
        </div>
        <p className="mt-4 text-[14px] font-medium text-[#5B2D8B]">
          Premium Classics
        </p>
      </div>

      {/* CARD 3 */}
      <div className="text-left">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/div (11).png"
            alt="Contemporary Grace"
            className="w-full h-[360px] object-cover"
          />
        </div>
        <p className="mt-4 text-[14px] font-medium text-[#5B2D8B]">
          Contemporary Grace
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-[#F9F6FF] py-14">
  <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 items-center gap-5">

    {/* LEFT IMAGE */}
    <div className="flex justify-center lg:justify-start">
      <img
        src="/images/img (7).png"
        alt="Designed for Today's Woman"
        className="w-full max-w-[568px] rounded-md object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="text-left">
      <h2 className="font-[gabriola] font-normal text-[63px] leading-[52px] tracking-[-0.5px] text-[#5B2D8B]">
        Designed for Today’s Woman
      </h2>

      <p className="mt-6 max-w-[420px] text-[15px] leading-[24px] text-[#6B6B6B]">
        At House of Priya, we design sarees for women who balance
        tradition with individuality.
      </p>

      <p className="mt-4 max-w-[420px] text-[15px] leading-[24px] text-[#6B6B6B]">
        Our designs celebrate comfort, confidence, and quiet luxury —
        without being overwhelming.
      </p>

      <button className="mt-8 inline-flex items-center justify-center bg-[#6D28D9] text-white text-sm px-6 py-3 rounded-md hover:bg-[#5B21B6] transition">
          <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."> Enquire on WhatsApp
 
                  </a>
      </button>
    </div>

  </div>
</section>
<section className="bg-white py-12">
  <div className="max-w-5xl mx-auto px-6">

    {/* PURPLE CONTAINER */}
    <div className="bg-[#5B2D8B] rounded-2xl py-20 px-6 flex flex-col items-center text-center">

      {/* TITLE */}
      <h2 className="font-[gabriola] font-normal text-[36px] leading-[42px] tracking-[-0.5px] text-white">
        Opening Soon in RS Puram
      </h2>

      {/* SUBTEXT */}
      <p className="mt-3 max-w-[420px] text-[14px] leading-[22px] text-white/80">
        Experience House of Priya in person at our upcoming boutique in
        RS Puram, Coimbatore.
      </p>

      {/* FORM CARD */}
      <div className="mt-10 bg-white rounded-xl w-full max-w-[360px] px-6 py-8">

        <p className="font-gabriola text-[22px] leading-[26px] text-[#5B2D8B] mb-4">
          Get Notified When We Open
        </p>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-3 px-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5B2D8B]"
        />

        <input
          type="email"
          placeholder="Email ID"
          className="w-full mb-4 px-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#5B2D8B]"
        />

        <button className="w-full bg-[#5B2D8B] text-white text-sm py-2.5 rounded-md hover:bg-[#4C1D95] transition">
          Notify Me
        </button>
      </div>

    </div>
  </div>
</section>




      <section className="bg-[#E5E7EB] py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* QUOTE ICON */}
          <div className="text-[#6D28D9] text-5xl mb-3">“</div>

          {/* QUOTE TEXT */}
          <p className="font-[gabriola] font-normal text-[45px] leading-[49px] tracking-[-0.5px] text-center text-[#5B2D8B]">
            Every saree at House of Priya is designed to feel personal, elegant,
            and timeless — just like the women who wear them.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
