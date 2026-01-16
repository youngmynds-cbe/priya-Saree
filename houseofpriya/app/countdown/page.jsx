// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// export default function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 1,
//     hours: 0,
//     minutes: 0,
//     seconds: 1,
//   });

//   useEffect(() => {
//     const targetDate = new Date();
//     targetDate.setDate(targetDate.getDate() + 1);
//     targetDate.setHours(0, 0, 1, 0);

//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetDate - now;

//       if (distance < 0) {
//         clearInterval(timer);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         return;
//       }

//       setTimeLeft({
//         days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//         hours: Math.floor(
//           (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         ),
//         minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//         seconds: Math.floor((distance % (1000 * 60)) / 1000),
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const formatNumber = (num) => {
//     return num.toString().padStart(2, "0");
//   };

//   const TimeCard = ({ value, label }) => (
//     <div className="flex flex-col items-center">
//       <div className="relative w-54 h-48 mb-4">
//         <div className="absolute inset-0 bg-[#6B46C1] rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
//           <Image
//             src="/images/Group 9.png"
//             alt="Decorative Frame"
//             fill
//             className="object-contain"
//           />

//           <div className="absolute text-white text-[128px] font-bold z-10">
//             {value}
//           </div>
//         </div>
//       </div>

//       <div className="text-gray-700 text-xl font-semibold tracking-wider">
//         {label}
//       </div>
//     </div>
//   );

//   const Kolam = ({ className }) => (
//     <div className={`${className} opacity-10`}>
//       <svg
//         width="80"
//         height="120"
//         viewBox="0 0 80 120"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle cx="20" cy="20" r="3" fill="currentColor" />
//         <circle cx="40" cy="20" r="3" fill="currentColor" />
//         <circle cx="60" cy="20" r="3" fill="currentColor" />
//         <circle cx="30" cy="40" r="3" fill="currentColor" />
//         <circle cx="50" cy="40" r="3" fill="currentColor" />
//         <circle cx="20" cy="60" r="3" fill="currentColor" />
//         <circle cx="40" cy="60" r="3" fill="currentColor" />
//         <circle cx="60" cy="60" r="3" fill="currentColor" />
//         <circle cx="30" cy="80" r="3" fill="currentColor" />
//         <circle cx="50" cy="80" r="3" fill="currentColor" />
//         <circle cx="40" cy="100" r="3" fill="currentColor" />
//         <path
//           d="M20 20 L30 40 L20 60 L30 80 L40 100"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           fill="none"
//         />
//         <path
//           d="M40 20 L40 60 L40 100"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           fill="none"
//         />
//         <path
//           d="M60 20 L50 40 L60 60 L50 80 L40 100"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           fill="none"
//         />
//       </svg>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 relative overflow-hidden">
//       <Kolam className="absolute top-20 left-10 text-purple-300" />
//       <Kolam className="absolute top-20 right-10 text-purple-300" />

//       <div className="max-w-6xl w-full">
//         <div className="text-center mb-16">
//           <h1 className="text-[77px]  font-gabriola font-serif text-[#6B46C1] mb-6">
//             A Timeless Experience Begins Soon
//           </h1>
//           <p className="text-gray-600 text-[18px] mb-2 font-readex ">
//             Handcrafted elegance is on its way.
//           </p>
//           <p className="text-gray-600 text-[18px] font-readex ">
//             Our doors open soon in RS Puram — where tradition meets modern
//             grace.
//           </p>
//         </div>

//         <div className="flex justify-center items-center gap-18">
//           <TimeCard value={formatNumber(timeLeft.days)} label="DAYS" />
//           <TimeCard value={formatNumber(timeLeft.hours)} label="HOURS" />
//           <TimeCard value={formatNumber(timeLeft.minutes)} label="MINUTES" />
//           <TimeCard value={formatNumber(timeLeft.seconds)} label="SECONDS" />
//         </div>
//       </div>
//       <img
//         src="/images/image 44.png"
//         className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
//         alt=""
//          aria-hidden="true"
//       />

//       <img
//         src="/images/image 45.png"
//         className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 hidden lg:block"
//         alt=""
//          aria-hidden="true"
//       />
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 0,
    minutes: 0,
    seconds: 1,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 1);
    targetDate.setHours(0, 0, 1, 0);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, "0");

  const TimeCard = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div
        className="relative 
          w-[120px] h-[120px] 
          sm:w-[150px] sm:h-[150px] 
          lg:w-54 lg:h-48 
          mb-4"
      >
        <div className="absolute inset-0 bg-[#6B46C1] rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
          <Image
            src="/images/Group 9.png"
            alt="Decorative Frame"
            fill
            className="object-contain"
          />

          <div
            className="absolute text-white font-bold z-10
              text-[48px] sm:text-[72px] lg:text-[128px]"
          >
            {value}
          </div>
        </div>
      </div>

      <div className="text-gray-700 text-sm sm:text-base lg:text-xl font-semibold tracking-wider">
        {label}
      </div>
    </div>
  );

  const Kolam = ({ className }) => (
    <div className={`${className} opacity-10 hidden md:block`}>
      <svg
        width="80"
        height="120"
        viewBox="0 0 80 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="40" cy="20" r="3" fill="currentColor" />
        <circle cx="60" cy="20" r="3" fill="currentColor" />
        <circle cx="30" cy="40" r="3" fill="currentColor" />
        <circle cx="50" cy="40" r="3" fill="currentColor" />
        <circle cx="20" cy="60" r="3" fill="currentColor" />
        <circle cx="40" cy="60" r="3" fill="currentColor" />
        <circle cx="60" cy="60" r="3" fill="currentColor" />
        <circle cx="30" cy="80" r="3" fill="currentColor" />
        <circle cx="50" cy="80" r="3" fill="currentColor" />
        <circle cx="40" cy="100" r="3" fill="currentColor" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 sm:p-8 relative overflow-hidden">
      <Kolam className="absolute top-20 left-10 text-purple-300" />
      <Kolam className="absolute top-20 right-10 text-purple-300" />

      <div className="max-w-6xl w-full px-4 sm:px-6">
        <div className="text-center mb-10 lg:mb-16">
          <h1
            className="text-[36px] sm:text-[52px] lg:text-[77px]
              font-gabriola font-serif text-[#6B46C1] mb-6 leading-tight"
          >
            A Timeless Experience Begins Soon
          </h1>

          <p className="text-gray-600 text-[14px] sm:text-[16px] lg:text-[18px] mb-2 font-readex">
            Handcrafted elegance is on its way.
          </p>
          <p className="text-gray-600 text-[14px] sm:text-[16px] lg:text-[18px] font-readex">
            Our doors open soon in RS Puram — where tradition meets modern grace.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-18">
          <TimeCard value={formatNumber(timeLeft.days)} label="DAYS" />
          <TimeCard value={formatNumber(timeLeft.hours)} label="HOURS" />
          <TimeCard value={formatNumber(timeLeft.minutes)} label="MINUTES" />
          <TimeCard value={formatNumber(timeLeft.seconds)} label="SECONDS" />
        </div>
      </div>

      <img
        src="/images/image 44.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:block"
        alt=""
        aria-hidden="true"
      />

      <img
        src="/images/image 45.png"
        className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
        alt=""
        aria-hidden="true"
      />
    </div>
  );
}
