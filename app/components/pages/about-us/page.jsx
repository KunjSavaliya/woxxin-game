"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Aboutus() {
    return (
        <>
            <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[850px] ">

                <Image
                    src="/aboutUs/AboutUs.png"
                    alt="Background"
                    fill
                    priority
                    className="object-fill"
                />
                <div className="absolute bottom-0 left-0 w-full h-[6px] 
bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">

                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full px-6 sm:px-10 lg:px-32">

                        <div className="max-w-2xl text-white">

                            <p className="uppercase tracking-widest text-sm md:text-lg mb-4">
                                WE ARE HERE FOR
                            </p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                                GROW <br /> EVERYDAY
                            </h1>

                            <button className="mt-8 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition">
                                Learn More
                                <ArrowUpRight size={18} />
                            </button>

                        </div>

                    </div>
                </div>

            </div>
            <section className="w-full bg-[#00103d] text-white py-16 lg:py-24 ">
                <div className="max-w-[90rem] mx-auto px-6 lg:px-12 ">

                    {/* Grid Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                                Game Publish
                            </h2>

                            <p className="text-orange-400 font-semibold tracking-wide mb-6">
                                WIN-WIN COOPERATION
                            </p>

                            <p className="text-gray-300 leading-relaxed mb-10 max-w-xl">
                                Woxxin Games, boasting years of expertise in the distribution sector
                                and a professional data analysis system, stands as a reliable
                                partner to numerous major advertising networks worldwide. We
                                have consistently supported developers in optimizing their
                                games and enhancing profitability.
                            </p>

                            {/* Stats */}
                            <div className="flex items-center gap-10 flex-wrap">

                                <div>
                                    <h3 className="text-4xl lg:text-5xl font-bold text-orange-400">
                                        100+
                                    </h3>
                                    <p className="text-gray-300 mt-2">Games launched</p>
                                </div>

                                <div className="hidden sm:block w-[1px] h-12 bg-gray-500"></div>

                                <div>
                                    <h3 className="text-4xl lg:text-5xl font-bold text-orange-400">
                                        1M+
                                    </h3>
                                    <p className="text-gray-300 mt-2">Downloads</p>
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
                                <div className="w-12 h-[2px] bg-orange-400"></div>
                                <p className="tracking-[6px] text-orange-400 text-xl">
                                    VISION - MISSION
                                </p>
                            </div>

                            <div className="mb-12">
                                <h3 className="text-xl font-lighter tracking-[3px] mb-4">
                                    VISION 555
                                </h3>

                                <p className="text-gray-300 leading-relaxed">
                                    To become a leading company in the gaming industry,
                                    bringing india's game industry closer to the global stage.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-lighter tracking-[3px] mb-4">
                                    MISSION
                                </h3>

                                <p className="text-gray-300 leading-relaxed">
                                    Woxxin's mission is to pursue high-quality in-app gaming
                                    products, connecting players globally through gaming.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="max-w-[90rem] mx-auto px-6 lg:px-12 mt-32">

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={40}
                        slidesPerView={6}
                        loop={true}
                        // navigation
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
                            <Image src="/aboutUS/ggadmob.png" alt="AdMob" width={120} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUS/ggads.png" alt="Google Ads" width={140} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUS/tapjoy.png" alt="Tapjoy" width={140} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUS/unity.png" alt="Unity" width={120} height={40} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src="/aboutUS/tiktok.png" alt="TikTok" width={120} height={40} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src="/aboutUS/tiktok.png" alt="TikTok" width={120} height={40} />
                        </SwiperSlide>

                    </Swiper>

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
                    <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-orange-400 mb-16">
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
        </>

    );
}

export default Aboutus;