"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "animate.css";
import Link from "next/link";

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

    const fadeUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
    };
    return (
        <>
            <section className="w-full  text-white px-4 md:px-12 md:py-12 md:py-20">

                <div className="max-w-7xl mx-auto">

                    {/* 🔹 TOP CONTENT (TEXT ONLY) */}
                    <div className="text-center md:text-left">
                        <motion.div {...fadeUp}>

                            <h1 className="font-extrabold leading-[1.1] tracking-wide mt-10 md:mt-5">
                                <span className="block text-[36px] sm:text-[50px] md:text-[70px] lg:text-[85px] bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                    EXPLORE ICONIC GAMES
                                </span>
                            </h1>
                        </motion.div>
                        <motion.div {...fadeUp}>

                            <p className="mt-4 text-gray-400 text-xl md:text-2xl">
                                That Captivate The World
                            </p>
                        </motion.div>
                    </div>

                    {/* 🔹 BOTTOM CONTENT (BUTTON + IMAGE) */}
                    <div className="mt-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-5">
                        <motion.div {...fadeUp}>

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

                                <Link href="/components/pages/games"> {/* 👈 change route */}
                                    <div className="relative bg-[#EDEDF5] pl-10 pr-10 py-2 rounded-full cursor-pointer">

                                        <span className="text-[#8B8CF8] text-sm md:text-md font-semibold whitespace-nowrap">
                                            Start Your Journey
                                        </span>

                                        <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full bg-[#AAA7FE] text-white shadow-md">
                                            <ArrowUpRight size={16} strokeWidth={2.5} />
                                        </div>

                                    </div>
                                </Link>

                            </div>
                        </motion.div>
                        <motion.div {...fadeUp}>

                            <div className="relative z-1">
                                <div className="w-full md:w-auto flex justify-center md:justify-end md:-mt-15">
                                    <Image
                                        src="/twoCartton.png"
                                        alt="characters"
                                        width={600}
                                        height={600}
                                        priority
                                        className="w-[320px] md:w-[500px] lg:w-[600px] xl:w-[650px] 2xl:w-[700px] object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
            {/* ///code1 */}
            <motion.div {...fadeUp}>

                <section className="hidden md:block relative overflow-hidden md:-mt-[160px] lg:-mt-[180px] xl:-mt-[190px] 2xl:-mt-[225px]">
                    <div className="relative w-full">
                        <Image
                            src="/dino.png"
                            alt="vision mission"
                            width={1400}
                            height={600}
                            priority
                            className="w-full h-full object-contain"
                        />
                    </div>
                </section>
            </motion.div>
            {/* ///code2 */}

            <section className="md:hidden relative w-full py-16 overflow-hidden">

                {/* BACKGROUND IMAGE */}

                <Image
                    src="/BGSlide.png"
                    alt="background"
                    fill
                    priority
                    className="object-fill -z-10"
                />

                <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 mt-10 mb-10 px-4">

                    <motion.div {...fadeUp}>

                        <div className="flex justify-center">
                            <Image
                                src="/dino1.png"
                                alt="character"
                                width={600}
                                height={600}
                                className="w-[280px]  object-contain mt-5"
                                priority
                            />
                        </div>
                    </motion.div>
                    {/* CONTENT */}
                    <div className="w-full space-y-8 text-center mb-5">

                        {/* OUR VISIONS */}
                        <motion.div {...fadeUp}>

                            <div>
                                <h2 className="text-white text-xl font-bold tracking-wide">
                                    OUR{" "}
                                    <span className="bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                        VISIONS
                                    </span>
                                </h2>
                                <p className="mt-3 text-gray-400 text-md leading-relaxed">
                                    To become a globally recognized game publishing studio known for innovation, quality, and player-focused gaming experiences.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div {...fadeUp}>

                            <div className="w-full h-[1px] bg-gray-700"></div>
                        </motion.div>
                        {/* OUR MISSION */}
                        <motion.div {...fadeUp}>

                            <div>
                                <h2 className="text-white text-xl font-bold tracking-wide">
                                    OUR{" "}
                                    <span className="bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                        MISSION
                                    </span>
                                </h2>
                                <p className="mt-3 text-gray-400 text-md leading-relaxed">
                                    To create fun, accessible, and high-performance games that bring joy to players while continuously pushing creative and technological boundaries in the gaming industry.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            <section className="w-full text-white px-4 md:px-10 py-12 md:py-20">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* 🔹 LEFT CONTENT */}
                    <div className="w-full md:w-1/2 text-center md:text-left">

                        <motion.div {...fadeUp}>

                            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-extrabold tracking-wide bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                GAME PUBLISHING
                            </h2>
                        </motion.div>
                        <motion.div {...fadeUp}>

                            <p className="mt-4 text-gray-400 text-md sm:text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
                                At Woxxin Games, we combine game distribution expertise with a powerful data-driven approach to help developers grow. As a trusted global partner, we optimize performance, boost visibility, and maximize your game’s revenue potential.
                            </p>
                        </motion.div>

                        <motion.div {...fadeUp}>

                            <p className="mt-4 text-[#AFAEFF] text-md sm:text-xl font-medium">
                                Let’s grow together and turn great games into global successes. 🚀
                            </p>
                        </motion.div>


                        <div className="mt-8 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-10 sm:gap-16">
                            <motion.div {...fadeUp}>

                                <div className="text-center md:text-left">
                                    <h3 className="text-[48px] md:text-[56px] font-bold">
                                        <CountUp end={100} duration={10} suffix="+" />

                                    </h3>
                                    <div className="w-16 h-[2px] bg-gray-600 my-2 mx-auto md:mx-0"></div>
                                    <p className="text-gray-400 text-lg tracking-wide">GAMES LAUNCHED</p>
                                </div>
                            </motion.div>
                            <motion.div {...fadeUp}>

                                <div className="text-center md:text-left">
                                    <h3 className="text-[48px] md:text-[56px] font-bold">
                                        <CountUp end={10} duration={10} suffix="M+" />
                                    </h3>
                                    <div className="w-16 h-[2px] bg-gray-600 my-2 mx-auto md:mx-0"></div>
                                    <p className="text-gray-400 text-lg tracking-wide">DOWNLOADS</p>
                                </div>
                            </motion.div>

                        </div>
                    </div>


                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <motion.div {...fadeUp}>

                            <Image
                                src="/wool3D.png" // 👈 your image
                                alt="game publish"
                                width={600}
                                height={600}
                                className="w-[280px]  md:w-[500px] object-contain"
                            />
                        </motion.div>
                    </div>


                </div>

            </section>
            <section className="w-full  text-white px-4 md:px-10 py-12 md:py-20">

                <div className="max-w-7xl mx-auto">

                    {/* HEADING */}
                    <div className="text-center mb-10">
                        <motion.div {...fadeUp}>

                            <h2 className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                ONLY LEGENDS RULE THE LEADERBOARD
                            </h2>
                        </motion.div>
                        <motion.div {...fadeUp}>

                            <p className="text-gray-400  text-md md:text-xl mt-3 max-w-5xl mx-auto">
                                Compete with players worldwide and climb to the top. Earn your spot, beat high scores, and become a champion.
                            </p>
                        </motion.div>
                    </div>
                    <div className="max-w-7xl mx-auto">

                        <div className="relative w-full">
                            <motion.div {...fadeUp}>

                                <Image
                                    src="/table.png"   // 👈 your image
                                    alt="leaderboard table"
                                    width={1400}
                                    height={700}
                                    priority
                                    className="w-full h-auto object-contain"
                                />
                            </motion.div>
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
                <div className="max-w-7xl mx-auto pt-16 pb-16 px-4 md:px-12 md:py-12 md:py-20">

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
                            490: { slidesPerView: 2 },
                            700: { slidesPerView: 3 },
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