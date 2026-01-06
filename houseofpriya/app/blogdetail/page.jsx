"use client";

import React from "react";
import Footer from "../Components/Footer";
import { ArrowRight } from 'lucide-react';

import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const Landing = () => {
  const popularPosts = [
    {
      id: 1,
      image:
        "../images/img (8).png",
      badge: "Saree Styling",
      badgeColor: "bg-purple-600",
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
      image:
        "../images/img (9).png",
      badge: "Heritage",
      badgeColor: "bg-purple-600",
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
      image:
        "../images/img (10).png",
      badge: "Festive Wear",
      badgeColor: "bg-purple-600",
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
      <section>
        <div className="bg-white">
          {/* Back Button */}
          <div className="max-w-6xl mx-auto px-6 pt-8">
            <button className="flex items-center gap-2 text-purple-700 hover:text-purple-800 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Stories
            </button>
          </div>

          {/* Article Container */}
          <article className="max-w-6xl mx-auto px-6 py-12">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-purple-800 mb-4 leading-tight">
                Festive Elegance: Choosing Your Perfect Wedding Saree
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                From vibrant ceremonies to grand celebrations, find the saree
                that captures your unique style.
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Kavya Reddy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 5, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="rounded-4xl overflow-hidden mb-12">
              <img
                src="../images/placeholder.png"
                alt="Golden sarees with intricate patterns"
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
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
                <p className="text-gray-700 leading-relaxed">
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
              <div className="my-12 py-8 px-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 rounded-r-lg">
                <blockquote className="text-2xl font-serif text-purple-900 italic leading-relaxed">
                  "Friends worry that computers will get too smart and take over
                  the world, but the real problem is that they're too stupid and
                  they've already taken over the world."
                </blockquote>
                <cite className="block mt-4 text-gray-600 not-italic text-sm">
                  — Pedro Domingos
                </cite>
              </div>

              {/* Paragraph with hyperlink styling */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  When considering your wedding saree, it's essential to think
                  about the overall aesthetic of your celebration. A grand
                  palace wedding might call for the regal magnificence of a{" "}
                  <a
                    href="#"
                    className="text-purple-700 underline hover:text-purple-800"
                  >
                    heavy Kanchipuram silk with gold zari work
                  </a>
                  , while an intimate garden ceremony could be beautifully
                  complemented by the soft drape of a{" "}
                  <a
                    href="#"
                    className="text-purple-700 underline hover:text-purple-800"
                  >
                    lightweight georgette or chiffon saree with delicate
                    embroidery
                  </a>
                  . The season also plays a crucial role—summer weddings might
                  benefit from breathable fabrics like cotton silk, while winter
                  celebrations allow for more elaborate, heavier textiles.
                </p>
              </div>

              {/* Image in Content */}
              <div className="my-12 rounded-2xl overflow-hidden">
                <img
                  src="../images/Image (1).png"
                  alt="Elegant saree details"
                  className="w-full h-80 object-cover"
                />
                <p className="text-sm text-gray-500 text-center mt-3 italic">
                  Intricate gold threadwork on traditional silk saree
                </p>
              </div>

              {/* More Content */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-purple-900 mb-4 mt-8">
                  Understanding Traditional Weaves
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When it comes to the grandeur of a wedding, few can match the
                  elegance of a pure silk saree—from majestic Kanjivarams that
                  drip with tradition, to lustrous Banarasis that speak of royal
                  heritage. The artistry woven into these textiles isn't merely
                  decorative; each motif carries meaning, and every color holds
                  significance. Understanding these traditional weaves can help
                  you make a choice that resonates both aesthetically and
                  emotionally.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kanchipuram sarees from Tamil Nadu are renowned for their
                  durability and rich texture, with pure mulberry silk threads
                  creating a fabric that ages gracefully. The contrasting
                  borders and intricate pallus featuring temple motifs,
                  peacocks, and florals make each Kanchipuram piece a work of
                  art. Similarly, Banarasi sarees from Varanasi showcase
                  Mughal-inspired designs with elaborate brocade work, perfect
                  for brides seeking opulent elegance.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-purple-900 mb-4 mt-8">
                  Modern Interpretations
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Today's brides are increasingly blending tradition with
                  contemporary sensibilities. Modern designers are reimagining
                  classic sarees with innovative draping styles, unconventional
                  color palettes, and fusion elements that honor heritage while
                  embracing individual expression. From pre-stitched sarees that
                  offer convenience without compromising on elegance to sarees
                  with modern blouse designs featuring off-shoulder cuts or cape
                  sleeves, the possibilities are endless.
                </p>
              </div>

              {/* Closing */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  Ultimately, your wedding saree should be a reflection of who
                  you are—a perfect blend of tradition, personal style, and the
                  joy of celebration. Take your time exploring different
                  options, try on various styles, and most importantly, trust
                  your instincts. When you find the right saree, you'll know
                  it's the one that will make you feel radiant, confident, and
                  truly yourself on your special day.
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Wedding Sarees
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Bridal Fashion
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Traditional Wear
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Silk Sarees
                </span>
              </div>
            </div>

            {/* Author Bio */}
          </article>
        </div>
      </section>
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-5xl font-[gabriola] text-purple-800 text-center mb-16">
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

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`${post.badgeColor} text-white text-xs font-medium px-4 py-1.5 rounded-full`}
                    >
                      {post.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug group-hover:text-purple-700 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {post.author.name}
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

      <Footer />
    </>
  );
};

export default Landing;
