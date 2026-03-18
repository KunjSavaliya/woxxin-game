"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TicTacToe from "./tic-tac-toe";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import SnakeGame from "./snakeGame";

function Aboutus() {
    const games = [
        {
            title: "Arrow Puzzle",
            img: "/aboutUs/arrow.png",
            playstore: "https://play.google.com",
            appstore: "https://apple.com/app-store"
        },
        {
            title: "Arrow Block Puzzle",
            img: "/aboutUs/block.png",
            playstore: "https://play.google.com",
            appstore: "https://apple.com/app-store"
        },
        {
            title: "Screw Puzzle",
            img: "/aboutUs/screw.png",
            playstore: "https://play.google.com",
            appstore: "https://apple.com/app-store"
        },
        {
            title: "Snake Arrow Puzzle",
            img: "/aboutUs/snake.png",
            playstore: "https://play.google.com",
            appstore: "https://apple.com/app-store"
        },
        {
            title: "Wool 3D Puzzle",
            img: "/aboutUs/wool.png",
            playstore: "https://play.google.com",
            appstore: "https://apple.com/app-store"
        },
        {
            title: "Arrow Puzzle",
            img: "/aboutUs/arrow.png",
            playstore: "https://play.google.com",
            appstore: "https://apple.com/app-store"
        },
    ];
    return (
        <>
            <div className="relative w-full">

                <Image
                    src="/aboutUs/AboutUs.png"
                    alt="Background"
                    width={1920}
                    height={900}
                    priority
                    className="w-full h-[400px] sm:h-[400px] md:h-auto object-fill "
                />

                <div className="absolute bottom-0 left-0 w-full h-[6px] 
  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div className="absolute inset-0 flex items-center p-6 mt-24">
                    <div className="max-w-[85rem] mx-auto w-full ">

                        <div className="max-w-4xl text-white">

                            <p className="uppercase tracking-widest text-md md:text-2xl mb-4">
                                We Build Worlds. You Live the Adventure
                            </p>

                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-7xl font-extrabold leading-tight">
                                Innovative Games, Endless Fun, Global Community
                            </h1>

                            <button className="mt-8 flex items-center gap-2 bg-[#00E5FF] hover:scale-105 cursor-pointer p-3 rounded-lg text-md md:text-xl font-light
                             transition">
                                Start Your Epic Journey
                                <ArrowUpRight size={18} />
                            </button>

                        </div>

                    </div>
                </div>

            </div>


            <section className="w-full bg-[#6510d5] text-white py-16 lg:py-24 ">
                <div className="max-w-[90rem] mx-auto px-6 lg:px-12 ">

                    {/* Grid Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-bold mb-4">
                                Game Publish
                            </h2>

                            <p className="text-[#00E5FF] font-semibold tracking-wide mb-6 text-2xl">
                                WIN-WIN COOPERATION
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-10 max-w-xl text-xl">
                                Woxxin Games, boasting years of expertise in the distribution sector
                                and a professional data analysis system, stands as a reliable
                                partner to numerous major advertising networks worldwide. We
                                have consistently supported developers in optimizing their
                                games and enhancing profitability.
                            </p>

                            {/* Stats */}
                            <div className="flex items-center gap-10 flex-wrap">

                                <div>
                                    <h3 className="text-4xl lg:text-7xl font-bold text-[#00E5FF]">
                                        100+
                                    </h3>
                                    <p className="text-gray-300 mt-2 text-xl">Games launched</p>
                                </div>

                                <div className="hidden sm:block w-[1px] h-12 bg-gray-500"></div>

                                <div>
                                    <h3 className="text-4xl lg:text-7xl font-bold text-[#00E5FF]">
                                        1M+
                                    </h3>
                                    <p className="text-gray-300 mt-2 text-xl">Downloads</p>
                                </div>

                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <Image
                                src="/aboutUs/publicgame.jpg"
                                alt="Game Publish"
                                width={600}
                                height={450}
                                className="w-full max-w-md lg:max-w-lg object-contain"
                            />
                        </div>

                    </div>
                </div>
                <div className="max-w-[90rem] mx-auto px-6 lg:px-12 mt-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="max-w-xl mx-auto gaming-border">

                                <div className="gaming-border-inner">
                                    <Image
                                        src="/aboutUs/mission.jpg"
                                        alt="Fansipan"
                                        width={800}
                                        height={600}
                                    />
                                </div>

                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div>

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-[2px] bg-[#00E5FF]"></div>
                                <p className="tracking-[6px] text-[#00E5FF] text-4xl">
                                    VISION - MISSION
                                </p>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-2xl font-lighter tracking-[3px] mb-4" >
                                    VISION 555
                                </h3>

                                <p className="text-gray-300 leading-relaxed text-xl">
                                    To become a leading company in the gaming industry,
                                    bringing india's game industry closer to the global stage.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-lighter tracking-[3px] mb-4">
                                    MISSION
                                </h3>

                                <p className="text-gray-300 leading-relaxed text-xl">
                                    Woxxin's mission is to pursue high-quality in-app gaming
                                    products, connecting players globally through gaming.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section >
            <section className="relative w-full py-20">

                {/* Background Image */}
                <Image
                    src="/aboutUs/bg3.jpg"
                    alt="office"
                    fill
                    className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#0b1d33]/80"></div>
                <div className="absolute bottom-0 left-0 w-full h-[6px] 
bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

                    {/* Title */}
                    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#00E5FF] mb-16">
                        CORE VALUE
                    </h2>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

                        {/* Card 1 */}
                        <div className="w-[260px] sm:w-[280px] lg:w-[320px] p-10 flex items-center justify-center hover:scale-105 transition">
                            <Image
                                src="/aboutUs/innovation.png"
                                alt="Love Support"
                                width={320}
                                height={320}
                            />
                        </div>

                        {/* Card 2 */}
                        <div className="w-[260px] sm:w-[280px] lg:w-[320px] p-10 flex items-center justify-center hover:scale-105 transition">
                            <Image
                                src="/aboutUs/mobility.png"
                                alt="Different"
                                width={320}
                                height={320}
                            />
                        </div>

                        {/* Card 3 */}
                        <div className="w-[260px] sm:w-[280px] lg:w-[320px] p-10 flex items-center justify-center hover:scale-105 transition">
                            <Image
                                src="/aboutUs/openess.png"
                                alt="Less is More"
                                width={320}
                                height={320}
                            />
                        </div>

                    </div>

                </div>

            </section>
            <div className="bg-[#6510d5] p-20">
                <h2 className=" text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-[#00E5FF]">
                    Let's Play Some Games!
                </h2>

            </div>
            {/* <div className="">

                <div className="flex flex-col lg:flex-row  ">
                    <TicTacToe />
                    <div className="hidden md:block w-[2px] bg-white/20 "></div>
                    <SnakeGame />
                </div>

            </div> */}
            <section className="w-full bg-gray-200 py-12">
                <div className="max-w-[80rem] mx-auto px-4">

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-7xl font-semibold text-center mb-10 text-[#00E5FF]  ">
                        Woxxin Games
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 ">
                        {games.map((game, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                            >
                                {/* IMAGE */}
                                <div className="relative w-[320px] h-[260px] md:h-[280px] lg:h-[320px] overflow-hidden">

                                    {/* IMAGE */}
                                    <img
                                        src={game.img}
                                        alt={game.title}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:-translate-y-2"
                                    />

                                    {/* 🔥 OVERLAY */}
                                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">

                                        {/* Play Store */}
                                        <a
                                            href={game.playstore}
                                            target="_blank"
                                            className="flex items-center gap-2 bg-white text-black p-4 rounded-md hover:scale-105 transition"
                                        >
                                            <FaGooglePlay className="text-[#3BCCFF] text-xl" />
                                            <span className="text-sm font-medium">Play Store</span>
                                        </a>

                                        {/* App Store */}
                                        <a
                                            href={game.appstore}
                                            target="_blank"
                                            className="flex items-center gap-2 bg-white text-black p-4 rounded-md hover:scale-105 transition"
                                        >
                                            <FaApple className="text-black text-xl" />
                                            <span className="text-sm font-medium">App Store</span>
                                        </a>
                                    </div>
                                </div>

                                {/* TITLE */}
                                <div className="p-3 flex items-center justify-center bg-[#6510d5]  transition">
                                    <p className="text-xl text-white">{game.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* BUTTON */}
                    {/* <div className="flex justify-center mt-10">
                        <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                            Show more
                        </button>
                    </div> */}

                </div>
            </section>
            <div className="bg-[#6510d5] p-16 mt-[-1px]">
                <div className="max-w-[90rem] mx-auto p-10  border-y border-white/30 ">

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={40}
                        slidesPerView={6}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                            1280: { slidesPerView: 6 }
                        }}
                    >

                        <SwiperSlide>
                            <Image src="/aboutUs/ggads.png" alt="Google Ads" width={140} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUs/ggadmob.png" alt="AdMob" width={120} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUs/ggads.png" alt="Google Ads" width={140} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUs/tapjoy.png" alt="Tapjoy" width={140} height={40} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/aboutUs/unity.png" alt="Unity" width={120} height={40} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/aboutUs/tiktok.png" alt="TikTok" width={120} height={40} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/aboutUs/tiktok.png" alt="TikTok" width={120} height={40} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Aboutus;