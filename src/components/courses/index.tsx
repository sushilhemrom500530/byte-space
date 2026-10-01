"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import CoursesBanner from "@/components/courses/banner";
import Filter from "@/components/courses/filter";
import { allCoursesList } from "@/data/coursesList";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SortType } from "@/data";

const PAGE_SIZE = 15;

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState("");
    const [bannerCategory, setBannerCategory] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string>("Featured");
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<SortType>("relevant");
    const [currentPage, setCurrentPage] = useState(1);

    const catalogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const query = params.get("search") || params.get("q");
            if (query) {
                setSearchQuery(query);
            }
        }
    }, []);

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
        } else if (sortBy === "rating") {
            result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
        } else if (sortBy === "popular") {
            result.sort((a, b) => {
                const countA = parseInt(String(a.studentsCount || "0").replace(/\D/g, "") || "0");
                const countB = parseInt(String(b.studentsCount || "0").replace(/\D/g, "") || "0");
                return countB - countA;
            });
        }

        return result;
    }, [searchQuery, bannerCategory, activeTag, selectedFilterCategory, selectedLevel, sortBy]);

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

    const handleReset = () => {
        setSelectedLevel(null);
        setSelectedFilterCategory(null);
        setActiveTag("Featured");
        setSearchQuery("");
        setBannerCategory(null);
        setSortBy("relevant");
        setCurrentPage(1);
    };

    const hasActiveFilters = Boolean(
        selectedLevel ||
        selectedFilterCategory ||
        searchQuery ||
        bannerCategory ||
        sortBy !== "relevant" ||
        activeTag !== "Featured"
    );

    return (
        <section className="w-full">
            {/* banner */}
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

            {/* courses catalog */}
            <div ref={catalogRef} className="w-full bg-[#FFFFFF] pt-8 sm:pt-10 pb-16">
                <div className="custom-container">
                    {/* filter */}
                    <Filter
                        selectedLevel={selectedLevel}
                        onSelectLevel={(level) => {
                            setSelectedLevel(level);
                            setCurrentPage(1);
                        }}
                        selectedFilterCategory={selectedFilterCategory}
                        onSelectCategory={(category) => {
                            setSelectedFilterCategory(category);
                            setCurrentPage(1);
                        }}
                        sortBy={sortBy}
                        onSelectSortBy={(sort) => {
                            setSortBy(sort);
                            setCurrentPage(1);
                        }}
                        activeTag={activeTag}
                        onSelectTag={(tag) => {
                            setActiveTag(tag);
                            setCurrentPage(1);
                        }}
                        onReset={handleReset}
                        hasActiveFilters={hasActiveFilters}
                        courses={paginatedCourses}
                    />

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