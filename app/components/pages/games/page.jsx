"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function Games() {
    useEffect(() => {
        document.title = "Game - Woxxin Games";
    }, []);

    const games = [
        "/horseM.png",
        "/screw.png",
        "/arrow.png",
        "/cashOut.png",
        "/woodP.png",
        "/snaks.png",
        "/pixel.png",
    ];

    return (
        <section className="w-full text-white">

            {/* TITLE SECTION */}
            <div className="max-w-7xl mx-auto mt-10 md:mt-5">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center px-4 md:px-10 py-12 md:py-20">
                        <h2 className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                            UNCOVER THE HOTTEST
                        </h2>
                        <h2 className="text-[32px] md:text-[56px] font-bold bg-gradient-to-r from-[#FFFFFF] to-[#AAA7FE] bg-clip-text text-transparent">
                            NEW GAMES
                        </h2>
                    </div>
                </motion.div>
            </div>

            {/* IMAGES SECTION */}
            <div className="flex flex-col gap-20">
                {games.map((img, index) => (
                    <motion.div
                        key={index}
                        className="relative w-full"
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: index * 0.15
                        }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src={img}
                            alt={`game-${index}`}
                            width={1400}
                            height={600}
                            priority={index === 0} // only first image priority
                            className="w-full h-full object-contain"
                        />
                    </motion.div>
                ))}
            </div>

        </section>
    );
}

export default Games;