"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function Aboutus() {
    return (
        <>
        <section
            className="
        relative w-full
        h-[85vh] md:h-screen
        flex items-center
        bg-cover
        bg-[position:95%_center] 
        bg-no-repeat
      "
            style={{
                backgroundImage: "url('/aboutUs/AboutUs.png')",
            }}
        >
            {/* Overlay */}
            <div className="absolute  bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
                <div className="max-w-2xl text-white">

                    <p className="uppercase tracking-widest text-sm md:text-lg mb-4">
                        WE ARE HERE FOR
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
                        GROW <br /> EVERYDAY
                    </h1>

                    <button className="mt-8 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition">
                        Learn More
                        <ArrowUpRight size={18} />
                    </button>

                </div>
            </div>
        </section>
        
        </>
    );
}

export default Aboutus;