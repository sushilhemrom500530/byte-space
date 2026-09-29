"use client";

import Link from "next/link";
import { useState } from "react";
import facebook_image from "@/assets/auth/facebook.png";
import google_image from "@/assets/auth/google.png";
import Image from "next/image";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login submission:", { email, password });
    };

    return (
        <div className="w-full flex-1 flex flex-col justify-between select-none">
            {/* Top Section */}
            <div>
                {/* Header Tag */}
                <span className="text-xs sm:text-[13px] font-medium text-primary block mb-2 sm:mb-2.5">
                    Sign In
                </span>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#242528] tracking-tight leading-none mb-7 sm:mb-8">
                    Welcome Back
                </h2>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {/* Email Field */}
                    <div className="mb-4 sm:mb-4.5">
                        <label
                            htmlFor="login-email"
                            className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-1.5"
                        >
                            Email
                        </label>
                        <input
                            id="login-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="designer@example.com"
                            required
                            className="w-full h-10 sm:h-[42px] px-3.5 rounded-[10px] border border-[#E5E7EB] text-xs sm:text-sm text-[#242528] placeholder-[#A1A4AA] bg-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 sm:mb-5">
                        <label
                            htmlFor="login-password"
                            className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-1.5"
                        >
                            Password
                        </label>
                        <input
                            id="login-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="w-full h-10 sm:h-[42px] px-3.5 rounded-[10px] border border-[#E5E7EB] text-xs sm:text-sm text-[#242528] placeholder-[#A1A4AA] bg-white focus:outline-none focus:border-primary tracking-widest transition-colors"
                        />
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="h-8 sm:h-9 px-6 sm:px-6.5 rounded-full bg-secondary text-[#111111] font-semibold text-xs sm:text-[13px] hover:brightness-95 active:scale-95 transition-all shadow-none cursor-pointer whitespace-nowrap"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            <div className="my-6 sm:my-7">
                <div className="relative flex items-center justify-center mb-6">
                    <div className="w-full border-t border-[#EEEEEE]" />
                    <span className="absolute bg-white px-2.5 text-[11px] text-[#9CA3AF] select-none">
                        or
                    </span>
                </div>

                <div className="flex items-center justify-center gap-3.5">
                    <button
                        type="button"
                        aria-label="Sign in with Facebook"
                        className="w-11 h-11 sm:w-16 sm:h-16 rounded-[24px] border border-[#E5E7EB] flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-none cursor-pointer"
                    >
                        <Image
                            src={facebook_image}
                            alt="Facebook"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        type="button"
                        aria-label="Sign in with Google"
                        className="w-11 h-11 sm:w-16 sm:h-16 rounded-[24px] border border-[#E5E7EB] flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-none cursor-pointer"
                    >
                        <Image
                            src={google_image}
                            alt="Google"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
            </div>

            <p className="text-center text-[11px] sm:text-xs text-[#71717A]">
                New user?{" "}
                <Link
                    href="/auth/register"
                    className="text-primary font-medium hover:underline transition-colors"
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
}