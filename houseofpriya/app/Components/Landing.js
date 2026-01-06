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
import { useState } from "react";
import Footer from "../Components/Footer";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const Landing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '' });
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sarees.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sarees.length) % sarees.length);
  };

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
      <section>
        <div className="min-h-screen relative overflow-hidden ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat  "
            style={{
              backgroundImage: `url('/images/bg.png')`,
            }}
          >
            {/* Overlay for better text readability if needed */}
            <div className="absolute inset-0 "></div>
          </div>

          {/* Navigation */}
          <nav className="relative z-20 flex items-center justify-between px-8 py-6">
            <div className="flex items-center">
              <div className="w-50 h-30 rounded-xl   flex items-center justify-end lg:ml-10 -mt-5">
                <img
                  src="/images/logo.png"
                  alt="House of Priya Logo"
                  className="w-34 h-34 object-contain"
                />
              </div>
            </div>

            <div
              className="flex gap-15 text-[#6C6C6C] lg:-mt-25 
                font-[var(--font-readex-pro)] 
                font-bold 
                text-[20px] 
                leading-[0.81] 
                tracking-normal"
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

            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium transition shadow-lg -mt-25">
              Enquire on WhatsApp
            </button>
          </nav>

          {/* Main Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 lg:px-16 py-12 max-w-7xl mx-auto -mt-20  ">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-serif text-white leading-tight">
                Grace Woven in Every Thread
              </h1>
              <p className="text-lg text-white font-light">
                Discover timeless sarees crafted with passion.
              </p>
              <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4">
                Enquire on WhatsApp
              </button>
            </div>

            {/* Right Content - Woman in Saree */}
            <div className="relative flex items-start justify-center">
              {/* Decorative Circle */}
              <div className="absolute bottom-0 left-1/4 w-64 h-64 "></div>

              {/* Woman Image Section */}
              <div className="relative z-10 w-full max-w-md">
                <div className="  px-8 w-[549px] h-[600px] ">
                  <img src="../images/womensaree.png" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Circle */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-lime-300 to-yellow-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
      <section className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* LEFT IMAGE */}
            <div className="flex justify-center z-30">
              <img
                src="../images/ellipse.png"
                alt="Woman in purple sari"
                className="w-[492px] h-[699px]  -mt-60"
              />
            </div>

            {/* CENTER CONTENT */}
            <div className="space-y-6  lg:text-left">
              <h2
                className="
    font-[Gabriola]
    font-normal
    text-[66px]
    leading-10
    tracking-[-0.5px]
    text-purple-700
  "
              >
                Our Signature Weave
              </h2>

              <p
                className="
    font-[var(--font-readex-pro)]
  
    text-[18px]
    leading-[30px]
    tracking-[-0.5px]
    text-justify
    text-gray-700
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
  
    text-[16px]
    leading-6
    tracking-[-0.5px]
    text-gray-700
  "
              >
                <li className="flex items-start gap-5">
                  <span className="text-orange-500 leading-[24px]">♦</span>
                  Premium silk with 24k gold thread work
                </li>

                <li className="flex items-start gap-5">
                  <span className="text-orange-500 leading-[24px]">♦</span>
                  Hand-woven by master artisans
                </li>

                <li className="flex items-start gap-5">
                  <span className="text-orange-500 leading-[24px]">♦</span>
                  Limited edition collection
                </li>
              </ul>

              <div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-[var(--font-readex-pro)] px-6 py-3 rounded-lg">
                  Enquire on WhatsApp
                </button>
              </div>
              <div className="flex justify-end -mt-30">
                <img
                  src="../images/saree2.png"
                  alt="Woman in patterned sari"
                  className="w-[270px] h-[358px] "
                />
              </div>
            </div>

            {/* RIGHT IMAGE */}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2
            className="
        font-[Gabriola]
        text-[66px]
        leading-[48px]
        tracking-[-0.5px]
        text-purple-600
      "
          >
            Our Exquisite Collection
          </h2>

          {/* Subheading */}
          <p
            className="
        mt-4
        font-[var(--font-readex-pro)]
        text-[18px]
        leading-[26px]
        text-[#4B5563]
        max-w-2xl
        mx-auto
        mb-30
      "
          >
            From everyday sophistication to bridal grandeur – a saree for every
            moment.
          </p>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Card 1 */}
            <div>
              <img
                src="../images/collection1.png"
                alt="Premium Handloom"
                className="w-full "
              />
              <h3 className="font-[Gabriola] text-[38px] text-purple-600">
                Premium Handloom
              </h3>
              <p
                className="
            font-[var(--font-readex-pro)]
            text-[16px]
            leading-[22px]
            text-[#4B5563]
          "
              >
                Magnificent designs for your special day
              </p>
            </div>

            {/* Card 2 */}
            <div className="-mt-20">
              <img
                src="../images/collection2.png"
                alt="Party Wear"
                className="w-full "
              />
              <h3 className="font-[Gabriola] text-[38px] text-purple-600">
                Party Wear
              </h3>
              <p
                className="
            font-[var(--font-readex-pro)]
            text-[16px]
            leading-[22px]
            text-[#4B5563]
          "
              >
                Glamorous styles for celebrations
              </p>
            </div>

            {/* Card 3 */}
            <div>
              <img
                src="../images/collection3.png"
                alt="Everyday Elegance"
                className="w-full "
              />
              <h3 className="font-[Gabriola] text-[38px] text-purple-600">
                Everyday Elegance
              </h3>
              <p
                className="
            font-[var(--font-readex-pro)]
            text-[16px]
            leading-[22px]
            text-[#4B5563]
          "
              >
                Comfortable luxury for daily wear
              </p>
            </div>

            {/* Card 4 */}
            <div className="-mt-20">
              <img
                src="../images/collection4.png"
                alt="Bridal Sarees"
                className="w-full "
              />
              <h3 className="font-[Gabriola] text-[38px] text-purple-600">
                Bridal Sarees
              </h3>
              <p
                className="
            font-[var(--font-readex-pro)]
            text-[16px]
            leading-[22px]
            text-[#4B5563]
          "
              >
                Artisan crafted masterpieces
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative w-full h-[520px]"
        style={{
          backgroundImage: "url('../images/Rectangle 102.png')",
        }}
      >
        {/* Overlay for softness */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
          {/* LEFT OVAL CONTENT */}
          <div className="relative z-10">
            <div
              className="
          bg-white/70
          backdrop-blur-sm
          rounded-[300px]
          px-16 py-20
          max-w-md
        "
            >
              <p className="font-serif italic text-gray-800 text-lg mb-2">
                The New Edit
              </p>

              <h1
                className="
            font-[Gabriola]
            text-[56px]
            leading-[48px]
            text-purple-600
            mb-4
          "
              >
                House of Priya
              </h1>

              <p
                className="
            font-[var(--font-readex-pro)]
            text-[15px]
            leading-[24px]
            text-gray-700
            max-w-xs
          "
              >
                A refined selection of sarees crafted to celebrate feminine
                elegance.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}

          {/* LOGO (top right) */}
          <div className="absolute top-[32px] right-[32px]">
            <img
              src="/images/logo.png"
              alt="House of Priya Logo"
              className="w-[178px] h-[177px] object-contain"
            />
          </div>
        </div>
      </section>
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section - Colorful Joy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left - Text Content */}
          <div className="flex flex-col justify-start p-12 lg:p-16">
            <h2 className="text-5xl lg:text-6xl font-serif text-purple-600 mb-32">
              Farewell Collection
            </h2>
            
            <div className="mx-auto lg:ml-40">
              <h3 className="text-3xl font-serif text-purple-600 mb-4">
                Colorful Joy
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-md">
                Perfect for women who love subtle elegance with a modern twist. Each saree flows effortlessly from day wear to evening occasions.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative bg-gray-100 flex items-center justify-center p-8">
            <img
              src="../images/Rectangle 21 (1).png"
              alt="Colorful Joy Saree"
              className="w-full h-full max-h-[500px] object-contain"
            />
            {/* Plant decoration */}
            <div className="absolute bottom-8 left-8 w-24 h-32 bg-green-600/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Bottom Section - Dual Joy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          
          {/* Left - Image with Orange Background */}
          <div className="relative bg-[#E2AC52] flex items-center justify-center p-8 order-2 lg:order-1">
            <img
              src="../images/Rectangle 22 (3).png"
              alt="Dual Joy Saree"
              className="w-full h-full max-h-[500px] object-contain"
            />
            {/* Plant decoration */}
            <div className="absolute bottom-12 left-12 w-24 h-32 bg-green-700/30 rounded-full blur-2xl" />
          </div>

          {/* Right - Text Content with Orange Background */}
          <div className="bg-[#E2AC52] flex items-center justify-start p-12 lg:p-16 order-1 lg:order-2">
            <div>
              <h3 className="text-3xl font-serif text-purple-600 mb-4">
                Dual Joy
              </h3>
              <p className="text-gray-800 text-base leading-relaxed max-w-md">
                Experience the beauty of contrast with our Dual Joy sarees — thoughtfully designed to blend two harmonious shades into one graceful drape.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
      <section className=" bg-white py-20 px-4">
        <div className="max-w-[1800px] mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif text-center mb-24 text-purple-600">
            Modern Style Toward Sarees
          </h1>

          <div className="relative h-[500px] md:h-[500px] flex items-center justify-center mb-26">
            {getVisibleSarees().map((saree) => {
              const isCenter = saree.position === 0;

              return (
                <div
                  key={saree.id}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isCenter
                      ? "z-30 scale-100 opacity-100"
                      : "z-10 scale-[0.65] opacity-50"
                  }`}
                  style={{
                    transform: `translateX(${saree.position * 600}px) scale(${
                      isCenter ? 1 : 0.65
                    }) rotateY(${saree.position * 10}deg)`,
                  }}
                >
                  <div
                    className={` rounded-3xl overflow-hidden w-[493px] h-[577px] flex items-center justify-center p-8`}
                  >
                    <img
                      src={saree.image}
                      alt={`Saree ${saree.id}`}
                      className="w-full h-full object-cover rounded-2xl "
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center gap-6 mt-16">
            <button
              onClick={prevSlide}
              className="bg-purple-600 hover:bg-purple-700 text-white p-5 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-110"
              aria-label="Previous saree"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-purple-600 hover:bg-purple-700 text-white p-5 rounded-xl transition-all shadow-xl hover:shadow-2xl hover:scale-110"
              aria-label="Next saree"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-12">
            {sarees.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-4 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-purple-600 w-12"
                    : "bg-purple-300 w-4"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Images */}
            <div className="relative h-[600px]">
              {/* Purple Saree with Golden Border - Top Left */}
              <div className="absolute -top-20 left-0 w-[332px] h-[334px] bg-white rounded-2xl shadow-2xl overflow-hidden transform  ">
                <img
                  src="../images/Rectangle 103.png"
                  alt="Purple Saree"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Orange/Red Saree - Bottom Left */}
              <div className="absolute bottom-0 left-42 w-[280px] h-[420px] bg-white rounded-2xl shadow-2xl overflow-hidden transform   z-30">
                <img
                  src="../images/Rectangle 105.png"
                  alt="Orange Saree"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Green Saree with Jewelry - Center Right */}
              <div className="absolute top-20 left-85 w-80 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="../images/Rectangle 104.png"
                  alt="Green Saree"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif text-purple-600 mb-8">
                Trending Fashion
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                At House of Priyá, every saree is thoughtfully curated to
                reflect modern elegance while staying rooted in timeless Indian
                tradition.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Our trending collection brings together rich fabrics, refined
                color palettes, and graceful designs that suit both everyday
                sophistication and special occasions.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                From subtle pastels to bold statement drapes, each piece is
                crafted to make you feel confident, elegant, and effortlessly
                stylish. Designed for women who appreciate quality, detail, and
                authenticity, our sarees are perfect for celebrations, workwear,
                and elegant evenings alike.
              </p>

              <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                Enquire on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-5xl md:text-6xl font-serif text-center text-purple-600 mb-20">
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
      {/* Background Image for entire section */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("../images/Rectangle 115.png")',
          backgroundSize: 'cover',
         
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="relative z-10 min-h-screen flex items-center px-8 lg:px-24">
        
        {/* Form Card - Exact Figma dimensions */}
        <div 
          className="bg-white shadow-2xl"
          style={{
            width: '617px',
            maxWidth: '90vw',
            borderRadius: '12px',
            opacity: 0.67,
            padding: '48px'
          }}
        >
          <h1 className="text-5xl font-serif text-purple-600 mb-6 leading-tight">
            House of Priya is Coming to RS Puram
          </h1>
          
          <p className="text-gray-600 text-base mb-8 leading-relaxed">
            Step into a space where elegance, craftsmanship, and modern sarees come together.
          </p>

          {isSubmitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center">
              <p className="text-green-700 font-semibold text-lg">
                Thank you! We'll notify you soon! 🎉
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-gray-700 text-base placeholder:text-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-gray-700 text-base placeholder:text-gray-400"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-base mt-2"
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
