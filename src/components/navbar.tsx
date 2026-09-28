"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import HeaderLogo from "@/assets/Header_Logo.svg";
import { INavbarProps } from "@/types";

export default function Navbar({ className = "" }: INavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Prevent body scroll and handle ESC key when mobile drawer is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") setMobileMenuOpen(false);
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", handleKeyDown);
            };
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileMenuOpen]);

    return (
        <nav className={`w-full z-50 ${className}`}>
            <div className="h-[100px] px-6 sm:px-10 lg:px-[71px] flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center group">
                        <Image
                            src={HeaderLogo}
                            alt="ByteSpace"
                            width={154}
                            height={33}
                            priority
                            className="h-7 sm:h-8 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
                        />
                    </Link>
                </div>

                {/* Center: Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-white/90">
                    <Link
                        href="/"
                        className="hover:text-white transition-colors duration-150"
                    >
                        Home
                    </Link>
                    <Link
                        href="/courses"
                        className="hover:text-white transition-colors duration-150"
                    >
                        Courses
                    </Link>
                    <Link
                        href="/creators"
                        className="hover:text-white transition-colors duration-150"
                    >
                        Creators
                    </Link>
                </div>

                {/* Right: Auth & Cart (Desktop & Mobile) */}
                <div className="flex items-center gap-6 sm:gap-7 text-[15px] font-medium text-white/90">
                    <Link
                        href="/auth/sign-in"
                        className="hidden sm:inline-block hover:text-white transition-colors duration-150"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/join-us"
                        className="hidden sm:inline-block hover:text-white transition-colors duration-150"
                    >
                        Join Us
                    </Link>
                    <Link
                        href="/cart"
                        aria-label="Cart"
                        className="text-white hover:text-white/80 transition-colors p-1 flex items-center"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-white"
                        >
                            <path
                                d="M16 8V6a4 4 0 0 0-8 0v2"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <rect
                                x="4.5"
                                y="8"
                                width="15"
                                height="13"
                                rx="2"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            />
                        </svg>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden text-white p-2 -mr-2 rounded-lg hover:bg-white/10 focus:outline-none transition-colors"
                        aria-label="Open navigation menu"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Drawer Panel */}
            <aside
                className={`fixed top-0 right-0 bottom-0 w-[290px] sm:w-[320px] max-w-[85vw] bg-primary border-l border-white/10 z-50 md:hidden shadow-2xl flex flex-col justify-between p-6 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-label="Mobile navigation"
            >
                <div className="flex flex-col">
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-white/10">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center"
                        >
                            <Image
                                src={HeaderLogo}
                                alt="ByteSpace"
                                width={130}
                                height={28}
                                className="h-6 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-white/80 hover:text-white p-2 -mr-2 rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 py-6">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-secondary hover:bg-white/5 transition-all"
                        >
                            Home
                        </Link>
                        <Link
                            href="/courses"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-secondary hover:bg-white/5 transition-all"
                        >
                            Courses
                        </Link>
                        <Link
                            href="/creators"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-secondary hover:bg-white/5 transition-all"
                        >
                            Creators
                        </Link>
                        <Link
                            href="/cart"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-white/90 hover:text-secondary hover:bg-white/5 transition-all"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 8V6a4 4 0 0 0-8 0v2" />
                                <rect x="4.5" y="8" width="15" height="13" rx="2" />
                            </svg>
                            <span>Cart</span>
                        </Link>
                    </nav>
                </div>

                {/* Drawer Footer Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                    <Link
                        href="/auth/sign-in"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full py-2.5 px-4 text-center rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/join-us"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full py-2.5 px-4 text-center rounded-full bg-secondary text-[#111111] font-semibold text-sm hover:brightness-95 transition-all shadow-sm"
                    >
                        Join Us
                    </Link>
                </div>
            </aside>
        </nav>
    );
}