"use client";

import React from "react";
import { useState, useEffect,useRef } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../Components/Footer";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { MoveUpRight } from "lucide-react";

const Landing = () => {
  const pathname = usePathname();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

   useEffect(() => {
    const checkView = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkView();
    window.addEventListener("resize", checkView);
    return () => window.removeEventListener("resize", checkView);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  useEffect(() => {
  const interval = setInterval(() => {
    handleNext();
  }, 3000); // 3 sec auto scroll

  return () => clearInterval(interval);
}, [currentIndex]);


const scrollToIndex = (index) => {
  if (!sliderRef.current) return;

  const slideWidth = sliderRef.current.children[0].offsetWidth;
  sliderRef.current.scrollTo({
    left: slideWidth * index,
    behavior: "smooth",
  });

  setCurrentIndex(index);
};

// const handlePrev = () => {
//   const newIndex =
//     currentIndex === 0 ? sarees.length - 1 : currentIndex - 1;
//   scrollToIndex(newIndex);
// };

// const handleNext = () => {
//   const newIndex =
//     currentIndex === sarees.length - 1 ? 0 : currentIndex + 1;
//   scrollToIndex(newIndex);
// };


  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true); // 🔄 start loader

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setShowModal(true);
        setFormData({ name: "", email: "" });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // ✅ stop loader
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
      image: "../images/Rectangle 19470 (1).png",

      bgColor: "bg-yellow-100",
    },
    {
      id: 2,
      image: "../images/DSC02515.jpg",
      bgColor: "bg-green-100",
    },
    {
      id: 3,
      image: "../images/DSC02561 (1).jpg",

      bgColor: "bg-orange-200",
    },
    {
      id: 4,
      image: "../images/DSC02673.jpg",

      bgColor: "bg-pink-100",
    },
    {
      id: 5,
      image: "../images/DSC02804.jpg",

      bgColor: "bg-pink-100",
    },
    {
      id: 6,
      image: "../images/DSC02902.jpg",

      bgColor: "bg-pink-100",
    },
  ];
const angleStep = 360 / sarees.length;
  const radius = isTablet ? 320 : 520;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sarees.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sarees.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sarees.length - 1 ? 0 : prevIndex + 1,
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

  const [screen, setScreen] = useState("desktop");

  useEffect(() => {
    const updateScreen = () => {
      if (window.innerWidth < 640) setScreen("mobile");
      else if (window.innerWidth < 1024) setScreen("tablet");
      else setScreen("desktop");
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const transformConfig = {
    mobile: { x: 140, rotate: 10, scale: 0.9 },
    tablet: { x: 220, rotate: 14, scale: 0.85 },
    desktop: { x: 520, rotate: 18, scale: 0.78 },
  };

  const { x, rotate, scale } = transformConfig[screen];
  return (
    <>
      <main>
        <section>
          <div className="h-[840px] md:h-[1150px] lg:h-auto relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url('/images/k bg (5).png')` }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 block lg:hidden"
                style={{ backgroundImage: "url('/images/bgmobile1.png')" }}
              />
              <div className="absolute inset-0"></div>
            </div>

            <div className="absolute inset-0 pointer-events-none block lg:hidden">
  {/* Border */}
  <div className="absolute top-6 sm:top-10 left-4 sm:left-6 right-4 sm:right-6 bottom-4 sm:bottom-6 border-2 border-white opacity-40 rounded-sm"></div>

  {/* Bottom Right Image on Border */}
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


            <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-6">
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-xl flex items-center justify-center lg:ml-10 relative">
                  {/* <div className="w-full h-full absolute bg-[url('/images/bg.png')] rounded-xl hidden lg:block bg-transparent"></div> */}

                  {/* 
                  <img
                    src="/images/logo3.png"
                    alt="House of Priya Logo"
                    className="w-20 sm:w-24 lg:w-68 object-contain z-10 lg:-mt-2"
                  />   */}
                  <img
                    src="/images/logos.svg"
                    alt="House of Priya Logo"
                    className="
    object-contain z-10 mt-5 md:mt-20
    w-20 sm:w-20 md:w-24
    block lg:hidden
  "
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

                <a
                  href="https://wa.me/919363167299"
                  target="_blank"
                  className="hidden lg:block bg-[#6B46C1] hover:bg-purple-800 text-white px-6 py-2 rounded-md font-medium shadow-lg -mt-30"
                >
                  Enquire on WhatsApp
                </a>

                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden text-4xl text-gray-500 z-50 p-5"
                  arial-label="Toggle menu"
                >
                  {menuOpen ? "✕" : "☰"}
                </button>
              </div>

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
              <div className="space-y-6 text-center lg:text-left -mt-13 sm:mt-0">
                <h1
                  className="
          font-['Cormorant_Garamond'] font-semibold
          text-[36px] sm:text-[48px] md:text-[56px] lg:text-[74px]
          leading-tight sm:leading-[60px] lg:leading-[90px]
          tracking-[-0.5px]
          text-[#6B46C1] lg:text-white mt-0 sm:-mt-3
        "
                >
                  Grace Woven in Every Thread
                </h1>

                <p
                  className="
          font-readex
          tracking-[-0.5px]
          text-[16px] sm:text-[18px] lg:text-[18px]
          text-gray-500 lg:text-white font-normal
        
        "
                >
                  Discover timeless sarees crafted with passion.
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

              <div className="relative flex justify-end">
                <div
                  className="
          px-10 sm:px-6 lg:px-15
          w-full sm:w-[380px] md:w-[450px] lg:w-[549px] 
          h-auto lg:h-150
        "
                >
                  <img
                    src="../images/DSC02740 1 (2).png"
                    className="w-full h-[450px] md:h-[750px] lg:h-auto  object-contain"
                    alt="Saree Model"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-72 sm:w-80 lg:w-96 h-72 sm:h-80 lg:h-96 bg-gradient-to-tr  rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
          </div>
        </section>

        <section className="bg-amber-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
              {/* LEFT IMAGE */}
              <div className="flex justify-center lg:justify-start z-30 ">
                <img
                  src="../images/ellipse.png"
                  alt="Woman in purple sari"
                  className="
            w-[260px] h-auto
            md:w-[380px]
            lg:w-[492px] lg:h-[699px]
            lg:-mt-50 hidden lg:block
          "
                />
              </div>

              {/* CONTENT */}
              <div className="space-y-8 text-center lg:text-left">
                <h2
                  className="
                  -mt-23

                  lg:mt-0
                  md:mt-0
                  sm:-mt-23
            font-gabriola
            font-normal
            text-[40px]
            md:text-[54px]
            lg:text-[66px]
            leading-tight
            tracking-[-0.5px]
            text-[#6B46C1]
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
            text-[#374151]
            tracking-[0.1px] 
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
    font-readex
    text-[16px]
    md:text-[16px]
    text-[#374151]
  "
                >
                  <li className="flex items-center gap-3 tracking-[0.3px]">
                    <img
                      src="../images/i.png"
                      alt="Check mark icon"
                      aria-hidden="true"
                      className="w-3 h-5 shrink"
                    />
                    <span>Premium silk with 24k gold thread work</span>
                  </li>

                  <li className="flex items-center gap-3 tracking-[0.3px]">
                    <img
                      src="../images/i (1).png"
                      alt="Check mark icon"
                      className="w-3 h-5 shrink-0"
                    />
                    <span>Hand-woven by master artisans</span>
                  </li>

                  <li className="flex items-center gap-3 tracking-[0.3px]">
                    <img
                      src="../images/i (2).png"
                      alt="Check mark icon"
                      className="w-3 h-5 shrink-0"
                    />
                    <span>Limited edition collection</span>
                  </li>
                </ul>

                <div>
                  <a
                    href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                    className="bg-[#6B46C1] hover:bg-purple-700 text-white  font-readex px-6 py-3 rounded-lg"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    {" "}
                    Enquire on WhatsApp
                  </a>
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
              h-auto hidden lg:block
            "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-white overflow-hidden hidden lg:block">
          {/* LEFT SIDE DECOR IMAGE */}
          <img
            src="../images/image 44.png"
            alt=""
            aria-hidden="true"
            className="
      hidden lg:block
      absolute
      left-2
      top-1/2
      -translate-y-1/2
      w-31
      opacity-100
    "
          />

          {/* RIGHT SIDE DECOR IMAGE */}
          <img
            src="../images/image 44.png"
            alt="Right Decoration"
            className="
      hidden lg:block
      absolute
      right-2
      top-1/2
      -translate-y-1/2
       w-31
      opacity-100
      rotate-180
    "
          />

          {/* CONTENT */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 ">
            {/* HEADING */}
            <h2 className="text-center font-gabriola text-[36px] sm:text-[44px] lg:text-[56px] text-[#6B46C1] mb-2">
              Our Exquisite Collection
            </h2>

            <p
              className="
  font-readex
  font-normal
  text-[14px] sm:text-[16px] lg:text-[18px]
  leading-7
  tracking-[-0.2px]
  text-center
  text-[#4B5563]
  max-w-3xl
  mx-auto
  mb-7 sm:mb-10 lg:mb-36
"
            >
              From everyday sophistication to bridal grandeur – a saree for
              every moment.
            </p>

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {/* CARD 1 */}
              <div>
                <img
                  src="../images/collection1.png"
                  alt="Premium Handloom"
                  className="w-full"
                />
                <h3 className="font-gabriola text-[20px] text-center sm:text-[32px] lg:text-[38px] text-[#6B46C1] mt-4">
                  Banarasi Heritage
                </h3>
                <p className="font-readex text-[14px] text-center sm:text-[15px] lg:text-[16px] leading-[22px] text-[#4B5563]">
                  Magnificent designs for your special day
                </p>
              </div>

              {/* CARD 2 */}
              <div className="lg:-mt-20">
                <img
                  src="../images/collection2.png"
                  alt="Party Wear"
                  className="w-full"
                />
                <h3 className="font-gabriola text-center text-[20px] sm:text-[32px] lg:text-[38px] text-[#6B46C1] mt-4">
                  Kanjeevaram Classics
                </h3>
                <p className="font-readex text-[14px] text-center sm:text-[15px] lg:text-[16px] leading-[22px] text-[#4B5563]">
                  Glamorous styles for celebrations
                </p>
              </div>

              {/* CARD 3 */}
              <div>
                <img
                  src="../images/collection3.png"
                  alt="Everyday Elegance"
                  className="w-full"
                />
                <h3 className="font-gabriola text-[20px] text-center sm:text-[32px] lg:text-[38px] text-[#6B46C1] mt-4">
                  Contemporary Silks
                </h3>
                <p className="font-readex text-[14px] sm:text-[15px] text-center lg:text-[16px] leading-[22px] text-[#4B5563]">
                  Comfortable luxury for daily wear
                </p>
              </div>

              {/* CARD 4 */}
              <div className="lg:-mt-20 relative">
                <img
                  src="../images/collection4.png"
                  alt="Bridal Sarees"
                  className="w-full"
                />
                <h3 className="font-gabriola text-[20px] text-center sm:text-[32px] lg:text-[38px] text-[#6B46C1] mt-4">
                  Bridal Sarees
                </h3>
                <p className="font-readex text-[14px] sm:text-[15px] text-center lg:text-[16px] leading-[22px] text-[#4B5563]">
                  Artisan crafted masterpieces
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          className="relative w-full h-[600px] sm:h-[700px] lg:h-[750px]"
          style={{
            backgroundImage: "url('../images/Rectangle 102.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-center lg:justify-start">
     
            <div className="relative z-10 w-full flex justify-center lg:justify-start">
              <div
                className="
          bg-white/70
          backdrop-blur-sm
          rounded-tl-[160px] rounded-tr-[160px]
          lg:rounded-tl-[200px] lg:rounded-tr-[200px]
          max-w-md
          w-[90%] sm:w-[80%] lg:w-[420px]
          
          py-12 sm:py-16 h-[400px] lg:h-[544px]
          flex flex-col items-center justify-center
          text-center
        "
              >
                <p className="text-[#000000] text-[32px] sm:text-[32px] lg:text-[40px] font-gabriola mb-2">
                  The New Edit
                </p>

                <h1
                  className="
            font-[NanumMyeongjo]
            font-normal
            text-[40px] sm:text-[36px] lg:text-[45px]
            leading-tight lg:leading-[2.07]
            text-[#6B46C1]
            mb-4
          "
                >
                  House of Priya
                </h1>

                <p
                  className="
            font-readex
            text-[18px] sm:text-[15px]
            leading-7 sm:leading-6
            text-[#454545]
            max-w-xs
          "
                >
                  A refined selection of sarees crafted to celebrate feminine
                  elegance.
                </p>
              </div>
            </div>

          
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 hidden sm:block ">
              <img
                src="/images/logo.png"
                alt="House of Priya Logo"
                className="w-[90px] sm:w-[130px] lg:w-[178px] object-contain"
              />
            </div>
          </div>
        </section> */}

        <section className="bg-white relative">
          <img
            src="../images/Group (8).png"
            alt=""
            aria-hidden="true"
            className="absolute hidden lg:block"
          />
          <div className="max-w-7xl mx-auto">
            <h2
              className="-mt-17 lg:mt-0 sm:mt-0 md:mt-0 font-gabriola text-[#6B46C1] text-center 
               text-[36px] sm:text-[48px] lg:text-[66px] mb-10"
            >
              <span className="">Farewell Collection</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px] items-center">
              <div className="flex flex-col  px-6 py-10 sm:px-10 lg:px-16">
                <div className="max-w-md mx-auto lg:mx-0 ml-0 lg:ml-40">
                  <h3
                    className="-mt-20 lg:mt-0 md:mt-0 font-gabriola text-[#6B46C1] mb-4
                     text-[26px] sm:text-[32px] lg:text-[40px] text-center  lg:text-end"
                  >
                    Colorful Joy
                  </h3>
                  <p
                    className="font-readex text-[#5E584E] text-justify
                    text-[13px] sm:text-[14px]
                    leading-[1.8] mb-4"
                  >
                    Perfect for women who love subtle elegance with a modern
                    twist, each saree flows effortlessly from day wear to
                    evening occasions.
                  </p>
                  <hr className="border-t border-[#745F5F] w-full" />
                </div>
              </div>

              {/* Right - Image */}
              <div
                className="
    w-full
    max-w-[461px]
    h-[400px] lg:h-full
    aspect-[461/576]
    relative  
  "
              >
                {/* bgline – backside */}
                <img
                  src="/images/bgline.png"
                  alt="bg line"
                  className="
      absolute
      top-[-10px]
      lg:top-[-20px]
      left-38
      md:left-33
      lg:left-20
      w-50
      md:w-68
      lg:w-100
      h-auto
      z-10
   
    "
                />

                {/* main image – TOP layer */}
                <img
                  src="/images/Rectangle 21 (1).png"
                  alt="Colorful Joy Saree"
                  className="
    relative z-20
    w-[260px] h-[320px]        /* 📱 mobile size */
    sm:w-[320px] sm:h-[400px] /* 📱 tablet */
    lg:w-full lg:h-full       /* 🖥 desktop */
    object-cover
    mx-auto lg:mx-0
  "
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-[#E2AC52] mt-0 lg:-mt-20 relative z-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[600px]">
              <div
                className="relative flex items-center justify-center px-6 py-10 sm:p-8
                      order-1 lg:order-1"
              >
                <img
                  src="/images/bgline.png"
                  alt="bg line"
                  className="
      absolute
      lg:top-[160px]
      top-[280px]
      md:top-[280px]
      left-2
      md:left-32
      lg:left-35
      w-80
      lg:w-100
      h-auto
      z-10
      
    "
                />

                <img
                  src="/images/Rectangle 22 (3).png"
                  alt="Dual Joy Saree"
                  className="w-full max-w-sm sm:max-w-md lg:max-w-full
                     h-[550px] sm:h-[550px] lg:max-h-[550px] object-contain
                     lg:-mt-40 z-30"
                />
                <div
                  className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12
                        w-20 h-28 bg-green-700/30 rounded-full blur-2xl"
                />
              </div>

              <div
                className="flex items-center justify-center lg:justify-start
                      px-6 py-10 sm:px-10 lg:p-12
                      order-2 lg:order-2"
              >
                <div className="ml-0 lg:-ml-40 lg:-mt-20">
                  <h3
                    className="-mt-20 lg:mt-0 md:mt-0 sm:mt-0 font-gabriola text-[#6B46C1] mb-3
                         text-[26px] sm:text-[32px] lg:text-[40px]"
                  >
                    Dual Joy
                  </h3>

                  <p
                    className="font-readex text-[#5E584E] text-justify
                        text-[13px] sm:text-[14px]
                        leading-[1.6] max-w-md"
                  >
                    Experience the beauty of contrast with our Dual Joy sarees —
                    thoughtfully designed to blend two harmonious shades into
                    one graceful drape.
                  </p>
                  <hr className="mt-3 text-[#745F5F] border" />
                </div>
              </div>
            </div>
            <img
              src="../images/Group (9).png"
              className="absolute -bottom-1 right-8 lg:right-2
                        w-52 sm:w-64 lg:w-95 
                        h-96 lg:h-125 hidden lg:block"
              alt="Decorative paisley design"
            />
          </div>
        </section>

  {/* <section className="bg-white py-16 px-4">
      <div className="max-w-[1800px] mx-auto">
        <h1 className="-mt-15 lg:mt-0 md:mt-0 sm:mt-0 text-[36px] sm:text-[44px] md:text-[64px] text-center mb-16 text-[#6B46C1] font-gabriola">
          Modern Style Toward Sarees
        </h1>

        {isMobile ? (
          <div className="flex justify-center">
            <div className="w-[260px] h-[360px] rounded-[24px] overflow-hidden shadow-xl">
              <img
                src={sarees[currentIndex].image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        ) : (
          
          <div className="relative h-[600px] flex items-center justify-center [perspective:1600px]">
            {sarees.map((saree, index) => {
              const relativeIndex =
                (index - currentIndex + sarees.length) % sarees.length;
              const isCenter = relativeIndex === 0;

              return (
                <div
                  key={saree.id}
                  className={`absolute transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)]
                    ${isCenter ? "z-30 opacity-100" : "z-10 opacity-60"}
                  `}
                  style={{
                    transform: isCenter
                      ? "translateZ(0px) scale(1)"
                      : `
                          rotateY(${relativeIndex * angleStep}deg)
                          translateZ(${radius}px)
                          scale(0.85)
                        `,
                  }}
                >
                  <div
                    className="
                      w-[220px] h-[300px]
                      sm:w-[300px] sm:h-[420px]
                      md:w-[360px] md:h-[500px]
                      lg:w-[420px] lg:h-[560px]
                      rounded-[24px]
                      overflow-hidden
                      bg-white
                      shadow-2xl
                    "
                  >
                    <img
                      src={saree.image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}

       
        <div className="flex justify-center gap-6 mt-12">
          <button
            onClick={handlePrev}
            className="w-20 h-12 rounded-xl bg-[#6B46C1] text-white text-2xl"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="w-20 h-12 rounded-xl bg-[#6B46C1] text-white text-2xl"
          >
            ›
          </button>
        </div>
      </div>
    </section> */}
    <section className="bg-white py-10 sm:py-12 lg:py-16 px-4 overflow-hidden">
  <div className="max-w-[1800px] mx-auto">
    {/* Heading */}
    <h1
      className="
        mt-0
        text-[28px]
        sm:text-[44px]
        md:text-[64px]
        text-center
        mb-10 sm:mb-16
        text-[#6B46C1]
        font-gabriola
      "
    >
      Modern Style Toward Sarees
    </h1>

    {/* MOBILE FLAT SLIDER */}
    {isMobile ? (
      <div className="flex justify-center px-4">
        <div
          className="
            w-full
            max-w-[280px]
            h-[360px]
            rounded-[20px]
            overflow-hidden
            shadow-xl
          "
        >
          <img
            src={sarees[currentIndex].image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ) : (
      /* DESKTOP + TABLET 3D CAROUSEL */
      <div className="relative h-[600px] flex items-center justify-center [perspective:1600px]">
        {sarees.map((saree, index) => {
          const relativeIndex =
            (index - currentIndex + sarees.length) % sarees.length;
          const isCenter = relativeIndex === 0;

          return (
            <div
              key={saree.id}
              className={`
                absolute
                transition-all
                duration-700
                ease-[cubic-bezier(.4,0,.2,1)]
                ${isCenter ? "z-30 opacity-100" : "z-10 opacity-60"}
              `}
              style={{
                transform: isCenter
                  ? "translateZ(0px) scale(1)"
                  : `
                      rotateY(${relativeIndex * angleStep}deg)
                      translateZ(${radius}px)
                      scale(0.85)
                    `,
              }}
            >
              <div
                className="
                  w-[220px] h-[300px]
                  sm:w-[300px] sm:h-[420px]
                  md:w-[360px] md:h-[500px]
                  lg:w-[420px] lg:h-[560px]
                  rounded-[24px]
                  overflow-hidden
                  bg-white
                  shadow-2xl
                "
              >
                <img
                  src={saree.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    )}

    {/* Controls */}
    <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
      <button
        onClick={handlePrev}
        className="w-16 sm:w-20 h-10 sm:h-12 rounded-xl bg-[#6B46C1] text-white text-xl sm:text-2xl"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="w-16 sm:w-20 h-10 sm:h-12 rounded-xl bg-[#6B46C1] text-white text-xl sm:text-2xl"
      >
        ›
      </button>
    </div>
  </div>
</section>


        <section className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-16 md:py-20 px-4 hidden lg:block">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-36 items-center">
              {/* LEFT SIDE IMAGES */}
              <div className="relative flex flex-col items-center gap-6 lg:h-[600px]">
                {/* Image 1 */}
                <div
                  className="
          w-[260px] h-[260px]
          sm:w-[300px] sm:h-[300px]
          bg-white   overflow-hidden
          lg:absolute lg:-top-10 lg:left-0 hidden lg:block
        "
                >
                  <img
                    src="../images/Rectangle 103.png"
                    alt="Purple Saree"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div
                  className="
          w-[220px] h-[360px]
          sm:w-[280px] sm:h-[400px]
         overflow-hidden z-10
          lg:absolute lg:bottom-0 lg:left-42 hidden lg:block
        "
                >
                  <img
                    src="../images/sareeimg.png"
                    alt="Orange Saree"
                    className="w-full h-full object-fit"
                  />
                </div>

                <div
                  className="
          w-[280px] h-[480px]
          sm:w-[280px] sm:h-[420px]
           overflow-hidden
          lg:absolute lg:top-20 lg:left-85
        "
                >
                  <img
                    src="../images/Rectangle 105.png"
                    alt="Green Saree"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 text-center lg:text-left">
                <h2 className="text-[36px] sm:text-[44px] md:text-[54px] font-gabriola text-[#6B46C1] mb-6">
                  Trending Fashion
                </h2>

                <p className="text-gray-700 text-[14px] font-readex leading-relaxed max-w-xl mx-auto lg:mx-0">
                  At House of Priya, every saree is thoughtfully curated to
                  reflect modern elegance while staying rooted in timeless
                  Indian tradition.
                </p>

                <p className="text-gray-700 text-[14px] font-readex leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Our trending collection brings together rich fabrics, refined
                  color palettes, and graceful designs that suit both everyday
                  sophistication and special occasions.
                </p>

                <p className="text-gray-700 text-[14px] font-readex leading-relaxed max-w-xl mx-auto lg:mx-0">
                  From subtle pastels to bold statement drapes, each piece is
                  crafted to make you feel confident, comfortable, and
                  effortlessly beautiful. Designed for women who appreciate
                  quality, detail, and authenticity, our sarees are perfect for
                  celebrations, workwear, and elegant evenings alike
                </p>

                <div className="pt-6">
                  <a
                    href="https://wa.me/919363167299?text=Hi%20young%20mynds.%20I%20am%20interested%20in%20your%20service."
                    className="bg-[#6B46C1] hover:bg-purple-800 text-white px-8 py-3 rounded-md font-medium transition shadow-lg inline-block mt-4 font-readex"
                    target="_blank"
                    rel="noopener noreferer"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20 px-3">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <h2 className="-mt-25 lg:mt-0 md:mt-0 sm:mt-0 text-[38px] md:text-[50px] lg:text-[68px] font-gabriola text-center tracking-[0.5px] text-[#6B46C1] mb-2 lg:mb-20">
              See Our Sarees Come Alive
            </h2>

            {/* Video Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sareeCollections.map((collection) => (
                <div
                  key={collection.id}
                  className="group relative overflow-hidden rounded-3xl  cursor-pointer  "
                  onMouseEnter={() => setHoveredCard(collection.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Background Image */}
                  <div className="relative h-[280px] md:h-[500px] lg:h-[500px] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full "
                    />

                    {/* Gradient Overlay */}
                    {/* <div
                      className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} transition-opacity duration-500`}
                    /> */}
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
        <section className="-mt-17 lg:mt-0 md:mt-0 sm:mt-0  relative overflow-hidden ">
          {/* Background Image */}
          <div
            className="
    absolute inset-0
    bg-center bg-cover bg-no-repeat
    h-[60vh]        /* mobile */
    sm:h-[70vh]     /* large mobile */
    md:h-[1000px]     /* tablet FIX */
    lg:h-screen    
  "
            style={{
              backgroundImage: "url('/images/Rectangle 115.png')",
            }}
          />

          {/* Content Wrapper */}
          <div
            className="
      relative z-10
      flex items-center justify-center lg:justify-start
      px-4 sm:px-6 lg:px-24
      min-h-[60vh] lg:min-h-screen
    "
          >
            <div
              className="
        bg-white/70 backdrop-blur-sm shadow-2xl rounded-xl
        w-full max-w-[520px] lg:max-w-[617px]
        p-6 sm:p-8 lg:p-12
      "
            >
              <h1 className="text-[28px] sm:text-[34px] lg:text-[40px] font-gabriola text-[#6B46C1] mb-4 leading-tight text-center lg:text-left">
                House of Priya is Coming to RS Puram
              </h1>

              <p className="text-[#5E584E] font-readex text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed tracking-wide mb-6 text-center lg:text-left">
                Step into a space where elegance, craftsmanship, and modern
                sarees come together.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-xl p-5 text-center">
                  <p className="text-green-700 font-semibold text-base sm:text-lg">
                    Thank you! We'll notify you soon! 🎉
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleChange}
                      autoComplete="name"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all text-gray-700"
                    />

                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email ID"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleChange}
                      autoComplete="email"
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-all text-gray-700"
                    />

                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full sm:w-auto bg-[#6B46C1] hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Notify Me
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        {loading && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
            <div
              role="status"
              aria-label="Loading"
              className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"
            />
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="relative w-[90%] max-w-lg bg-white rounded-2xl p-8 text-center">
              <button
                aria-label="Close modal"
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
