"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderLogo from "@/assets/Header_Logo.svg";
import { INavbarProps } from "@/types";
import { navItems, authItems } from "@/data";
import { HiOutlineShoppingBag, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

export default function Navbar({ className = "" }: INavbarProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);

    // Scroll listener: transparent at top, hide on scroll down, show on scroll up
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Near top of the page
            if (currentScrollY <= 15) {
                setIsAtTop(true);
                setIsVisible(true);
            } else {
                setIsAtTop(false);
                // Scrolling down -> hide navbar
                if (currentScrollY > lastScrollY && currentScrollY > 80) {
                    setIsVisible(false);
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling up / toward top -> reveal navbar
                    setIsVisible(true);
                }
            }

            lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll and handle ESC key & window resize when mobile drawer is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === "Escape") setMobileMenuOpen(false);
            };
            const handleResize = () => {
                if (window.innerWidth >= 768) {
                    setMobileMenuOpen(false);
                }
            };
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("resize", handleResize);
            return () => {
                document.body.style.overflow = "";
                window.removeEventListener("keydown", handleKeyDown);
                window.removeEventListener("resize", handleResize);
            };
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileMenuOpen]);

    const navBackground = isAtTop
        ? "bg-transparent"
        : "bg-primary/80 backdrop-blur-xl backdrop-saturate-150";

    const navTransform = isVisible || mobileMenuOpen
        ? "translate-y-0"
        : "-translate-y-full";

    return (
        <>
            <nav
                className={`w-full fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${navBackground} ${navTransform} ${className}`}
            >
                <div className={`custom-container ${isAtTop ? "h-[100px]" : "h-[75px]"} transition-all duration-300 ease-in-out px-6 sm:px-10 lg:px-[71px] flex items-center justify-between`}>
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center group">
                            <Image
                                src={HeaderLogo}
                                alt="ByteSpace"
                                width={154}
                                height={33}
                                priority
                                className="h-7 sm:h-8 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8 lg:gap-10 text-[15px] font-medium text-white/90">
                        {navItems.map((item) => {
                            const isActive =
                                item.path === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.path);
                            return (
                                <Link
                                    key={item.id || item.path}
                                    href={item.path}
                                    className={`transition-colors duration-150 ${isActive
                                        ? "text-secondary font-medium"
                                        : "hover:text-white"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex items-center gap-6 sm:gap-7 text-[15px] font-medium text-white/90">
                        {authItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.id || item.path}
                                    href={item.path}
                                    className={`hidden sm:inline-block transition-colors duration-150 ${isActive
                                        ? "text-secondary font-medium"
                                        : "hover:text-white"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                        <Link
                            href="/cart"
                            aria-label="Cart"
                            className={`p-1 flex items-center transition-colors ${pathname === "/cart"
                                ? "text-secondary"
                                : "text-white hover:text-white/80"
                                }`}
                        >
                            <HiOutlineShoppingBag className="w-5 h-5 stroke-[1.8]" />
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="md:hidden text-white p-2 -mr-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors cursor-pointer"
                            aria-label="Open navigation menu"
                        >
                            <HiOutlineBars3 className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Drawer Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setMobileMenuOpen(false)}
                aria-hidden="true"
            />

            {/* Mobile Drawer Aside */}
            <aside
                className={`fixed top-0 right-0 bottom-0 w-[290px] sm:w-[320px] max-w-[85vw] h-full h-[100dvh] bg-primary border-l border-white/10 z-50 md:hidden flex flex-col justify-between p-6 overflow-y-auto overflow-x-hidden transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                aria-label="Mobile navigation"
            >
                <div className="flex flex-col flex-1 shrink-0">
                    <div className="flex items-center justify-between pb-5 border-b border-white/10 shrink-0">
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
                            className="text-white/80 hover:text-white p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Close menu"
                        >
                            <HiOutlineXMark className="w-6 h-6" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-1 py-4 sm:py-6">
                        {navItems.map((item) => {
                            const isActive =
                                item.path === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.path);
                            return (
                                <Link
                                    key={item.id || item.path}
                                    href={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive
                                        ? "text-secondary font-medium bg-white/10"
                                        : "text-white/90 hover:text-secondary hover:bg-white/5"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                        <Link
                            href="/cart"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-all ${pathname === "/cart"
                                ? "text-secondary font-medium bg-white/10"
                                : "text-white/90 hover:text-secondary hover:bg-white/5"
                                }`}
                        >
                            <HiOutlineShoppingBag className="w-5 h-5 stroke-[1.8]" />
                            <span>Cart</span>
                        </Link>
                    </nav>
                </div>
                <div className="pt-4 pb-2 sm:pb-4 border-t border-white/10 flex flex-col gap-3 shrink-0 mt-auto">
                    <Link
                        href="/auth/sign-in"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`w-full py-2.5 px-4 text-center rounded-full border border-white/20 font-medium text-sm transition-colors ${pathname === "/auth/sign-in"
                            ? "text-secondary border-secondary bg-white/10"
                            : "text-white hover:bg-white/10"
                            }`}
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/sign-up"
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-full py-2.5 px-4 text-center rounded-full bg-secondary text-[#111111] font-medium text-sm hover:brightness-95 transition-all"
                    >
                        Join Us
                    </Link>
                </div>
            </aside>
        </>
    );
}