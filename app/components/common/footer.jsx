"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative  text-white pt-16 pb-6 px-4 overflow-hidden">

            <div className="max-w-5xl mx-auto text-center">

                {/* LOGO */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={220}
                        height={100}
                    />
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                    Woxxin Games is a mobile game publisher based in Surat, India, founded in 2021. We create immersive games designed to entertain, engage, and inspire players worldwide.
                </p>

                {/* SOCIAL LINKS (TEXT STYLE) */}
                <div className="flex justify-center gap-6 mt-8 text-gray-400 text-sm uppercase tracking-wide">

                    <Link
                        href="https://www.youtube.com/channel/UCJJOqSmgPQuQiGoCVGdAWZQ"
                        className="hover:text-white hover:underline underline-offset-4 decoration-[#AAA7FE] transition"
                    >
                        Youtube
                    </Link>

                    <Link
                        href="https://www.instagram.com/woxxinsolution"
                        className="hover:text-white hover:underline underline-offset-4 decoration-[#AAA7FE] transition"
                    >
                        Instagram
                    </Link>

                    <Link
                        href="https://www.linkedin.com/company/woxxinsolution/"
                        className="hover:text-white hover:underline underline-offset-4 decoration-[#AAA7FE] transition"
                    >
                        LinkedIn
                    </Link>

                </div>
            </div>

            <div className="absolute right-4 bottom-16 hidden md:block">
                <Image
                    src="/honey.png"   // 👈 add your bee image
                    alt="bee"
                    width={100}
                    height={100}
                />
            </div>

            {/* 🔻 BOTTOM BAR */}
            <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm max-w-7xl mx-auto">

                {/* LEFT */}
                <div className="flex gap-6 mb-4 md:mb-0">
                    <Link href="/components/pages/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                    <Link href="/components/pages/terms-condition" className="hover:text-white">Terms and Conditions</Link>
                </div>

                {/* RIGHT */}
                <div>
                    Copyright ©  {new Date().getFullYear()}{" "}
                    <span className="text-[#AFAEFF]">Woxxin Gameing Studio</span>.
                </div>

            </div>

        </footer>
    );
}