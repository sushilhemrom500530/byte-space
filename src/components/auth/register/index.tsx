"use client";

import Link from "next/link";
import { useState } from "react";

export default function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register submission:", { fullName, email, password });
    };

    return (
        <div className="w-full flex-1 flex flex-col justify-between select-none">
            {/* Top Section */}
            <div>
                {/* Header Tag */}
                <span className="text-xs sm:text-[13px] font-medium text-primary block mb-2 sm:mb-2.5">
                    Create an Account
                </span>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-[28px] font-bold text-[#242528] tracking-tight leading-[1.12] mb-6 sm:mb-7">
                    Welcome to
                    <br />
                    ByteSpace
                </h2>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} className="flex flex-col">
                    {/* Full Name Field */}
                    <div className="mb-4 sm:mb-4.5">
                        <label
                            htmlFor="register-fullname"
                            className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-1.5"
                        >
                            Full Name
                        </label>
                        <input
                            id="register-fullname"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Jamie Davis"
                            required
                            className="w-full h-10 sm:h-[42px] px-3.5 rounded-[10px] border border-[#E5E7EB] text-xs sm:text-sm text-[#242528] placeholder-[#A1A4AA] bg-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4 sm:mb-4.5">
                        <label
                            htmlFor="register-email"
                            className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-1.5"
                        >
                            Email
                        </label>
                        <input
                            id="register-email"
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
                            htmlFor="register-password"
                            className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-1.5"
                        >
                            Password
                        </label>
                        <input
                            id="register-password"
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
                            Continue
                        </button>
                    </div>
                </form>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-10 sm:pt-14">
                <p className="text-center text-[11px] sm:text-xs text-[#71717A]">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="text-primary font-medium hover:underline transition-colors"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}