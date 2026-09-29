"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AuthLogo from "@/assets/auth-logo.svg";
import BigDataCard from "@/assets/auth/big-data.png";
import DigitalAssetsCard from "@/assets/auth/digital-assets.png";
import HappyStudentsBadge from "@/assets/auth/happy-student-badge.png";
import WhiteArrow from "@/assets/auth/white-arrow.png";
import YellowTriangle from "@/assets/auth/yellow-triangle.png";
import YellowZero from "@/assets/auth/yellow-zero.png";
import { IAuthLayoutProps } from "@/types";

export default function AuthLayout({
    children,
    title,
    description,
}: IAuthLayoutProps) {
    const pathname = usePathname();

    // Determine heading & description based on current auth route if not explicitly provided
    const isSignUp =
        pathname?.includes("register") ||
        pathname?.includes("sign-up") ||
        pathname?.includes("signup");

    const defaultTitle = isSignUp ? "Sign up and come in" : "Sign in with ease";
    const defaultDescription = isSignUp
        ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
        : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.";

    const displayTitle = title || defaultTitle;
    const displayDescription = description || defaultDescription;

    return (
        <div className="min-h-screen w-full relative flex flex-col justify-between bg-primary bg-grid-pattern overflow-x-hidden p-6 sm:p-10 lg:p-14 selection:bg-secondary selection:text-black"> 
            <div className="w-full max-w-[1360px] mx-auto z-20">
                <Link
                    href="/"
                    className="inline-flex items-center group w-fit focus:outline-none focus:ring-2 focus:ring-secondary/50 rounded-lg p-1 -m-1"
                    aria-label="Back to home"
                >
                    <Image
                        src={AuthLogo}
                        alt="ByteSpace Logo"
                        width={30}
                        height={32}
                        priority
                        className="h-8 sm:h-9 w-auto transition-transform duration-200 group-hover:scale-105"
                    />
                </Link>
            </div>
 
            <main className="flex-1 flex items-center justify-center py-8 lg:py-12 z-10">
                <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Title, Subtitle, & Stacked 3D Illustration */}
                    <div className="lg:col-span-7 flex flex-col items-start justify-center">
                        <div className="max-w-lg mb-8 sm:mb-10 lg:mb-12">
                            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight leading-snug">
                                {displayTitle}
                            </h1>
                            <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed max-w-md">
                                {displayDescription}
                            </p>
                        </div>
 
                        <div className="relative w-full max-w-[420px] sm:max-w-[460px] h-[360px] sm:h-[400px] select-none pointer-events-none mx-auto lg:mx-0"> 
                            <div className="absolute left-[-15px] sm:left-[-30px] top-[45px] sm:top-[55px] w-[240px] sm:w-[280px] z-0 drop-shadow-xl">
                                <Image
                                    src={DigitalAssetsCard}
                                    alt="Digital Assets"
                                    width={373}
                                    height={384}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* The Power of Big Data */}
                            <div className="absolute left-[45px] sm:left-[65px] top-0 w-[240px] sm:w-[280px] z-10 drop-shadow-2xl">
                                <Image
                                    src={BigDataCard}
                                    alt="The Power of Big Data"
                                    width={373}
                                    height={384}
                                    priority
                                    className="w-full h-auto object-contain"
                                />
                            </div>
 
                            <div className="absolute left-[15px] sm:left-[22px] top-[15px] sm:top-[20px] w-[65px] sm:w-[78px] z-20 drop-shadow-lg">
                                <Image
                                    src={YellowZero}
                                    alt="Yellow Zero Shape"
                                    width={148}
                                    height={147}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
 
                            <div className="absolute right-[30px] sm:right-[40px] top-[180px] sm:top-[200px] w-[75px] sm:w-[90px] z-20 drop-shadow-lg">
                                <Image
                                    src={WhiteArrow}
                                    alt="White Ribbon Shape"
                                    width={177}
                                    height={176}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
 
                            <div className="absolute left-[105px] sm:left-[130px] bottom-[25px] sm:bottom-[30px] w-[165px] sm:w-[195px] z-20 drop-shadow-xl">
                                <Image
                                    src={HappyStudentsBadge}
                                    alt="Happy Students"
                                    width={258}
                                    height={123}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
 
                            <div className="absolute left-[-25px] sm:left-[-35px] bottom-[0px] sm:bottom-[10px] w-[85px] sm:w-[100px] z-20 drop-shadow-xl">
                                <Image
                                    src={YellowTriangle}
                                    alt="Yellow Pyramid Shape"
                                    width={190}
                                    height={189}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Children */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                        <div className="w-full max-w-[460px] sm:max-w-[490px] bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl p-7 sm:p-10 lg:p-12 text-[#242528] relative z-10">
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
