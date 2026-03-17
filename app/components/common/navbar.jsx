"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const handleNavigation = (path) => {
        router.push(path)
        setIsOpen(false) // close mobile menu after click
    }

    return (
        <header className="w-full flex justify-center fixed top-6 z-50">
            <div className="w-[95%] max-w-[90rem]
  bg-[#6510d5]
  backdrop-blur-xl 
  rounded-full 
 p-6
  flex items-center justify-between 
  shadow-lg 
  border border-white/20">

                {/* Logo */}
                <div className="font-bold text-lg">
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="cursor-pointer w-40"
                        onClick={() => handleNavigation("/")}
                    />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex items-center gap-10 font-semibold text-white text-2xl ">
                    <button onClick={() => handleNavigation("/components/pages/about-us")} className="cursor-pointer hover:text-[#00E5FF] transition">
                        ABOUT US
                    </button>
                    <button onClick={() => handleNavigation("/components/pages/games")} className="cursor-pointer hover:text-[#00E5FF] transition">
                        GAMES
                    </button>
                    <button onClick={() => handleNavigation("/components/pages/news")} className="cursor-pointer hover:text-[#00E5FF] transition">
                        NEWS
                    </button>
                </nav>

                {/* Right Button */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="https://woxxin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl flex items-center gap-2 bg-[#00E5FF] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition cursor-pointer"
                    >
                        More Info
                        <span className="bg-black rounded-full p-1">
                            <ArrowUpRight size={16} />
                        </span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div >

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="absolute top-24 w-[95%] max-w-7xl bg-white rounded-3xl shadow-xl p-6 lg:hidden">
                        <div className="flex flex-col gap-6 font-semibold text-gray-800">
                            <button
                                onClick={() => {
                                    handleNavigation("/components/pages/about-us");
                                    setIsOpen(false);
                                }}
                                className="cursor-pointer hover:text-[#00E5FF] transition"
                            >
                                ABOUT US
                            </button>

                            <button
                                onClick={() => {
                                    handleNavigation("/components/pages/games");
                                    setIsOpen(false);
                                }}
                                className="cursor-pointer hover:text-[#00E5FF] transition"
                            >
                                GAMES
                            </button>

                            <button
                                onClick={() => {
                                    handleNavigation("/components/pages/news");
                                    setIsOpen(false);
                                }}
                                className="cursor-pointer hover:text-[#00E5FF] transition"
                            >
                                NEWS
                            </button>
                            <div className="flex justify-center ">
                                <button className="text-2xl  flex items-center gap-2 bg-[#00E5FF]  text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition cursor-pointer">
                                    More Info
                                    <span className="bg-black rounded-full p-1">
                                        <ArrowUpRight size={16} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </header >
    )
}