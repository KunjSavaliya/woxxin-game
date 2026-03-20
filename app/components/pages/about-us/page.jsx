"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const games = [
    "/S1.png",
    "/S2.png",
    "/S3.png",
    "/S4.png",
    "/S5.png",
    "/S6.png",
];

function Aboutus() {

    useEffect(() => {
        document.title = "About Us - Woxxin Games";
    }, []);

    return (
        <>
            <section className="w-full  text-white px-4 md:px-12 md:py-12 md:py-20">

                <div className="max-w-7xl mx-auto">

                    {/* 🔹 TOP CONTENT (TEXT ONLY) */}
                    <div className="text-center md:text-left">

                        <h1 className="font-extrabold leading-[1.1] tracking-wide">
                            <span className="block text-[46px] sm:text-[50px] md:text-[70px] lg:text-[85px] bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                EXPLORE ICONIC GAMES
                            </span>
                        </h1>

                        <p className="mt-4 text-gray-400 text-xl md:text-2xl">
                            That Captivate The World
                        </p>

                    </div>

                    {/* 🔹 BOTTOM CONTENT (BUTTON + IMAGE) */}
                    <div className="mt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-5">

                        <div className="flex items-center relative">

                            {/* OWL */}
                            <div className="relative z-10 -mr-8">
                                <Image
                                    src="/woolOwl.png"
                                    alt="owl"
                                    width={57}
                                    height={58}
                                    className=' md:h-[70px] md:w-[70px]'
                                />
                            </div>

                            {/* BUTTON */}
                            <div className="relative bg-[#EDEDF5] pl-10 pr-10 py-2 rounded-full">

                                <span className="text-[#8B8CF8] text-sm md:text-md font-light whitespace-nowrap">
                                    Start Your Journey
                                </span>

                                {/* 🔥 LUCIDE ARROW */}
                                <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-[#AAA7FE] text-white shadow-md">

                                    <ArrowUpRight size={16} strokeWidth={2.5} />

                                </div>

                            </div>

                        </div>
                        {/* IMAGE */}
                        <div className="w-full md:w-auto flex justify-center md:justify-end md:-mt-15">
                            <Image
                                src="/twoCartton.png"
                                alt="characters"
                                width={600}
                                height={600}
                                priority
                                className="w-[280px]  md:w-[500px] object-contain z-1"
                            />
                        </div>

                    </div>

                </div>
            </section>
            <section className="relative  overflow-hidden md:-mt-44 xl:-mt-46">
                <div className="">
                    <div className="relative w-full">
                        <Image
                            src="/dino.png"   // 👈 your full design image
                            alt="vision mission"
                            width={1400}
                            height={600}
                            priority
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
            <section className="w-full text-white px-4 md:px-10 py-12 md:py-20">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* 🔹 LEFT CONTENT */}
                    <div className="w-full md:w-1/2 text-center md:text-left">

                        {/* HEADING */}
                        <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-extrabold tracking-wide bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                            GAME PUBLISH
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-4 text-gray-400 text-md sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
                            At Woxxin Games, we combine years of game distribution expertise with a powerful data-driven approach to help developers grow. As a trusted global partner, we optimize performance, boost visibility, and maximize your game’s revenue.
                        </p>

                        {/* SUB TEXT */}
                        <p className="mt-4 text-[#AFAEFF] text-md sm:text-xl font-medium">
                            Let’s grow together and turn great games into global successes. 🚀
                        </p>

                        {/* STATS */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-10 sm:gap-16">

                            {/* 100+ */}
                            <div className="text-center md:text-left">
                                <h3 className="text-[48px] md:text-[56px] font-bold">100+</h3>
                                <div className="w-16 h-[2px] bg-gray-600 my-2 mx-auto md:mx-0"></div>
                                <p className="text-gray-400 text-lg tracking-wide">GAMES LAUNCHED</p>
                            </div>

                            {/* 1M+ */}
                            <div className="text-center md:text-left">
                                <h3 className="text-[48px] md:text-[56px] font-bold">1M+</h3>
                                <div className="w-16 h-[2px] bg-gray-600 my-2 mx-auto md:mx-0"></div>
                                <p className="text-gray-400 text-lg tracking-wide">DOWNLOADS</p>
                            </div>

                        </div>
                    </div>

                    {/* 🔹 RIGHT IMAGE */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <Image
                            src="/wool3D.png" // 👈 your image
                            alt="game publish"
                            width={600}
                            height={600}
                            className="w-[280px]  md:w-[500px] object-contain"
                        />
                    </div>

                </div>

            </section>
            <section className="w-full  text-white px-4 md:px-10 py-12 md:py-20">

                <div className="max-w-7xl mx-auto">

                    {/* HEADING */}
                    <div className="text-center mb-10">
                        <h2 className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                            ONLY LEGENDS RULE THE LEADERBOARD
                        </h2>
                        <p className="text-gray-400  text-md md:text-xl mt-3 max-w-5xl mx-auto">
                            Compete with players worldwide and climb to the top. Earn your spot, beat high scores, and become a champion.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto">

                        <div className="relative w-full">

                            <Image
                                src="/table.png"   // 👈 your image
                                alt="leaderboard table"
                                width={1400}
                                height={700}
                                priority
                                className="w-full h-auto object-contain"
                            />

                        </div>

                    </div>
                </div>
            </section>
            <section className="relative w-full py-16 md:py-24 overflow-hidden ">

                {/* ✅ BACKGROUND IMAGE */}
                <Image
                    src="/BGSlide.png"   // 👈 your uploaded bg image
                    alt="background"
                    fill
                    priority
                    className="object-fill -z-10"
                />

                {/* CONTENT */}
                <div className="max-w-7xl mx-auto pt-16 pb-16">

                    {/* HEADING */}
                    <h2 className="text-center text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent mt-10 mb-10">
                        UNCOVER THE HOTTEST NEW GAMES
                    </h2>

                    {/* SLIDER */}
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                            el: ".custom-pagination",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            380: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {games.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="rounded-[25px] overflow-hidden hover:scale-105 transition duration-300">
                                    <Image
                                        src={img}
                                        alt="game"
                                        width={400}
                                        height={400}
                                        className="w-full h-[320px]  md:h-[340px] object-fill p-5 cursor-pointer"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* 🔹 CUSTOM DOTS */}
                    <div className="custom-pagination flex justify-center mt-6 gap-5"></div>

                </div>
            </section>

        </>
    );
}

export default Aboutus;