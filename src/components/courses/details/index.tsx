"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BannerUserImg from "@/assets/digital-assets.jpg";
import playButtonImg from "@/assets/play.png";
import CourseSidebar from "@/components/courses/details/sidebar";
import AboutTab from "@/components/courses/details/tabs/about";
import LessonsTab from "@/components/courses/details/tabs/lessons";
import ReviewsTab from "@/components/courses/details/tabs/reviews";
import { allCoursesList } from "@/data/coursesList";
import { ICourseDetailsProps, CourseTabType } from "@/components/courses/details/interface";
import { FiShare2, FiBarChart2, FiPlay } from "react-icons/fi";
import { HiStar, HiUsers } from "react-icons/hi2";

export default function CourseDetails({ courseId }: ICourseDetailsProps) {
    const [activeTab, setActiveTab] = useState<CourseTabType>("about");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const articleRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const [blueBgHeight, setBlueBgHeight] = useState<number | null>(null);

    // Calculate exact height of the blue grid background so it ends at the bottom of the video preview
    useEffect(() => {
        const updateHeight = () => {
            if (videoRef.current && articleRef.current) {
                const videoRect = videoRef.current.getBoundingClientRect();
                const articleRect = articleRef.current.getBoundingClientRect();
                const computed = videoRect.bottom - articleRect.top;
                if (computed > 0) {
                    setBlueBgHeight(Math.round(computed));
                }
            }
        };

        updateHeight();

        let ro: ResizeObserver | null = null;
        if (typeof window !== "undefined" && "ResizeObserver" in window) {
            ro = new ResizeObserver(() => {
                updateHeight();
            });
            if (videoRef.current) ro.observe(videoRef.current);
            if (articleRef.current) ro.observe(articleRef.current);
        }

        window.addEventListener("resize", updateHeight);
        return () => {
            window.removeEventListener("resize", updateHeight);
            ro?.disconnect();
        };
    }, []);

    // Course retrieval fallback
    const course =
        allCoursesList.find((c) => String(c.id) === String(courseId)) ||
        allCoursesList[1] ||
        allCoursesList[0];

    const courseTitle =
        course.title.toLowerCase().includes("build digital asset")
            ? "Build Digital Asset: A Comprehensive Guide"
            : course.title;

    const handleShare = async () => {
        if (typeof window !== "undefined") {
            try {
                if (navigator.share) {
                    await navigator.share({
                        title: courseTitle,
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
        <article ref={articleRef} className="w-full relative bg-white select-none">
            <div
                className="absolute top-0 left-0 right-0 bg-primary-grid pointer-events-none transition-all duration-150"
                style={{ height: blueBgHeight ? `${blueBgHeight}px` : "780px" }}
            />

            <div className="relative z-10 custom-container pt-24 sm:pt-[133px] pb-20">
                {/* hero section */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 sm:pb-10">
                    <div className="max-w-3xl">
                        <h1 className="text-xl sm:text-2xl md:text-[28px] lg:text-[36px] font-bold text-white tracking-tight leading-tight sm:leading-[1.15]">
                            {courseTitle}
                        </h1>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg font-normal mt-2 leading-relaxed">
                            Unlock the Power of Digital Creation with Expert Guidance
                        </p>
                        <div className="mt-3 text-white/80 text-sm sm:text-[15px] flex items-center gap-1.5 font-normal">
                            <span>by</span>
                            <Link
                                href={course.authorUrl || "/creators/purepearl-studio"}
                                className="text-secondary font-semibold hover:underline transition-colors"
                            >
                                {course.author || "purepearl studio"}
                            </Link>
                        </div>

                        {/* badges row */}
                        <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                            <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                                <FiBarChart2 className="w-4 h-4 text-primary" />
                                <span>{course.level || "Intermediate"}</span>
                            </div>

                            <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                                <HiStar className="w-4 h-4 text-primary" />
                                <span className="font-semibold">{course.rating || 4.8}</span>
                                <span className="text-neutral-500 font-normal">(172 reviews)</span>
                            </div>

                            <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                                <HiUsers className="w-4 h-4 text-primary" />
                                <span>{course.studentsCount || "199"} Students</span>
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

                {/* main content */}
                <div className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* left section */}
                    <div className="lg:col-span-8 w-full">
                        <div
                            ref={videoRef}
                            className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-900 shadow-2xl border border-white/20 group"
                        >
                            <Image
                                src={BannerUserImg}
                                alt={courseTitle}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 65vw"
                                className="object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-black/15" />

                            <button
                                type="button"
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="absolute inset-0 m-auto w-14 h-14 sm:w-[90px] sm:h-[90px] rounded-[24px] bg-[#4F4F4F]/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white"
                                aria-label="Play video preview"
                            >
                                <Image
                                    src={playButtonImg}
                                    alt="Play"
                                    width={24}
                                    height={24}
                                    className="w-8 h-8 sm:w-14 sm:h-14"
                                />
                            </button>
                        </div>

                        {/* Tabs Row: sitting directly on the white background */}
                        <div className="mt-8 sm:mt-10 flex items-center gap-2.5 sm:gap-3 flex-wrap">
                            <button
                                type="button"
                                onClick={() => setActiveTab("about")}
                                className={`px-6 py-2 rounded-full text-sm sm:text-[15px] transition-all cursor-pointer ${activeTab === "about"
                                    ? "bg-secondary text-neutral-950 font-semibold shadow-xs"
                                    : "bg-[#F4F4F5] text-neutral-700 hover:bg-neutral-200/80 font-medium"
                                    }`}
                            >
                                About
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("lessons")}
                                className={`px-6 py-2 rounded-full text-sm sm:text-[15px] transition-all cursor-pointer ${activeTab === "lessons"
                                    ? "bg-secondary text-neutral-950 font-semibold shadow-xs"
                                    : "bg-[#F4F4F5] text-neutral-700 hover:bg-neutral-200/80 font-medium"
                                    }`}
                            >
                                Lesson
                            </button>

                            <button
                                type="button"
                                onClick={() => setActiveTab("reviews")}
                                className={`px-6 py-2 rounded-full text-sm sm:text-[15px] transition-all cursor-pointer ${activeTab === "reviews"
                                    ? "bg-secondary text-neutral-950 font-semibold shadow-xs"
                                    : "bg-[#F4F4F5] text-neutral-700 hover:bg-neutral-200/80 font-medium"
                                    }`}
                            >
                                Reviews
                            </button>
                        </div>

                        {/* Active Tab Content Area */}
                        <div className="w-full">
                            {activeTab === "about" && <AboutTab />}
                            {activeTab === "lessons" && <LessonsTab />}
                            {activeTab === "reviews" && <ReviewsTab />}
                        </div>
                    </div>

                    {/* right section */}
                    <div className="lg:col-span-4 w-full sticky top-20 lg:top-24 self-start z-20">
                        <CourseSidebar
                            price={course.price || 25}
                            priceSuffix={course.priceSuffix || "/lifetime"}
                            totalLessons={112}
                            duration="24 hours"
                            creatorName={course.author || "PurePearl Studio"}
                            creatorRole="Professional Creator"
                            creatorUrl={course.authorUrl || "/creators/purepearl-studio"}
                        />
                    </div>
                </div>
            </div>

            {/* Bottom sticky bar for mobile screens */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-4 py-3 flex items-center justify-between shadow-lg">
                <div className="flex items-baseline gap-1">
                    <span className="text-primary font-bold text-2xl tracking-tight">
                        ${course.price || 25}
                    </span>
                    <span className="text-neutral-500 text-xs font-normal">
                        {course.priceSuffix || "/lifetime"}
                    </span>
                </div>
                <button
                    type="button"
                    className="px-6 py-2.5 rounded-full bg-secondary text-neutral-950 font-bold text-sm hover:brightness-95 active:scale-95 transition-all shadow-xs"
                >
                    Enroll Now
                </button>
            </div>

            <div className="h-[1px] w-full bg-gray-200" />
        </article>
    );
}