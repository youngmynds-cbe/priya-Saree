"use client";

import React from "react";
import Footer from "../Components/Footer";
import { MessageCircle } from "lucide-react";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  const blogPosts = [
    {
      id: 1,
      image: "../images/img (8).png",
      badge: "Saree Styling",
      badgeColor: "bg-purple-600",
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
      badgeColor: "bg-purple-600",
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
      badge: "Bridal Wear",
      badgeColor: "bg-purple-600",
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
      badgeColor: "bg-purple-600",
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
      badgeColor: "bg-purple-600",
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
      badge: "Bridal Wear",
      badgeColor: "bg-purple-600",
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

          <nav className="relative z-20 flex items-center justify-between px-8 py-6 " >
            <div className="flex items-center">
              <div className="w-50 h-30 rounded-xl   flex items-center justify-center lg:ml-10 z-50 relative">
                <div className="bg-[#b3a1ce] w-40 h-40 absolute z-0"></div>


                <img
                  src="/images/logo.png"
                  alt="House of Priya Logo"
                  className="w-34 h-34 object-contain z-10 "
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

          {/* Main Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 lg:px-16 py-12 max-w-7xl mx-auto -mt-20  ">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="font-['Cormorant_Garamond']  text-[74px] leading-[90px] tracking-[-0.5px] text-white">
               Stories Woven in
Tradition & Style
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
                  <img src="../images/DSC02599 1.png" className="h-[650px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decorative Circle */}
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-lime-300 to-yellow-200 rounded-full blur-3xl opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[66px] font-[gabriola] text-purple-800 mb-4">
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

                  <div className="absolute top-4 left-4">
                    <span
                      className={`${post.badgeColor} text-white text-xs font-medium px-3 py-1.5 rounded-full`}
                    >
                      {post.badge}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Title */}
                  <h3 className="text-[26px] font-[gabriola] text-gray-900 leading-tight group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed">
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
                      <span className="text-sm font-medium text-gray-700">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>

                  {/* Read More Link */}
                  <button className="flex items-center gap-2 text-purple-700 font-medium text-sm group-hover:gap-3 transition-all">
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
            <h1 className="text-5xl font-[gabriola] md:text-6xl lg:text-7xl  text-purple-800 mb-6 leading-tight">
              Experience Sarees That Tell a Story
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-lg md:text-xl mb-10 font-light">
              Discover handcrafted elegance designed for today's woman.
            </p>

            {/* WhatsApp Button */}
            <button className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <MessageCircle className="w-6 h-6" />
              Enquire on WhatsApp
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Landing;
