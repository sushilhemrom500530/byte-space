"use client";

import { useState } from "react";
import Image from "next/image";
import alexImg from "@/assets/users/alex.png";
import CourseCard from "@/components/reuseable/course-card";
import { coursesData } from "@/data";
import { FiFilter, FiBarChart2 } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { BsFilterLeft } from "react-icons/bs";

export default function Creators() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(12);
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleFollowToggle = () => {
        setIsFollowing((prev) => {
            const next = !prev;
            setFollowersCount((count) => (next ? count + 1 : count - 1));
            return next;
        });
    };

    return (
        <section className="w-full">
            {/* Creator Profile Hero Section */}
            <div className="w-full bg-primary-grid text-white pt-[100px]">
                <div className="custom-container pt-6 sm:pt-7 pb-14 sm:pb-16">
                    <div className="flex items-start gap-4 sm:gap-5">
                        {/* Creator Avatar */}
                        <div className="w-[68px] h-[68px] rounded-[18px] sm:rounded-[20px] overflow-hidden relative shrink-0 shadow-md">
                            <Image
                                src={alexImg}
                                alt="PurePearl Studio"
                                fill
                                sizes="68px"
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div className="flex flex-col justify-center pt-0.5">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h1 className="text-2xl sm:text-[32px] font-bold text-white tracking-tight leading-none">
                                    PurePearl Studio
                                </h1>
                                <span className="bg-secondary text-black text-xs font-semibold px-3.5 py-1 rounded-full flex items-center justify-center shrink-0">
                                    Creator
                                </span>
                            </div>
                            <p className="text-white/80 text-sm font-normal mt-1.5">
                                Passionate UI/UX, Web designer
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 sm:mt-9 max-w-4xl text-white/90 text-sm sm:text-[15px] leading-relaxed space-y-3 font-normal">
                        <p>
                            Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll discover the passion, expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
                        </p>
                        <p>
                            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="bg-white rounded-full px-5 py-2 text-sm font-medium flex items-center shadow-xs">
                                <span className="text-primary font-bold mr-1.5">3</span>
                                <span className="text-neutral-900">Products</span>
                            </div>
                            <div className="bg-white rounded-full px-5 py-2 text-sm font-medium flex items-center shadow-xs">
                                <span className="text-primary font-bold mr-1.5">{followersCount}</span>
                                <span className="text-neutral-900">Followers</span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={handleFollowToggle}
                            className={`font-semibold text-sm px-7 py-2 rounded-full transition-all shadow-xs cursor-pointer active:scale-95 ${isFollowing
                                ? "bg-white text-primary hover:bg-white/90"
                                : "bg-secondary text-black hover:brightness-105"
                                }`}
                        >
                            {isFollowing ? "Following" : "Follow"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Courses / Products Section with Filter Bar */}
            <div className="w-full bg-[#FFFFFF] py-10 sm:py-14">
                <div className="custom-container">
                    {/* Filter & Sort Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
                        {/* Left Filter Options */}
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                            <button
                                type="button"
                                className="course-button border-[#E5E7EB]"
                            >
                                <FiFilter className="w-4 h-4 text-neutral-600" />
                                <span>Filter</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedLevel(selectedLevel ? null : "Beginner")}
                                className={`course-button ${selectedLevel
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                            >
                                <FiBarChart2 className="w-4 h-4 text-neutral-600" />
                                <span>Level</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => setSelectedCategory(selectedCategory ? null : "Design")}
                                className={`course-button ${selectedCategory
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                            >
                                <BiCategory className="w-4.5 h-4.5 text-neutral-600" />
                                <span>Category</span>
                            </button>
                        </div>

                        <div className="flex items-center">
                            <button
                                type="button"
                                className="course-button border-[#E5E7EB]"
                            >
                                <BsFilterLeft className="w-5 h-5 text-neutral-600" />
                                <span>Most relevant</span>
                            </button>
                        </div>
                    </div>

                    {/* Courses Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full">
                        {coursesData.map((course) => (
                            <CourseCard key={course.id} data={course} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}