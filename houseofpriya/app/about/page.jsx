"use client";

import React from "react";
import Footer from "../Components/Footer";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Landing = () => {
  const pathname = usePathname();
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [errors, setErrors] = useState({});
const [loading, setLoading] = useState(false);
const [showModal, setShowModal] = useState(false);

const validate = () => {
  let newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email address";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  try {
    setLoading(true);

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setShowModal(true);
      setName("");
      setEmail("");
      setErrors({});
    }
  } catch (error) {
    console.error("Submit error:", error);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <section>
        <div className="h-[940px] md:h-[1100px]  lg:h-auto relative overflow-hidden">
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
                    ? "text-[#6B46C1]  border-purple-700"
                    : "text-[#6C6C6C] hover:text-purple-700"
                }`}
              >
                Home
              </a>

              <a
                href="/about"
                className={`transition ${
                  pathname === "/about"
                    ? "text-[#6B46C1]  border-purple-700"
                    : "text-[#6C6C6C] hover:text-purple-700"
                }`}
              >
                About
              </a>

              <a
                href="/blog"
                className={`transition ${
                  pathname === "/blog"
                    ? "text-[#6B46C1]  border-purple-700"
                    : "text-[#6C6C6C] hover:text-purple-700"
                }`}
              >
                Blog
              </a>
            </div>

            {/* Button */}
            <button
              className="
        bg-[#6B46C1] hover:bg-purple-800 text-white font-readex
        px-6 py-2 rounded-md font-medium transition shadow-lg
        mt-4 lg:-mt-30 hidden sm:block 
      "
            >
              <a
                href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferer"
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
          text-white  font-normal
          tracking-[-0.5px]
        "
              >
                Where tradition meets modern elegance — thoughtfully crafted
                sarees for today's woman.
              </p>

              <button className="bg-[#6B46C1] hover:bg-purple-800 font-readex text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
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
                  src="../images/DSC02638 (1) 1 (1).png"
                  className="w-full  lg:h-[660px] object-contain"
                  alt="Saree Model"
                />
              </div>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute bottom-0 left-0 w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-gradient-to-tr  rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
      <section className="bg-white py-15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          {/* LEFT CONTENT */}
          <div className="text-left">
            <h2 className="font-gabriola text-[36px] lg:text-[56px] md:text-[56px] leading-[48px] tracking-[-0.5px] text-[#5B2D8B]">
              The House of Priya Philosophy
            </h2>

            <p className="mt-8 text-[16px] leading-[26px] tracking-[0.2px]   font-readex text-[#7A7A7A] max-w-md">
              House of Priya was born from a deep love for sarees and the belief
              that every woman deserves to feel confident, graceful, and
              comfortable in what she wears.
            </p>

            <p className="mt-5 text-[16px] leading-[26px] tracking-[0.2px] font-readex text-[#7A7A7A] max-w-md">
              We curate and create sarees that balance timeless Indian
              craftsmanship with contemporary design sensibilities – making them
              perfect for both everyday elegance and special occasions.
            </p>

            <p className="mt-5 text-[17px] leading-[26px]  tracking-[0.2px] font-readex text-[#7A7A7A] max-w-md">
              Each collection reflects our commitment to quality, detail, and
              aesthetics.
            </p>

            <div className="mt-8 flex justify-center sm:justify-start">
              <a
                href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="
      bg-[#6D28D9]
      font-readex
      text-white
      px-6 py-3
      rounded-md
      text-sm
      hover:bg-[#5B21B6]
      transition
      inline-block
    "
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[380px]  lg:w-[405px]  h-[500px] lg:h-[560px] rounded-[180px] overflow-hidden  flex items-end justify-center">
                <img
                  src="/images/Frame 52875.png"
                  alt="House of Priya Saree"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-3">
          {/* SECTION TITLE */}
          <h2 className="text-center font-gabriola text-[28px] lg:text-[48px] md:text-[38px] leading-[52px] tracking-[-0.3px] text-[#5B2D8B]">
            What Defines House of Priya
          </h2>

          {/* CARDS */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (2).png" />
              </div>

              <h3 className="mt-6 font-gabriola text-[24px] text-[#5B2D8B]">
                Thoughtfully Curated Designs
              </h3>

              <p className="mt-3 text-[14px] leading-[22px] font-readex text-gray-600">
                Sarees designed with attention to drape, comfort, and elegance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (3).png" />
              </div>

              <h3 className="mt-6 font-gabriola text-[24px] text-[#5B2D8B]">
                Premium Fabrics & Finishes
              </h3>

              <p className="mt-3 text-[14px] leading-[22px] font-readex text-gray-600">
                Carefully selected materials with refined craftsmanship.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (4).png" />
              </div>

              <h3 className="mt-6 font-gabriola text-[24px] text-[#5B2D8B]">
                Modern Elegance for Woman
              </h3>

              <p className="mt-3 text-[14px] leading-[22px] font-readex text-gray-600">
                Styles that move effortlessly from day to evening.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 mx-auto rounded-full bg-purple-100 flex items-center justify-center">
                <img src="../images/div (5).png" />
              </div>

              <h3 className="mt-6 font-gabriola text-[24px] text-[#5B2D8B]">
                Rooted in Indian Craft
              </h3>

              <p className="mt-3 text-[14px] leading-[22px] font-readex text-gray-600">
                Inspired by heritage, reimagined for today.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#F9F5FF] py-18 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* TITLE */}
          <h2 className="font-gabriola font-normal text-[30px] md:text-[38px]  lg:text-[48px] leading-[52px] tracking-[-0.5px] text-[#5B2D8B]">
            Crafted Across India
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-[720px] mx-auto text-[16px] leading-[26px] font-readex text-[#6B6B6B]">
            We collaborate with skilled manufacturers and artisans across India
            to bring you authentic sarees that celebrate regional craftsmanship
            while meeting modern quality standards.
          </p>

          {/* ICON ROW */}
          <div className="mt-20 flex justify-center items-center gap-24">
            {/* ITEM 1 */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#EDE4FF] flex items-center justify-center">
                <img src="/images/div (6).png" alt="" className="w-16 h-16" />
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
                <img src="/images/div (8).png" alt="" className="w-16 h-16" />
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
                <img src="/images/div (7).png" alt="" className="w-16 h-16" />
              </div>
              <p className="mt-4 text-[14px] text-[#6B6B6B]">Authentic Craft</p>
            </div>
          </div>
        </div>

        {/* LEFT DECOR */}
        <img
          src="/images/image 44.png"
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
          alt=""
        />

        <img
          src="/images/image 45.png"
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
          alt=""
        />
      </section>

      <section className="bg-white">
        <div className="relative w-full">
          <img src="../images/Group (10).png" alt="" />

          <img
            src="../images/Group (11).png"
            alt=""
            className="absolute right-0 top-0"
          />
        </div>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-gabriola font-normal text-[30px] md:text-[38px] lg:text-[48px] leading-[52px] tracking-[-0.5px] text-[#5B2D8B]">
            Our Signature Weave
          </h2>

          {/* SUBTEXT */}
          <p className="mt-4 max-w-[640px] font-readex  mx-auto text-[15px] leading-[24px] text-[#6B6B6B]">
            From graceful dual-tone drapes to understated premium classics, our
            collections are designed to feel timeless yet relevant — sarees
            you’ll reach for again and again.
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
              <p className="mt-4 text-[20px] font-semibold font-readex text-[#4C1D95]">
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
              <p className="mt-4 text-[20px] font-semibold  font-readex text-[#4C1D95]">
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
              <p className="mt-4 text-[20px] font-semibold font-readex text-[#4C1D95]">
                Contemporary Grace
              </p>
            </div>
          </div>
        </div>
      </section>

        {loading && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

         {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="relative w-[90%] max-w-lg bg-white rounded-2xl p-8 text-center">
            {/* Close icon */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-purple-600 text-xl font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-purple-600 mb-4">
              Thank You for Registering
            </h2>

            <p className="text-gray-600 mb-8">
              We’ll notify you as soon as House of Priya opens in RS Puram.
              <br />
              Get ready to experience timeless elegance.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold w-full"
            >
              Thanks!
            </button>
          </div>
        </div>
      )}  
      <section className="bg-[#F9F5FF]  py-14 relative">
        <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-2 items-center gap-5 ">
          {/* RIGHT DECOR */}
          <img
            src="/images/Group (6).png"
            className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
            alt=""
          />

          {/* LEFT IMAGE */}
          <div className=" ">
            {/* Wrapper */}
            <div className="relative flex items-center">
              {/* LEFT / RIGHT DECOR IMAGE */}
              <img
                src="/images/Group (7).png" // purple vertical design image
                alt=""
                className="
        absolute right-7 top-1/2 -translate-y-1/2
        h-full
        hidden sm:block
      "
              />

              {/* MAIN IMAGE */}
              <img
                src="/images/img (7).png"
                alt="Designed for Today's Woman"
                className="
        w-full max-w-[568px]
        rounded-md
        object-cover
        relative z-10
      "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-left px-5">
            <h2 className="font-gabriola font-normal  text-[36px] lg:text-[63px] leading-[52px] tracking-[-0.5px] text-[#4C1D95]">
              Designed for Today’s Woman
            </h2>

            <p className="mt-6 max-w-[420px] font-readex text-[15px] leading-[24px] text-[#6B6B6B] ">
              At House of Priya, we design sarees for women who balance
              tradition with individuality.
            </p>

            <p className="mt-4 max-w-[420px] font-readex text-[15px] leading-[24px] text-[#6B6B6B] ">
              Our designs celebrate comfort, confidence, and quiet luxury —
              without being overwhelming.
            </p>

            <div className="mt-8 flex justify-center sm:justify-start">
              <a
                href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="
      bg-[#6D28D9]
      font-readex
      text-white
      px-6 py-3
      rounded-md
      text-sm
      hover:bg-[#5B21B6]
      transition
      inline-block
    "
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* PURPLE CONTAINER */}
          <div className="relative bg-gradient-to-br from-[#5B21B6] to-[#4C1D95] rounded-2xl py-20 px-6 overflow-hidden">
            {/* LEFT IMAGE */}
            <img
              src="/images/poster.png"
              alt=""
              className="
        absolute
        left-0
        bottom-0
        h-[70%]
        opacity-100
        hidden lg:block
        pointer-events-none
      "
            />

            {/* RIGHT IMAGE */}
            <img
              src="/images/poster1.png"
              alt=""
              className="
        absolute
        right-0
        bottom-0
        h-[70%]
        opacity-100
        hidden lg:block
        pointer-events-none
      "
            />

              <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="font-gabriola font-normal text-[38px] leading-[42px] tracking-[-0.5px] text-white">
                Opening Soon in RS Puram
              </h2>

              <p className="mt-3 max-w-[420px] font-readex text-[14px] leading-[22px] text-white/80">
                Experience House of Priya in person at our upcoming boutique in
                RS Puram, Coimbatore.
              </p>
<form
  onSubmit={handleSubmit}
  className="mt-10 bg-white rounded-xl w-full max-w-[360px] px-6 py-8"
>
  <p className="font-gabriola text-[32px] leading-[26px] text-[#5B2D8B] mb-4">
    Get Notified When We Open
  </p>

  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className={`w-full mb-1 text-black placeholder:text-gray-500 px-4 py-2 text-sm border rounded-md focus:ring-1 focus:ring-[#5B2D8B]
      ${errors.name ? "border-red-500" : "border-gray-200"}`}
  />
  {errors.name && (
    <p className="text-red-500 text-xs mb-2">{errors.name}</p>
  )}

  <input
    type="email"
    placeholder="Email ID"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className={`w-full mb-1 px-4 py-2 text-black text-sm border rounded-md placeholder:text-gray-500 focus:ring-1 focus:ring-[#5B2D8B]
      ${errors.email ? "border-red-500" : "border-gray-200"}`}
  />
  {errors.email && (
    <p className="text-red-500 text-xs mb-3">{errors.email}</p>
  )}

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-[#5B2D8B] text-white text-sm py-2.5 rounded-md hover:bg-[#4C1D95] transition flex justify-center items-center"
  >
    {loading ? "Sending..." : "Notify Me"}
  </button>
</form>

            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#E5E7EB] py-20">
        <div className="max-w-5xl mx-auto  text-center">
          {/* QUOTE ICON */}
          <div className="text-[#6D28D9] sm:text-[50px] lg:text-[85px]">“</div>

          {/* QUOTE TEXT */}
          <p className="font-gabriola font-normal text-[30px] md:text-[40px] lg:text-[45px] leading-[49px] tracking-[-0.5px] text-center text-[#5B2D8B]">
            Every saree at House of Priya is designed to feel personal, elegant,
            and timeless — just like the women who wear them.
          </p>
        </div>
        <img
          src="/images/Group (12).png"
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
          alt=""
        />

        <img
          src="/images/Group (13).png"
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
          alt=""
        />
      </section>

      <Footer />
    </>
  );
};

export default Landing;
