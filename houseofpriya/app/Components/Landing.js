// "use client";

// import React from "react";

// const Landing = () => {
//   return (
//     <div className="min-h-screen bg-[#E2AC52] relative overflow-hidden">
//       {/* Decorative border frame */}
//       <div className="absolute inset-6 border-2 border-white rounded-lg pointer-events-none mt-20"></div>

//       {/* Header */}
//       <header className="relative z-10 flex items-center justify-between px-16 py-8">
//         {/* Logo */}
//         <div className="relative w-36 h-36">
//           <img
//             src="../images/logo.png"
//             alt="House of Priya Logo"
//             className="w-full h-full object-contain"
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="flex items-center gap-12 -mt-20">
//           <a
//             href="#home"
//             className="text-white font-bold text-xl hover:text-purple-900 transition"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-gray-700 font-semibold text-xl hover:text-purple-700 transition"
//           >
//             About
//           </a>
//           <a
//             href="#blog"
//             className="text-gray-700 font-semibold text-xl hover:text-purple-700 transition"
//           >
//             Blog
//           </a>
//         </nav>

//         <button className="bg-white text-purple-700 px-8 py-3 rounded-sm cursor-pointer shadow-lg hover:shadow-xl transition font-semibold text-base -mt-20">
//           Enquire on WhatsApp
//         </button>
//       </header>

//       {/* Main Content */}
//       <main className="relative z-10 px-16 py-8">
//         <div className="flex items-start justify-between gap-8">
//           {/* Left Section - Text and small circle */}
//           <div className="flex flex-col pt-12 shrink-0">
//             <h1 className="text-[127px] font-normal text-white leading-86p tracking-normal mb-16">
//               Shine
//               <br />
//               Brightly
//             </h1>
//           </div>

//           <div className="relative shrink-0 mt-0">
//             <img src="../images/sarees.png" />
//           </div>

//           {/* Right Section - Text and illustration */}
//           <div className="relative shrink-0 pt-32">
//             {/* Text Box */}
//             <div className="text-left max-w-sm mb-16">
//               <h2 className="text-[42px] font-gabriola font-normal text-white leading-12.25 tracking-[-0.5px] mb-4">
//                 Grace Woven in Every Thread
//               </h2>

//               <p className="text-white text-lg leading-relaxed">
//                 Discover timeless sarees crafted with
//                 <br />
//                 passion, tradition, and modern elegance.
//               </p>
//               <img src="../images/saree.png"/>
//             </div>

//             {/* Decorative Line Art - Woman in Saree outline */}
//             <div className="w-56 h-72 opacity-20"></div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Landing;

"use client";

import React from "react";
import { useState,useEffect } from "react";

import Footer from "../Components/Footer";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);





  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "" });
      }, 3000);
    }
  };

  const sareeCollections = [
    {
      id: 1,
      title: "Banarasi Heritage",
      subtitle: "Timeless elegance woven in gold",
      image: "../images/3.png",
    },
    {
      id: 2,
      title: "Kanjeevaram Classics",
      subtitle: "Temple traditions, flowing grace",
      image: "../images/2.png",
    },
    {
      id: 3,
      title: "Contemporary Silks",
      subtitle: "Opulence in elegance",
      image: "../images/1.png",
    },
  ];

  const sarees = [
    {
      id: 1,
      image: "../images/Rectangle 19470.png",

      bgColor: "bg-yellow-100",
    },
    {
      id: 2,
      image: "../images/Vector 2.png",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      image: "../images/Rectangle 19470.png",

      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      image: "../images/Rectangle 19470.png",

      bgColor: "bg-pink-100",
    },
  ];
  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sarees.length - 1 ? 0 : prevIndex + 1
    );
  }, 3000); 

  return () => clearInterval(interval);
}, [sarees.length]);


  const getVisibleSarees = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + sarees.length) % sarees.length;
      visible.push({ ...sarees[index], position: i });
    }
    return visible;
  };
  return (
    <>
      {/* <section>
        <div className="min-h-screen relative overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat  "
            style={{
              backgroundImage: `url('/images/bg.png')`,
            }}
          >
            <div className="absolute inset-0 "></div>
          </div>
          <div className="absolute inset-0 pointer-events-none ">
            <div className="absolute top-20 left-8 right-8 bottom-8 border-2 border-white opacity-40 rounded-sm"></div>
          </div>

          <nav className="relative z-20 flex items-center justify-between px-8 py-6 ">
         

            <div className="flex items-center">
              <div className="w-50 h-30 rounded-xl flex items-center justify-center lg:ml-10 z-50 relative">
              
                <div
                  className="w-40 h-40 absolute z-0 bg-[url('/images/bg.png')] 
                  rounded-xl"
                ></div>

           
                <img
                  src="/images/logo.png"
                  alt="House of Priya Logo"
                  className="w-34 h-34 object-contain z-10"
                />
              </div>
            </div>

            <div
              className="flex gap-15 text-[#6C6C6C]  
                font-[var(--font-readex-pro)] 
                font-bold 
                text-[20px] 
                leading-[0.81] 
                tracking-normal -mt-22"
            >
              <a href="/" className="hover:text-purple-700 transition">
                Home
              </a>
              <a href="/about" className="hover:text-purple-700 transition">
                About
              </a>
              <a href="/blog" className="hover:text-purple-700 transition">
                Blog
              </a>
            </div>

            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition shadow-lg -mt-22">
              Enquire on WhatsApp
            </button>
          </nav>

     
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 lg:px-16 py-12 max-w-7xl mx-auto -mt-26  ">
     
            <div className="space-y-6">
              <h1 className="font-['Cormorant_Garamond']  text-[74px] leading-[90px] tracking-[-0.5px] text-white">
                Grace Woven in Every Thread
              </h1>

              <p className="font-[readexPro] text-[20px] text-white font-light tracking-[-0.5px]">
                Discover timeless sarees crafted with passion.
              </p>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
                Enquire on WhatsApp
              </button>
            </div>

          
            <div className="relative flex items-start justify-center">
         
              <div className="absolute bottom-0 left-1/4 w-64 h-64 "></div>

          
              <div className="relative z-10 w-full max-w-md">
                <div className="  px-8 w-[549px] h-[600px] ">
                  <img src="../images/womensaree.png" />
                </div>
              </div>
            </div>
          </div>

        
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-lime-300 to-yellow-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section> */}
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
          text-[#6C6C6C]
          font-[var(--font-readex-pro)]
          font-bold
          text-base sm:text-lg lg:text-[20px]
          leading-normal lg:leading-[0.81]
          tracking-normal
          mt-4 lg:-mt-30
        "
            >
              <a href="/" className="hover:text-purple-700 transition">
                Home
              </a>
              <a href="/about" className="hover:text-purple-700 transition">
                About
              </a>
              <a href="/blog" className="hover:text-purple-700 transition">
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
              <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service.">
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
          leading-tight sm:leading-[60px] lg:leading-[90px]
          tracking-[-0.5px]
          text-white
        "
              >
                Grace Woven in Every Thread
              </h1>

              <p
                className="
          font-[readexPro]
          text-[16px] sm:text-[18px] lg:text-[20px]
          text-white font-light
          tracking-[-0.5px]
        "
              >
                Discover timeless sarees crafted with passion.
              </p>

              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
                <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service.">
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
                  src="../images/womensaree.png"
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

      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* LEFT IMAGE */}
            <div className="flex justify-center lg:justify-start z-30">
              <img
                src="../images/ellipse.png"
                alt="Woman in purple sari"
                className="
            w-[260px] h-auto
            md:w-[380px]
            lg:w-[492px] lg:h-[699px]
            lg:-mt-50
          "
              />
            </div>

            {/* CONTENT */}
            <div className="space-y-8 text-center lg:text-left">
              <h2 
                className="
            font-[Gabriola]
            font-normal
            text-[40px]
            md:text-[54px]
            lg:text-[66px]
            leading-tight
            tracking-[-0.5px]
            text-purple-700
          "
              >
                Our Signature Weave
              </h2>

              <p
                className="
            font-readex
            text-[15px]
            md:text-[17px]
            lg:text-[18px]
            leading-[26px]
            md:leading-[28px]
            lg:leading-[30px]
            text-gray-700
            text-justify
          "
              >
                Hand-crafted with the finest materials, designed to make every
                woman feel extraordinary. This exquisite piece represents the
                pinnacle of our craftsmanship and attention to detail.
              </p>

              <ul
                className="
            space-y-3
            inline-block
            text-left
            font-[var(--font-readex-pro)]
            text-[15px]
            md:text-[16px]
            text-gray-700
          "
              >
                <li className="flex items-start gap-4">
                  <span className="text-orange-500">♦</span>
                  Premium silk with 24k gold thread work
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-orange-500">♦</span>
                  Hand-woven by master artisans
                </li>

                <li className="flex items-start gap-4">
                  <span className="text-orange-500">♦</span>
                  Limited edition collection
                </li>
              </ul>

              <div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-[var(--font-readex-pro)] px-6 py-3 rounded-lg">
                  <a href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service.">
                    {" "}
                    Enquire on WhatsApp
                  </a>
                </button>
              </div>

              {/* SMALL IMAGE */}
              <div className="flex justify-center lg:justify-end mt-8 lg:-mt-50">
                <img
                  src="../images/saree2.png"
                  alt="Woman in patterned sari"
                  className="
              w-[180px]
              md:w-[220px]
              lg:w-[270px]
              h-auto
            "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="bg-white py-12 sm:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    
    {/* Heading */}
    <h2
      className="
        font-[Gabriola]
        text-[32px] sm:text-[48px] lg:text-[66px]
        leading-tight lg:leading-12
        tracking-[-0.5px]
        text-purple-600
      "
    >
      Our Exquisite Collection
    </h2>

    {/* Subheading */}
    <p
      className="
        mt-3 sm:mt-4
        font-[readexPro]
        text-[14px] sm:text-[16px] lg:text-[18px]
        leading-[22px] sm:leading-[24px] lg:leading-[26px]
        text-[#4B5563]
        max-w-2xl
        mx-auto
        mb-12 sm:mb-16 lg:mb-30
      "
    >
      From everyday sophistication to bridal grandeur – a saree for every moment.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
      
      {/* Card 1 */}
      <div>
        <img src="../images/collection1.png" alt="Premium Handloom" className="w-full" />
        <h3 className="font-[Gabriola] text-[20px] sm:text-[32px] lg:text-[38px] text-purple-600 mt-4">
          Premium Handloom
        </h3>
        <p className="font-[readexPro] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] text-[#4B5563]">
          Magnificent designs for your special day
        </p>
      </div>

      {/* Card 2 */}
      <div className="lg:-mt-20">
        <img src="../images/collection2.png" alt="Party Wear" className="w-full" />
        <h3 className="font-[Gabriola] text-[20px] sm:text-[32px] lg:text-[38px] text-purple-600 mt-4">
          Party Wear
        </h3>
        <p className="font-[readexPro] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] text-[#4B5563]">
          Glamorous styles for celebrations
        </p>
      </div>

      {/* Card 3 */}
      <div>
        <img src="../images/collection3.png" alt="Everyday Elegance" className="w-full" />
        <h3 className="font-[Gabriola] text-[20px] sm:text-[32px] lg:text-[38px] text-purple-600 mt-4">
          Everyday Elegance
        </h3>
        <p className="font-[readexPro] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] text-[#4B5563]">
          Comfortable luxury for daily wear
        </p>
      </div>

      {/* Card 4 */}
      <div className="lg:-mt-20">
        <img src="../images/collection4.png" alt="Bridal Sarees" className="w-full" />
        <h3 className="font-[Gabriola] text-[20px] sm:text-[32px] lg:text-[38px] text-purple-600 mt-4">
          Bridal Sarees
        </h3>
        <p className="font-[readexPro] text-[14px] sm:text-[15px] lg:text-[16px] leading-[22px] text-[#4B5563]">
          Artisan crafted masterpieces
        </p>
      </div>

    </div>
  </div>
</section>

      <section
        className="relative w-full h-[600px] sm:h-[700px] lg:h-[750px]"
        style={{
          backgroundImage: "url('../images/Rectangle 102.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-center lg:justify-start">
          {/* LEFT OVAL CONTENT */}
          <div className="relative z-10 w-full flex justify-center lg:justify-start">
            <div
              className="
          bg-white/70
          backdrop-blur-sm
          rounded-tl-[160px] rounded-tr-[160px]
          lg:rounded-tl-[200px] lg:rounded-tr-[200px]
          max-w-md
          w-[90%] sm:w-[80%] lg:w-[420px]
          h-auto
          py-12 sm:py-16 lg:h-[544px]
          flex flex-col items-center justify-center
          text-center
        "
            >
              <p className="text-gray-800 text-[26px] sm:text-[32px] lg:text-[40px] font-[Gabriola] mb-2">
                The New Edit
              </p>

              <h1
                className="
            font-[NanumMyeongjo]
            font-normal
            text-[28px] sm:text-[36px] lg:text-[45px]
            leading-tight lg:leading-[2.07]
            text-purple-600
            mb-4
          "
              >
                House of Priya
              </h1>

              <p
                className="
            font-[readexPro]
            text-[14px] sm:text-[15px]
            leading-5.5 sm:leading-6
            text-gray-700
            max-w-xs
          "
              >
                A refined selection of sarees crafted to celebrate feminine
                elegance.
              </p>
            </div>
          </div>

          {/* LOGO */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 hidden sm:block ">
            <img
              src="/images/logo.png"
              alt="House of Priya Logo"
              className="w-[90px] sm:w-[130px] lg:w-[178px] object-contain"
            />
          </div>
        </div>
      </section>

<section className="bg-white">
  {/* ===== TOP WHITE SECTION ===== */}
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">

      {/* Left - Text */}
      <div className="flex flex-col justify-start px-6 py-10 sm:px-10 lg:p-16">
        <h2 className="font-[Gabriola] text-purple-600 mb-10 sm:mb-14 lg:mb-20
                       text-[36px] sm:text-[48px] lg:text-[66px]">
          Farewell Collection
        </h2>

        <div className="mx-auto lg:ml-50">
          <h3 className="font-[Gabriola] text-purple-600 mb-3
                         text-[26px] sm:text-[32px] lg:text-[40px]">
            Colorful Joy
          </h3>

          <p className="font-[Readex_Pro] text-[#5E584E] text-justify
                        text-[13px] sm:text-[14px]
                        leading-[1.6] max-w-md">
            Perfect for women who love subtle elegance with a modern twist.
            Each saree flows effortlessly from day wear to evening occasions.
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="relative flex items-center justify-center px-6 py-10 sm:p-8">
        <img
          src="/images/Rectangle 21 (1).png"
          alt="Colorful Joy Saree"
          className="w-full max-w-sm sm:max-w-md lg:max-w-full
                     h-auto lg:max-h-[500px] object-contain"
        />
        <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8
                        w-20 h-28 bg-green-600/20 rounded-full blur-2xl" />
      </div>
    </div>
  </div>

  {/* ===== BOTTOM ORANGE SECTION ===== */}
  <div className="w-full bg-[#E2AC52] mt-0 lg:-mt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">

      {/* Left - Image */}
      <div className="relative flex items-center justify-center px-6 py-10 sm:p-8
                      order-1 lg:order-1">
        <img
          src="/images/Rectangle 22 (3).png"
          alt="Dual Joy Saree"
          className="w-full max-w-sm sm:max-w-md lg:max-w-full
                     h-auto lg:max-h-[500px] object-contain
                     lg:-mt-40"
        />
        <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12
                        w-20 h-28 bg-green-700/30 rounded-full blur-2xl" />
      </div>

      {/* Right - Text */}
      <div className="flex items-center justify-center lg:justify-start
                      px-6 py-10 sm:px-10 lg:p-12
                      order-2 lg:order-2">
        <div>
          <h3 className="font-[Gabriola] text-purple-600 mb-3
                         text-[26px] sm:text-[32px] lg:text-[40px]">
            Dual Joy
          </h3>

          <p className="font-[Readex_Pro] text-[#5E584E] text-justify
                        text-[13px] sm:text-[14px]
                        leading-[1.6] max-w-md">
            Experience the beauty of contrast with our Dual Joy sarees —
            thoughtfully designed to blend two harmonious shades into one
            graceful drape.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="bg-white py-16 md:py-20 px-4">
        <div className="max-w-[1800px] mx-auto">
          {/* Heading */}
          <h1 className="text-[36px] sm:text-[44px] md:text-[64px] font-[Gabriola] text-center mb-16 md:mb-24 text-purple-600">
            Modern Style Toward Sarees
          </h1>

          {/* Slider */}
          <div className="relative h-[380px] sm:h-[420px] md:h-[500px] flex items-center justify-center mb-20 overflow-hidden">
            {getVisibleSarees().map((saree) => {
              const isCenter = saree.position === 0;

              return (
                <div
                  key={saree.id}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isCenter
                      ? "z-30 scale-100 opacity-100"
                      : "z-10 scale-[0.75] md:scale-[0.65] opacity-50"
                  }`}
                  style={{
                    transform: `
                translateX(${
                  saree.position *
                  (typeof window !== "undefined" && window.innerWidth < 768
                    ? 220
                    : 600)
                }px)
                scale(${isCenter ? 1 : 0.75})
                rotateY(${saree.position * 8}deg)
              `,
                  }}
                >
                  <div
                    className="rounded-3xl overflow-hidden 
                            w-[280px] h-[360px]
                            sm:w-[320px] sm:h-[420px]
                            md:w-[493px] md:h-[577px]
                            p-4 sm:p-6 md:p-8"
                  >
                    <img
                      src={saree.image}
                      alt={`Saree ${saree.id}`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows */}
      

          {/* Dots */}
          <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
            {sarees.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 md:h-4 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-purple-600 w-8 md:w-12"
                    : "bg-purple-300 w-3 md:w-4"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-36 items-center">
            {/* LEFT SIDE IMAGES */}
            <div className="relative flex flex-col items-center gap-6 lg:h-[600px]">
              {/* Image 1 */}
              <div
                className="
          w-[260px] h-[260px]
          sm:w-[300px] sm:h-[300px]
          bg-white rounded-2xl shadow-2xl overflow-hidden
          lg:absolute lg:-top-20 lg:left-0
        "
              >
                <img
                  src="../images/Rectangle 103.png"
                  alt="Purple Saree"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 2 */}
              <div
                className="
          w-[260px] h-[380px]
          sm:w-[280px] sm:h-[420px]
          bg-white rounded-2xl shadow-2xl overflow-hidden z-10
          lg:absolute lg:bottom-0 lg:left-42
        "
              >
                <img
                  src="../images/Rectangle 105.png"
                  alt="Orange Saree"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image 3 */}
              <div
                className="
          w-[280px] h-[360px]
          sm:w-[320px] sm:h-[380px]
          bg-white rounded-2xl shadow-2xl overflow-hidden
          lg:absolute lg:top-20 lg:left-85
        "
              >
                <img
                  src="../images/Rectangle 104.png"
                  alt="Green Saree"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-[36px] sm:text-[44px] md:text-[54px] font-[Gabriola] text-purple-600 mb-6">
                Trending Fashion
              </h2>

              <p className="text-gray-700 text-[14px] font-[Readex_Pro] leading-relaxed max-w-xl mx-auto lg:mx-0">
                At House of Priyá, every saree is thoughtfully curated to
                reflect modern elegance while staying rooted in timeless Indian
                tradition.
              </p>

              <p className="text-gray-700 text-[14px] font-[Readex_Pro] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our trending collection brings together rich fabrics, refined
                color palettes, and graceful designs that suit both everyday
                sophistication and special occasions.
              </p>

              <p className="text-gray-700 text-[14px] font-[Readex_Pro] leading-relaxed max-w-xl mx-auto lg:mx-0">
                From subtle pastels to bold statement drapes, each piece is
                crafted to make you feel confident, elegant, and effortlessly
                stylish.
              </p>

              <div className="pt-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105">
                  Enquire on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-[38px] md:text-[50px] lg:text-[68px] font-[Gabriola] text-center tracking-[0.5px] text-purple-600 mb-20">
            See Our Sarees Come Alive
          </h2>

          {/* Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sareeCollections.map((collection) => (
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
                onMouseEnter={() => setHoveredCard(collection.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} transition-opacity duration-500`}
                  />
                </div>

                {/* Play Button */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div
                    className={` rounded-full p-6 shadow-2xl transition-all duration-500 
                    }`}
                  ></div>
                </div>

                <div className="absolute inset-0 border-4 border-transparent group-hover:border-purple-400 rounded-3xl transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url("../images/Rectangle 115.png")',
          }}
        />

        {/* Content Wrapper */}
        <div className="relative z-10 min-h-screen flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-24">
          {/* Form Card */}
          <div
            className="
        bg-white/70 backdrop-blur-sm shadow-2xl rounded-xl
        w-full sm:max-w-[520px] lg:max-w-[617px]
        p-6 sm:p-8 lg:p-12
      "
          >
            <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-[Gabriola] text-purple-600 mb-4 leading-tight text-center lg:text-left">
              House of Priya is Coming to RS Puram
            </h1>

            <p className="text-gray-600 font-[Readex_Pro] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed tracking-wide mb-6 text-center lg:text-left">
              Step into a space where elegance, craftsmanship, and modern sarees
              come together.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-5 text-center">
                <p className="text-green-700 font-semibold text-base sm:text-lg">
                  Thank you! We'll notify you soon! 🎉
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-gray-700 text-sm sm:text-base placeholder:text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-gray-700 text-sm sm:text-base placeholder:text-gray-400"
                />

                <button
                  onClick={handleSubmit}
                  className="
              w-full sm:w-auto
              bg-purple-600 hover:bg-purple-700
              text-white font-semibold
              px-8 py-3 rounded-lg
              transition-all duration-300
              shadow-lg hover:shadow-xl
              text-sm sm:text-base
            "
                >
                  Notify Me
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
