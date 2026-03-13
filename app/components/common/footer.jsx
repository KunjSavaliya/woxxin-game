"use client";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-[#111111] text-white pt-16 pb-6 px-6">

                <div className="max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SECTION */}
                    <div>
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo.png"   // Put your logo in public folder
                                alt="woxxin Games"
                                width={250}
                                height={120}
                            />

                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-6 max-w-xl text-xl">
                            Woxxin Games is a mobile game publisher located in Surat, India.
                            We established in the year 2021. Our goal is to provide entertainment
                            to people through our games.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-blue-500 transition">
                                <Facebook size={22} />
                            </Link>
                            <Link href="#" className="hover:text-pink-500 transition">
                                <Instagram size={22} />
                            </Link>
                            <Link href="#" className="hover:text-sky-400 transition">
                                <Twitter size={22} />
                            </Link>
                            <Link href="https://www.youtube.com/channel/UCJJOqSmgPQuQiGoCVGdAWZQ" className="hover:text-red-500 transition">
                                <Youtube size={22} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div className="md:pl-24">
                        <h3 className="text-2xl font-semibold mb-6">
                            Important Links
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li><Link href="/components/pages/about-us" className="hover:text-blue-400 transition">About Us</Link></li>
                            <li><Link href="/components/pages/games" className="hover:text-blue-400 transition">Games</Link></li>

                            <li><Link href="/components/pages/news" className="hover:text-blue-400 transition">News</Link></li>

                            <li><Link href="/components/pages/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
                            <li><Link href="/components/pages/terms-condition" className="hover:text-blue-400 transition">Terms and Condition</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
                    Copyright © 2026{" "}
                    <span className="text-blue-400 font-medium">Woxxin Games</span>.
                    View our{" "}
                    <Link href="#" className="text-blue-400 hover:underline">
                        Terms of Service
                    </Link>,{" "}
                    <Link href="#" className="text-blue-400 hover:underline">
                        Privacy Policy
                    </Link>
                </div>

            </footer>
        </>
    );
}