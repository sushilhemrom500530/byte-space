"use client";

import { useState, useRef, useEffect } from "react";
import CourseCard from "@/components/reuseable/course-card";
import { courseTags } from "@/data/coursesList";
import { categoryOptions, levelOptions, sortOptions } from "@/data";
import { FiFilter, FiBarChart2, FiSliders } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { ICoursesFilterProps } from "@/components/courses/interface";

export default function Filter({
    selectedLevel,
    onSelectLevel,
    selectedFilterCategory,
    onSelectCategory,
    sortBy,
    onSelectSortBy,
    activeTag,
    onSelectTag,
    onReset,
    hasActiveFilters,
    courses,
    children,
}: ICoursesFilterProps) {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isLevelOpen, setIsLevelOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const sortRef = useRef<HTMLDivElement>(null);
    const levelRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);

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

    const currentSortLabel =
        sortOptions.find((opt) => opt.id === sortBy)?.label || "Most relevant";

    return (
        <div className="w-full">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <button
                        type="button"
                        onClick={onReset}
                        className={`course-button ${
                            hasActiveFilters
                                ? "border-primary bg-primary/10 text-primary font-semibold"
                                : "border-[#E5E7EB] bg-white text-neutral-800 hover:bg-neutral-50"
                        }`}
                    >
                        <FiFilter className="w-4 h-4 text-neutral-600" />
                        <span>{hasActiveFilters ? "Reset" : "Filter"}</span>
                    </button>

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
                                                    onSelectLevel(opt.id);
                                                    setIsLevelOpen(false);
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
                                                    onSelectCategory(opt.id);
                                                    setIsCategoryOpen(false);
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
                                                onSelectSortBy(opt.id);
                                                setIsSortOpen(false);
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

            <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-2 pt-1 mb-8 sm:mb-10">
                {courseTags.map((tag) => {
                    const isActive = activeTag === tag;
                    return (
                        <button
                            key={tag}
                            type="button"
                            onClick={() => onSelectTag(tag)}
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

            {children ? (
                children
            ) : courses && courses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full">
                    {courses.map((course) => (
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
                        onClick={onReset}
                        className="mt-4 px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                        Clear all filters
                    </button>
                </div>
            )}
        </div>
    );
}