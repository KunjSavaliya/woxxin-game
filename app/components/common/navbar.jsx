"use client"
import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()

    const handleNavigation = (path) => {
        router.push(path)
        setIsOpen(false)
    }

    const isActive = (path) => pathname === path

    return (
        <header className="sticky top-0 z-50 w-full">

            {/* FULL WIDTH BAR */}
            <div className="w-full p-3 bg-black backdrop-blur-xl border-b border-white/10">

                {/* INNER CONTENT */}
                <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

                    {/* LEFT MENU */}
                    <nav className="hidden lg:flex items-center gap-8 text-white text-2xl font-medium">

                        {/* ABOUT */}
                        <button
                            onClick={() => handleNavigation("/components/pages/about-us")}
                            className={`relative pb-1 transition cursor-pointer
                ${isActive("/components/pages/about-us")
                                    ? "text-white"
                                    : "hover:text-[#7B61FF]"
                                }`}
                        >
                            About Us

                            {isActive("/components/pages/about-us") && (
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#7B61FF]"></span>
                            )}
                        </button>

                        {/* GAMES */}
                        <button
                            onClick={() => handleNavigation("/components/pages/games")}
                            className={`relative pb-1 transition cursor-pointer
                ${isActive("/components/pages/games")
                                    ? "text-white"
                                    : "hover:text-[#7B61FF]"
                                }`}
                        >
                            Games

                            {isActive("/components/pages/games") && (
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#7B61FF]"></span>
                            )}
                        </button>

                    </nav>

                    {/* LOGO */}
                    <div>
                        <img
                            src="/logo.png"
                            alt="logo"
                            onClick={() => handleNavigation("/components/pages/about-us")}
                            className="w-32 md:w-46 cursor-pointer"
                        />
                    </div>

                    {/* RIGHT BUTTON */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="https://woxxin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                group relative inline-flex items-center
                text-white text-xl font-medium
                px-5 py-2 pr-10
                rounded-full
                border border-white/80
                hover:border-white
                transition-all duration-300
              "
                        >
                            More Info

                            {/* Arrow Circle */}
                            <span className="
                absolute -right-3 top-1/2 -translate-y-1/2
                w-7 h-7 flex items-center justify-center
                rounded-full bg-[#7B61FF]
                border border-white/40
                group-hover:scale-110
                transition-all duration-300
              ">
                                <ArrowUpRight size={14} className="text-white" />
                            </span>
                        </a>
                    </div>

                    {/* MOBILE MENU ICON */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* MOBILE DROPDOWN */}
            {isOpen && (
                <div className="w-full bg-black/90 backdrop-blur-xl border-b border-white/10 px-6 py-6 lg:hidden">
                    <div className="flex flex-col gap-6 text-white text-lg font-medium">

                        <button onClick={() => handleNavigation("/components/pages/about-us")}>
                            About Us
                        </button>

                        <button onClick={() => handleNavigation("/components/pages/games")}>
                            Games
                        </button>

                        <a
                            href="https://woxxin.com/"
                            target="_blank"
                            className="flex justify-center items-center gap-2 bg-[#7B61FF] text-black py-2 rounded-full font-semibold"
                        >
                            More Info
                            <ArrowUpRight size={16} />
                        </a>

                    </div>
                </div>
            )}
        </header>
    )
}