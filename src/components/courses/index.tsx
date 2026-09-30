"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import CoursesBanner from "@/components/courses/banner";
import CourseCard from "@/components/reuseable/course-card";
import { allCoursesList, courseTags } from "@/data/coursesList";
import { FiFilter, FiBarChart2, FiSliders, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

const PAGE_SIZE = 15;

const sortOptions = [
    { id: "relevant", label: "Most relevant" },
    { id: "popular", label: "Most popular" },
    { id: "rating", label: "Highest rated" },
    { id: "price-asc", label: "Price: Low to High" },
    { id: "price-desc", label: "Price: High to Low" },
] as const;

type SortType = (typeof sortOptions)[number]["id"];

const levelOptions = [
    { id: null, label: "All Levels" },
    { id: "Beginner", label: "Beginner" },
    { id: "Intermediate", label: "Intermediate" },
    { id: "Advanced", label: "Advanced" },
];

const categoryOptions = [
    { id: null, label: "All Categories" },
    { id: "UI/UX Design", label: "UI/UX Design" },
    { id: "Marketing", label: "Marketing" },
    { id: "Social Media", label: "Social Media" },
    { id: "Drawing & Painting", label: "Drawing & Painting" },
    { id: "Creative Marketing", label: "Creative Marketing" },
    { id: "Animation", label: "Animation" },
    { id: "Music", label: "Music" },
    { id: "Cooking", label: "Cooking" },
];

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState("");
    const [bannerCategory, setBannerCategory] = useState<string | null>(null);
    const [activeTag, setActiveTag] = useState<string>("Featured");
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [selectedFilterCategory, setSelectedFilterCategory] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<SortType>("relevant");
    const [currentPage, setCurrentPage] = useState(1);

    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const catalogRef = useRef<HTMLDivElement>(null);
    const sortRef = useRef<HTMLDivElement>(null);
    const levelRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click or ESC key
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (sortRef.current && !sortRef.current.contains(target)) {
                setIsSortOpen(false);
            }
            if (levelRef.current && !levelRef.current.contains(target)) {
                setIsLevelOpen(false);
            }
            if (categoryRef.current && !categoryRef.current.contains(target)) {
                setIsCategoryOpen(false);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsSortOpen(false);
                setIsLevelOpen(false);
                setIsCategoryOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

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
        } else if (sortBy === "rating") {
            result.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
        } else if (sortBy === "popular") {
            result.sort((a, b) => {
                const countA = parseInt(a.studentsCount?.replace(/\D/g, "") || "0");
                const countB = parseInt(b.studentsCount?.replace(/\D/g, "") || "0");
                return countB - countA;
            });
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

    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        setCurrentPage(1);
    };

    const currentSortLabel =
        sortOptions.find((opt) => opt.id === sortBy)?.label || "Most relevant";

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
                                    setSortBy("relevant");
                                    setCurrentPage(1);
                                }}
                                className={`course-button ${
                                    selectedLevel ||
                                    selectedFilterCategory ||
                                    searchQuery ||
                                    bannerCategory ||
                                    sortBy !== "relevant"
                                        ? "border-primary bg-primary/10 text-primary font-semibold"
                                        : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                }`}
                            >
                                <FiFilter className="w-4 h-4 text-neutral-600" />
                                <span>
                                    {selectedLevel ||
                                    selectedFilterCategory ||
                                    searchQuery ||
                                    bannerCategory ||
                                    sortBy !== "relevant"
                                        ? "Reset"
                                        : "Filter"}
                                </span>
                            </button>

                            {/* Level Dropdown */}
                            <div className="relative" ref={levelRef}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsLevelOpen((prev) => !prev);
                                        setIsSortOpen(false);
                                        setIsCategoryOpen(false);
                                    }}
                                    className={`course-button ${
                                        selectedLevel || isLevelOpen
                                            ? "border-primary bg-primary/5 text-primary"
                                            : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                                    aria-expanded={isLevelOpen}
                                >
                                    <FiBarChart2 className="w-4 h-4 text-neutral-600" />
                                    <span>{selectedLevel ? `Level: ${selectedLevel}` : "Level"}</span>
                                </button>

                                {isLevelOpen && (
                                    <div className="absolute left-0 top-full mt-2 w-44 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                                        <div className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                                            Select level
                                        </div>
                                        <div className="max-h-60 overflow-y-auto" role="listbox">
                                            {levelOptions.map((opt) => {
                                                const isSelected = selectedLevel === opt.id;
                                                return (
                                                    <button
                                                        key={opt.label}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedLevel(opt.id);
                                                            setIsLevelOpen(false);
                                                            setCurrentPage(1);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                                                            isSelected
                                                                ? "bg-neutral-100 text-primary font-semibold"
                                                                : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                                                        }`}
                                                        role="option"
                                                        aria-selected={isSelected}
                                                    >
                                                        <span>{opt.label}</span>
                                                        {isSelected && (
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Category Dropdown */}
                            <div className="relative" ref={categoryRef}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsCategoryOpen((prev) => !prev);
                                        setIsSortOpen(false);
                                        setIsLevelOpen(false);
                                    }}
                                    className={`course-button ${
                                        selectedFilterCategory || isCategoryOpen
                                            ? "border-primary bg-primary/5 text-primary"
                                            : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                    }`}
                                    aria-expanded={isCategoryOpen}
                                >
                                    <BiCategory className="w-4.5 h-4.5 text-neutral-600" />
                                    <span>
                                        {selectedFilterCategory
                                            ? `Category: ${selectedFilterCategory}`
                                            : "Category"}
                                    </span>
                                </button>

                                {isCategoryOpen && (
                                    <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                                        <div className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                                            Select category
                                        </div>
                                        <div className="max-h-60 overflow-y-auto" role="listbox">
                                            {categoryOptions.map((opt) => {
                                                const isSelected =
                                                    selectedFilterCategory === opt.id;
                                                return (
                                                    <button
                                                        key={opt.label}
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedFilterCategory(opt.id);
                                                            setIsCategoryOpen(false);
                                                            setCurrentPage(1);
                                                        }}
                                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                                                            isSelected
                                                                ? "bg-neutral-100 text-primary font-semibold"
                                                                : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                                                        }`}
                                                        role="option"
                                                        aria-selected={isSelected}
                                                    >
                                                        <span>{opt.label}</span>
                                                        {isSelected && (
                                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* most relevant dropdown */}
                        <div className="relative" ref={sortRef}>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsSortOpen((prev) => !prev);
                                    setIsLevelOpen(false);
                                    setIsCategoryOpen(false);
                                }}
                                className={`course-button ${
                                    sortBy !== "relevant" || isSortOpen
                                        ? "border-primary bg-primary/5 text-primary"
                                        : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                                }`}
                                aria-expanded={isSortOpen}
                            >
                                <FiSliders className="w-4 h-4 text-neutral-600" />
                                <span>{currentSortLabel}</span>
                            </button>

                            {isSortOpen && (
                                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                                    <div className="px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                                        Sort by
                                    </div>
                                    <div className="max-h-60 overflow-y-auto" role="listbox">
                                        {sortOptions.map((opt) => {
                                            const isSelected = sortBy === opt.id;
                                            return (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    onClick={() => {
                                                        setSortBy(opt.id);
                                                        setIsSortOpen(false);
                                                        setCurrentPage(1);
                                                    }}
                                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${
                                                        isSelected
                                                            ? "bg-neutral-100 text-primary font-semibold"
                                                            : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                                                    }`}
                                                    role="option"
                                                    aria-selected={isSelected}
                                                >
                                                    <span>{opt.label}</span>
                                                    {isSelected && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
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
                                    className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all cursor-pointer ${
                                        isActive
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
                                    setSortBy("relevant");
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
                                            className={`min-w-8 h-8 sm:min-w-9 sm:h-9 flex items-center justify-center text-base sm:text-[17px] transition-colors cursor-pointer ${
                                                isCurrent
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