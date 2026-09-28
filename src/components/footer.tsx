"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FooterLogo from "@/assets/footer-logo.svg";
import { footerNavColumns, footerBottomLinks } from "@/data";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    return (
        <footer className="w-full bg-white text-[#242528] pt-14 sm:pt-16 pb-8 border-t border-neutral-100">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-[71px]">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
                    <div className="flex flex-col max-w-md">
                        <Link href="/" className="inline-block group">
                            <Image
                                src={FooterLogo}
                                alt="ByteSpace"
                                width={171}
                                height={37}
                                className="h-11 sm:h-12 w-auto"
                            />
                        </Link>

                        <p className="mt-4 text-[#52525B] text-sm leading-relaxed max-w-sm">
                            Stay Up to date with our latest features and releases by joining our newsletter.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="w-full sm:w-[280px] h-11 sm:h-12 px-5 rounded-full border border-[#D5D5D6] text-sm text-[#242528] placeholder-[#9CA3AF] focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                type="submit"
                                className="h-11 sm:h-12 px-7 rounded-full bg-secondary text-[#111111] font-semibold text-sm hover:brightness-95 active:scale-95 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                            >
                                Search
                            </button>
                        </form>

                        {subscribed && (
                            <p className="mt-2 text-xs font-medium text-green-600 animate-in fade-in">
                                Thank you for subscribing!
                            </p>
                        )}

                        <p className="mt-4 text-xs text-[#71717A] max-w-sm leading-relaxed">
                            By subscribing, you agree to our{" "}
                            <Link href="/privacy-policy" className="underline hover:text-[#242528] transition-colors">
                                Privacy Policy
                            </Link>{" "}
                            and consent to receive updates from our company.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 pt-2">
                        {footerNavColumns.map((column) => (
                            <div key={column.id} className="flex flex-col space-y-3.5">
                                {column.links.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.path}
                                        className="text-sm text-[#242528] hover:text-primary transition-colors duration-150"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-14 sm:mt-16 pt-6 sm:pt-8 border-t border-[#E6E8E9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#71717A]">
                    <p className="order-2 sm:order-1 text-center sm:text-left">
                        @ 2023 ByteSpace. All rights reserved.
                    </p>

                    <div className="order-1 sm:order-2 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                        {footerBottomLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.path}
                                className="text-[#52525B] hover:text-black transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}