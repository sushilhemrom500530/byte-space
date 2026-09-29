"use client";

import { useState } from "react";
import Image from "next/image";
import alexImg from "@/assets/users/alex.png";
import CourseCard from "@/components/reuseable/course-card";
import { coursesData } from "@/data";

export default function Creators() {
    const [isFollowing, setIsFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(12);

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

            {/* Courses / Products Section by Creator */}
            <div className="w-full bg-[#FAFAFA] py-12 sm:py-16">
                <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[71px]">
                    <div className="mb-8 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-[#111827] tracking-tight">
                            Courses by PurePearl Studio
                        </h2>
                        <span className="text-sm font-medium text-neutral-500">
                            3 Available Courses
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center sm:justify-items-start">
                        {coursesData.map((course) => (
                            <CourseCard key={course.id} data={course} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}