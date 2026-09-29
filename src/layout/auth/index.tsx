"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import AuthLogo from "@/assets/auth-logo.svg";
import AuthImage from "@/assets/auth/auth.png";
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
        <div className="min-h-screen w-full relative flex flex-col justify-between bg-primary-grid overflow-x-hidden selection:bg-secondary selection:text-black pb-10">
            <div className="custom-container w-full flex-1 flex flex-col justify-between">
                <div className="w-full z-20 py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center w-fit"
                        aria-label="Back to home"
                    >
                        <Image
                            src={AuthLogo}
                            alt="ByteSpace Logo"
                            width={30}
                            height={32}
                            priority
                            className="h-8 sm:h-9 w-auto"
                        />
                    </Link>
                </div>

                <main className="flex-1 flex justify-center z-10">
                    <div className="w-full flex flex-col md:flex-row lg:items-stretch items-center lg:items-start justify-between gap-6 lg:gap-14">
                        <div className="w-full lg:w-[548px] flex flex-col justify-between items-center lg:items-start text-center lg:text-left pt-0">
                            <div className="mb-6 sm:mb-8 lg:mb-12">
                                <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-snug text-start">
                                    {displayTitle}
                                </h1>
                                <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed text-start">
                                    {displayDescription}
                                </p>
                            </div>

                            <div className="hidden md:block w-full max-w-[548px] max-h-[585px] select-none pointer-events-none">
                                <Image
                                    src={AuthImage}
                                    alt="ByteSpace Illustration"
                                    width={548}
                                    height={582}
                                    priority
                                    className="w-full h-auto object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-[579px] flex justify-center lg:justify-end self-stretch">
                            <div className="w-full max-w-[579px] h-full bg-white rounded-[24px] shadow-2xl p-6 sm:p-10 lg:p-12 text-[#242528] relative z-10 flex flex-col justify-between">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
