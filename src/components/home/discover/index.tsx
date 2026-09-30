"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/reuseable/course-card";
import { allCoursesList } from "@/data/coursesList";

const initialTags = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
];

const extraTags = [
    "Artificial Intelligence",
    "Mobile Development",
    "Leadership",
    "Finance",
    "Personal Growth",
    "Game Design",
];

export default function DiscoverSection() {
    const [activeTag, setActiveTag] = useState("Featured");
    const [showMore, setShowMore] = useState(false);

    const visibleTags = showMore ? [...initialTags, ...extraTags] : initialTags;

    const displayedCourses = useMemo(() => {
        if (activeTag === "Featured") {
            return allCoursesList.slice(0, 6);
        }
        const filtered = allCoursesList.filter(
            (course) =>
                course.category?.toLowerCase() === activeTag.toLowerCase() ||
                course.tags?.some((t) => t.toLowerCase() === activeTag.toLowerCase())
        );
        return filtered.length > 0 ? filtered.slice(0, 6) : allCoursesList.slice(0, 6);
    }, [activeTag]);

    return (
        <section className="w-full bg-white py-14 sm:py-18 lg:py-24 select-none">
            <div className="custom-container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-neutral-950 tracking-tight leading-[1.18]">
                        Discover Your Passion, <br className="hidden sm:inline" />
                        Build Your Skills
                    </h2>
                    <p className="common-description mt-3 sm:mt-4 max-w-2xl mx-auto">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a
                        variety of courses across different fields, from technology to the arts, and
                        make a difference in your career and life.
                    </p>
                </div>

                {/* Filter Tags */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-[880px] mx-auto mb-10 sm:mb-12 lg:mb-16">
                    {visibleTags.map((tag) => {
                        const isActive = activeTag === tag;
                        return (
                            <button
                                key={tag}
                                type="button"
                                onClick={() => setActiveTag(tag)}
                                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                                    isActive
                                        ? "bg-secondary text-black font-semibold shadow-xs"
                                        : "bg-[#F6F6F7] text-[#52525B] hover:text-black hover:bg-[#EBEBED]"
                                }`}
                            >
                                {tag}
                            </button>
                        );
                    })}
                    <button
                        type="button"
                        onClick={() => setShowMore(!showMore)}
                        className="text-primary hover:underline text-xs sm:text-sm font-semibold px-3 py-2 cursor-pointer transition-colors"
                    >
                        {showMore ? "- Less" : "+ More"}
                    </button>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
                    {displayedCourses.map((course) => (
                        <CourseCard key={course.id} data={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}