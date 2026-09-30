"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BannerUserImg from "@/assets/Banner-User.png";
import CourseSidebar from "@/components/courses/details/sidebar";
import AboutTab from "@/components/courses/details/tabs/about";
import LessonsTab from "@/components/courses/details/tabs/lessons";
import ReviewsTab from "@/components/courses/details/tabs/reviews";
import { allCoursesList } from "@/data/coursesList";
import { ICourseDetailsProps, CourseTabType } from "@/components/courses/details/interface";
import { FiShare2, FiBarChart2, FiPlay } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi2";

export default function CourseDetails({ courseId }: ICourseDetailsProps) {
    const [activeTab, setActiveTab] = useState<CourseTabType>("about");
    const [isPlaying, setIsPlaying] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // Find course by ID or fallback to standard course
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
        <article className="w-full select-none">
            {/* Top Blue Grid Hero Header */}
            <div className="w-full bg-primary-grid text-white pt-24 sm:pt-28 pb-24 sm:pb-32">
                <div className="custom-container">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="max-w-3xl">
                            <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-tight sm:leading-[1.15]">
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

                            {/* Badges */}
                            <div className="mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                                <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                                    <FiBarChart2 className="w-4 h-4 text-primary" />
                                    <span>{course.level || "Intermediate"}</span>
                                </div>

                                <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-xs">
                                    <svg
                                        className="w-4 h-4 text-primary fill-current"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="font-semibold">{course.rating || 4.8}</span>
                                    <span className="text-neutral-500 font-normal">(172 reviews)</span>
                                </div>

                                <div className="bg-white text-neutral-800 text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xs">
                                    <HiOutlineUserGroup className="w-4 h-4 text-primary" />
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
                </div>
            </div>

            {/* Main Content Layout with Overlap */}
            <div className="w-full bg-[#FFFFFF] pb-20 -mt-16 sm:-mt-24 lg:-mt-28">
                <div className="custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column: Video Preview, Tabs, and Tab Content */}
                        <div className="lg:col-span-8 w-full">
                            {/* Hero Video Preview Player */}
                            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-neutral-900 shadow-xl border border-white/20 group">
                                <Image
                                    src={BannerUserImg}
                                    alt={courseTitle}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 65vw"
                                    className="object-cover object-center group-hover:scale-103 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors" />

                                <button
                                    type="button"
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/45 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl hover:scale-110 hover:bg-black/60 active:scale-95 transition-all cursor-pointer group/btn"
                                    aria-label="Play video preview"
                                >
                                    <FiPlay className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1 text-white group-hover/btn:scale-110 transition-transform" />
                                </button>
                            </div>

                            {/* Tabs Navigation Row */}
                            <div className="mt-8 sm:mt-10 flex items-center gap-2.5 sm:gap-3 flex-wrap">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("about")}
                                    className={`px-6 py-2 rounded-full text-sm sm:text-[15px] transition-all cursor-pointer ${
                                        activeTab === "about"
                                            ? "bg-secondary text-neutral-950 font-semibold shadow-xs"
                                            : "bg-[#F4F4F5] text-neutral-700 hover:bg-neutral-200/80 font-medium"
                                    }`}
                                >
                                    About
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("lessons")}
                                    className={`px-6 py-2 rounded-full text-sm sm:text-[15px] transition-all cursor-pointer ${
                                        activeTab === "lessons"
                                            ? "bg-secondary text-neutral-950 font-semibold shadow-xs"
                                            : "bg-[#F4F4F5] text-neutral-700 hover:bg-neutral-200/80 font-medium"
                                    }`}
                                >
                                    Lessons
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveTab("reviews")}
                                    className={`px-6 py-2 rounded-full text-sm sm:text-[15px] transition-all cursor-pointer ${
                                        activeTab === "reviews"
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

                        {/* Right Column: Sticky Sidebar Card */}
                        <div className="lg:col-span-4 w-full sticky top-24">
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
            </div>

            <div className="h-[1px] w-full bg-gray-200" />
        </article>
    );
}