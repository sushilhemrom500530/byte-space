"use client";

import { useState, useMemo, useRef } from "react";
import CoursesBanner from "@/components/courses/banner";
import CourseCard from "@/components/reuseable/course-card";
import { allCoursesList, courseTags } from "@/data/coursesList";
import { FiFilter, FiBarChart2, FiSliders, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

const PAGE_SIZE = 15;

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState("");
    const [bannerCategory, setBannerCategory] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string>("Featured");
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<"relevant" | "price-asc" | "price-desc">("relevant");
    const [currentPage, setCurrentPage] = useState(1);

    const catalogRef = useRef<HTMLDivElement>(null);

    // Filter and sort courses
    const filteredCourses = useMemo(() => {
        let result = [...allCoursesList];

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (course) =>
                    course.title?.toLowerCase().includes(query) ||
                    course.author?.toLowerCase().includes(query)
            );
        }

        if (bannerCategory) {
            result = result.filter(
                (course) =>
                    course.category?.toLowerCase() === bannerCategory.toLowerCase() ||
                    course.title?.toLowerCase().includes(bannerCategory.toLowerCase())
            );
        }

        if (activeTag && activeTag !== "Featured") {
            result = result.filter(
                (course) => course.category?.toLowerCase() === activeTag.toLowerCase()
            );
        }

        // Filter button category
        if (selectedFilterCategory) {
            result = result.filter(
                (course) =>
                    course.category?.toLowerCase() === selectedFilterCategory.toLowerCase()
            );
        }

        if (selectedLevel) {
            result = result.filter((course) => course.level === selectedLevel);
        }

        if (sortBy === "price-asc") {
            result.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
        } else if (sortBy === "price-desc") {
            result.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
        }

        return result;
    }, [searchQuery, bannerCategory, activeTag, selectedFilterCategory, selectedLevel, sortBy]);

    // Calculate pagination
    const totalPages = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE));
    const paginatedCourses = useMemo(() => {
        const startIndex = (currentPage - 1) * PAGE_SIZE;
        return filteredCourses.slice(startIndex, startIndex + PAGE_SIZE);
    }, [filteredCourses, currentPage]);


    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            if (catalogRef.current) {
                const elementTop = catalogRef.current.getBoundingClientRect().top + window.scrollY - 90;
                window.scrollTo({ top: elementTop, behavior: "smooth" });
            }
        }
    };

    // Handle tag click (reset page to 1)
    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        setCurrentPage(1);
    };

    return (
        <section className="w-full">
            <CoursesBanner
                searchQuery={searchQuery}
                onSearchChange={(query) => {
                    setSearchQuery(query);
                    setCurrentPage(1);
                }}
                selectedCategory={bannerCategory}
                onSelectCategory={(category) => {
                    setBannerCategory(category);
                    setCurrentPage(1);
                }}
            />

            {/* Courses Catalog Section */}
            <div ref={catalogRef} className="w-full bg-[#FFFFFF] pt-8 sm:pt-10 pb-16">
                <div className="custom-container">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        {/* Left Controls: Filter, Level, Category */}
                        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedLevel(null);
                                    setSelectedFilterCategory(null);
                                    setActiveTag("Featured");
                                    setSearchQuery("");
                                    setBannerCategory(null);
                                    setCurrentPage(1);
                                }}
                                className={`course-button ${selectedLevel || selectedFilterCategory || searchQuery || bannerCategory
                                    ? "border-primary bg-primary/10 text-primary font-semibold"
                                    : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                            >
                                <FiFilter className="w-4 h-4 text-neutral-600" />
                                <span>
                                    {selectedLevel || selectedFilterCategory || searchQuery || bannerCategory
                                        ? "Reset"
                                        : "Filter"}
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedLevel((prev) => (prev ? null : "Beginner"));
                                    setCurrentPage(1);
                                }}
                                className={`course-button ${selectedLevel
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                            >
                                <FiBarChart2 className="w-4 h-4 text-neutral-600" />
                                <span>{selectedLevel ? `Level: ${selectedLevel}` : "Level"}</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setSelectedFilterCategory((prev) =>
                                        prev ? null : "UI/UX Design"
                                    );
                                    setCurrentPage(1);
                                }}
                                className={`course-button ${selectedFilterCategory
                                    ? "border-primary bg-primary/5 text-primary"
                                    : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                            >
                                <BiCategory className="w-4.5 h-4.5 text-neutral-600" />
                                <span>
                                    {selectedFilterCategory
                                        ? `Category: ${selectedFilterCategory}`
                                        : "Category"}
                                </span>
                            </button>
                        </div>

                        {/* most relevant */}
                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={() =>
                                    setSortBy((prev) =>
                                        prev === "relevant"
                                            ? "price-asc"
                                            : prev === "price-asc"
                                                ? "price-desc"
                                                : "relevant"
                                    )
                                }
                                className="course-button border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                            >
                                <FiSliders className="w-4 h-4 text-neutral-600" />
                                <span>
                                    {sortBy === "relevant"
                                        ? "Most relevant"
                                        : sortBy === "price-asc"
                                            ? "Price: Low to High"
                                            : "Price: High to Low"}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Tag Filter Pills Row */}
                    <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2 pt-1 mb-8 sm:mb-10">
                        {courseTags.map((tag) => {
                            const isActive = activeTag === tag;
                            return (
                                <button
                                    key={tag}
                                    type="button"
                                    onClick={() => handleTagClick(tag)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${isActive
                                        ? "bg-secondary text-black font-semibold shadow-xs"
                                        : "bg-[#F4F4F5] text-neutral-800 hover:bg-neutral-200/80"
                                        }`}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>

                    {/* courses cards */}
                    {paginatedCourses.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full">
                            {paginatedCourses.map((course) => (
                                <CourseCard key={course.id} data={course} />
                            ))}
                        </div>
                    ) : (
                        <div className="w-full py-16 flex flex-col items-center justify-center text-center">
                            <p className="text-lg font-medium text-neutral-600">
                                No courses found matching your criteria.
                            </p>
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setBannerCategory(null);
                                    setActiveTag("Featured");
                                    setSelectedLevel(null);
                                    setSelectedFilterCategory(null);
                                    setCurrentPage(1);
                                }}
                                className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* pagination */}
                    {totalPages > 1 && (
                        <div className="mt-12 sm:mt-16 mb-6 flex items-center justify-center gap-4 sm:gap-6 select-none">
                            <button
                                type="button"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-neutral-800 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-2xs"
                                aria-label="Previous page"
                            >
                                <FiChevronLeft className="w-7 h-7 text-neutral-700 stroke-[2]" />
                            </button>

                            <div className="flex items-center gap-3 sm:gap-5">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                    const isCurrent = currentPage === page;
                                    return (
                                        <button
                                            key={page}
                                            type="button"
                                            onClick={() => handlePageChange(page)}
                                            className={`min-w-8 h-8 sm:min-w-9 sm:h-9 flex items-center justify-center text-base sm:text-[17px] transition-colors cursor-pointer ${isCurrent
                                                ? "font-bold text-neutral-950 scale-105"
                                                : "font-medium text-[#A1A1AA] hover:text-neutral-900"
                                                }`}
                                            aria-current={isCurrent ? "page" : undefined}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                type="button"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-neutral-800 hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-2xs"
                                aria-label="Next page"
                            >
                                <FiChevronRight className="w-7 h-7 text-neutral-700 stroke-[2]" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="h-[1px] w-full bg-gray-200" />
        </section>
    );
}