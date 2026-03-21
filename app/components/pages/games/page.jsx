"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

function Games() {
    useEffect(() => {
        document.title = "Game - Woxxin Games";
    }, []);
    return (

        <>
            <section className="w-full  text-white ">

                <div className="max-w-7xl mx-auto mt-10 md:mt-5">

                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="text-center px-4 md:px-10 py-12 md:py-20">
                            <h2 className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                UNCOVER THE HOTTEST
                            </h2>
                            <h2 className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                                NEW GAMES
                            </h2>

                        </div>
                    </ScrollAnimation>
                </div>
                <div className='flex flex-col gap-20'>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full">
                            <Image
                                src="/horseM.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full ">
                            <Image
                                src="/screw.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full ">
                            <Image
                                src="/arrow.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full ">
                            <Image
                                src="/cashOut.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full ">
                            <Image
                                src="/woodP.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full ">
                            <Image
                                src="/snaks.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__animated animate__fadeInUp">

                        <div className="relative w-full ">
                            <Image
                                src="/pixel.png"
                                alt="vision mission"
                                width={1400}
                                height={600}
                                priority
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </ScrollAnimation>
                </div>

            </section>

        </>
    )
}

export default Games;
