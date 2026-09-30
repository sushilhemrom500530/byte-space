"use client";

import Image from "next/image";
import Link from "next/link";
import BannerUserImg from "@/assets/Banner-User.png";
import { FiShare2, FiBarChart2, FiPlay } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from "react";

interface ICourseHeroProps {
    title: string;
    subtitle?: string;
    author: string;
    authorUrl?: string;
    level: string;
    rating: number;
    reviewsCount?: number;
    studentsCount: string | number;
}

export default function CourseHero({
    title,
    subtitle = "Unlock the Power of Digital Creation with Expert Guidance",
    author,
    authorUrl = "/creators/purepearl-studio",
    level,
    rating,
    reviewsCount = 172,
    studentsCount,
}: ICourseHeroProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleShare = async () => {
        if (typeof window !== "undefined") {
            try {
                if (navigator.share) {
                    await navigator.share({
                        title,
                        url: window.location.href,
                    });
                } else {
                    await navigator.clipboard.writeText(window.location.href);
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), 2000);
                }
            } catch {
                // handle dismiss gracefully
            }
        }
    };

    return (
        <section className="w-full bg-primary-grid text-white pt-24 sm:pt-28 pb-10 sm:pb-12">
            <div className="custom-container">
                {/* Header Information Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="max-w-3xl">
                        <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-tight sm:leading-[1.15]">
                            {title}
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal mt-2 leading-relaxed">
                            {subtitle}
                        </p>
                        <div className="mt-3 text-white/80 text-sm sm:text-[15px] flex items-center gap-1.5 font-normal">
                            <span>by</span>
                            <Link
                                href={authorUrl}
                                className="text-secondary font-semibold hover:underline transition-colors"
                            >
                                {author}
                            </Link>
                        </div>

                        {/* Badges Row */}
                        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3 select-none">
                            <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                                <FiBarChart2 className="w-4 h-4 text-primary" />
                                <span>{level}</span>
                            </div>

                            <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                                <svg
                                    className="w-4 h-4 text-primary fill-current"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="font-semibold">{rating}</span>
                                <span className="text-neutral-500 font-normal">
                                    ({reviewsCount} reviews)
                                </span>
                            </div>

                            <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                                <HiOutlineUserGroup className="w-4 h-4 text-primary" />
                                <span>{studentsCount} Students</span>
                            </div>
                        </div>
                    </div>

                    {/* Share Button */}
                    <div className="self-start md:self-auto shrink-0">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="bg-secondary text-neutral-950 font-semibold text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 rounded-full flex items-center gap-2 shadow-xs hover:brightness-95 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                        >
                            <FiShare2 className="w-4 h-4 stroke-[2.2]" />
                            <span>{isCopied ? "Link Copied!" : "Share"}</span>
                        </button>
                    </div>
                </div>

                {/* Hero Video Preview Container */}
                <div className="mt-8 sm:mt-10 lg:w-[65%] w-full">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl border border-white/10 group">
                        <Image
                            src={BannerUserImg}
                            alt={title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 65vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Dark Vignette Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                        {/* Center Play Button */}
                        <button
                            type="button"
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/45 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl hover:scale-110 hover:bg-black/60 active:scale-95 transition-all cursor-pointer group/btn"
                            aria-label="Play course preview video"
                        >
                            <FiPlay className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white group-hover/btn:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
