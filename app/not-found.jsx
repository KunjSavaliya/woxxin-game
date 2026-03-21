"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function Page404() {
  useEffect(() => {
    document.title = "Not Found - Woxxin Solution";
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden  flex items-center justify-center">

      {/* Image */}
      <img
        src="2x.png"
        alt="404 Not Found"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* Button */}
      <div className="absolute bottom-8 w-full flex justify-center ">
        <Link href="/components/pages/about-us" className="flex justify-center">
          <button
            className="
      group relative flex items-center gap-3
      px-6 py-3
      text-white font-semibold
      rounded-xl
      border border-[#7b61ff]
      bg-[#110F27]
      hover:bg-[#7b61ff]
      transition-all duration-300
      overflow-hidden cursor-pointer
    "
          >
            {/* TEXT */}
            <span className="relative z-10">
              Go to Home Page
            </span>

            {/* ICON */}
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

            {/* GLOW EFFECT */}
            <span className="
      absolute inset-0
      bg-[#5961F9]/20
      opacity-0 group-hover:opacity-100
      blur-xl
      transition duration-300
    "></span>
          </button>
        </Link>
      </div >

    </div >
  );
}

export default Page404;