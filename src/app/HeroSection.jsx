"use client";

import React, { useEffect, useRef, useState } from "react";
import IDCardScene from "./IDCardScene";
import gsap from "gsap";

function HeroSection() {
   const titleRef = useRef(null);
   const subtitleRef = useRef(null);
   const buttonRef = useRef(null);

   const [name, setName] = useState("");
   const [displayName, setDisplayName] = useState("Guest");

   useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1 })
         .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
         .from(buttonRef.current, { y: 20, opacity: 0, scale: 0.9, duration: 0.8 }, "-=0.5");
   }, []);

   const handleClick = () => {
      if (name.trim() !== "") setDisplayName(name);
   };

   return (
      <section className="relative w-full h-screen overflow-hidden bg-black">
         {/* 3D Canvas */}
         <div className="w-full h-full relative z-10">
            <IDCardScene name={displayName} />
         </div>

         {/* Left-aligned text */}
         <div
            className="
               absolute top-1/2 left-10 
               -translate-y-1/2
               text-left
               z-20 
               space-y-8
            "
         >
            {/* Bigger Title */}
            <h1
               ref={titleRef}
               className="
                  text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 
                  font-extrabold leading-tight
                  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
                  bg-clip-text text-transparent 
               "
            >
               Registration <br /> Open Now
            </h1>

            {/* Bigger Subtitle */}
            <p ref={subtitleRef} className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-xl">
               Join today and secure your spot in our exciting community!
            </p>

            {/* Input + Button (fixed alignment) */}
            <div className="flex flex-col sm:flex-row sm:items-center align-middle gap-4 mt-4 w-full max-w-lg">
               <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  maxLength={8}
                  onChange={(e) => setName(e.target.value.slice(0, 9))}
                  className="
         px-5 py-4 
         rounded-xl border border-white/30 
         bg-white/10 backdrop-blur-md 
         text-white placeholder-gray-300 
         focus:outline-none focus:ring-2 
         focus:ring-purple-500 
         w-full
         text-lg shadow-lg
      "
               />

               <button
                  ref={buttonRef}
                  onClick={handleClick}
                  className="
         rounded-xl bg-purple-600 hover:bg-purple-700 
         text-white font-bold 
         px-8 py-4 
         text-lg 
         shadow-xl 
         -mt-10
         transition-transform transform hover:scale-105
         w-full sm:w-auto
         sm:ml-2
      "
               >
                  Done
               </button>
            </div>
         </div>
      </section>
   );
}

export default HeroSection;
