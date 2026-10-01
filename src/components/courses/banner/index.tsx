"use client";

import { ICoursesBannerProps } from "@/components/courses/interface";
import { useState, useRef, useEffect } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";

const defaultCategories = [
    "All Courses",
    "Design",
    "Development",
    "Business",
    "Marketing",
    "Data Analytics",
    "Finance",
];

export default function CoursesBanner({
    searchQuery = "",
    onSearchChange,
    selectedCategory = null,
    onSelectCategory,
    categories = defaultCategories,
}: ICoursesBannerProps) {
    const [internalSearch, setInternalSearch] = useState("");
    const isControlled = onSearchChange !== undefined;
    const searchValue = isControlled ? searchQuery : internalSearch;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle outside click to close category dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isDropdownOpen]);

    const handleSearchChange = (value: string) => {
        if (!isControlled) {
            setInternalSearch(value);
        }
        if (onSearchChange) {
            onSearchChange(value);
        }
    };

    const handleSelectCategory = (category: string) => {
        const value = category === "All Courses" ? null : category;
        if (onSelectCategory) {
            onSelectCategory(value);
        }
        setIsDropdownOpen(false);
    };

    const displayCategoryName = selectedCategory || "Courses";

    return (
        <section className="w-full bg-primary-grid relative flex flex-col justify-center items-center h-auto min-h-[320px] sm:min-h-[340px] lg:h-[360px] pt-[75px] md:pt-[80px] pb-8 px-4 sm:px-6 overflow-visible select-none">
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">

                <h1 className="text-2xl sm:text-3xl md:text-[38px] lg:text-[40px] font-bold text-white tracking-tight leading-tight sm:leading-none">
                    Find Your Next Course
                </h1>

                <div className="mt-6 sm:mt-7 w-full flex items-center justify-center gap-2.5 sm:gap-3.5 max-w-[560px]">
                    <div className="flex-1 min-w-0 h-[48px] sm:h-[50px] lg:h-[52px] bg-white rounded-full flex items-center px-4 sm:px-5 gap-2.5 sm:gap-3 shadow-xs">
                        <FiSearch className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#9CA3AF] shrink-0" />
                        <input
                            type="text"
                            value={searchValue}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            placeholder="Search"
                            className="w-full bg-transparent text-sm sm:text-[15px] text-neutral-800 placeholder:text-[#9CA3AF] focus:outline-none"
                            aria-label="Search courses"
                        />
                    </div>

                    {/* Courses Dropdown Button */}
                    <div className="relative shrink-0" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="h-[48px] sm:h-[50px] lg:h-[52px] bg-secondary text-neutral-950 font-semibold text-sm sm:text-[15px] px-5 sm:px-6 rounded-full flex items-center gap-1.5 sm:gap-2 hover:brightness-95 transition-all cursor-pointer shadow-xs whitespace-nowrap"
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="listbox"
                        >
                            <span>{displayCategoryName}</span>
                            <FiChevronDown
                                className={`w-4 h-4 stroke-[2.5] transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-48 sm:w-52 bg-white rounded-2xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                                <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
                                    Filter by Category
                                </div>
                                <div className="max-h-60 overflow-y-auto" role="listbox">
                                    {categories.map((category) => {
                                        const isSelected =
                                            (category === "All Courses" && !selectedCategory) ||
                                            selectedCategory === category;
                                        return (
                                            <button
                                                key={category}
                                                type="button"
                                                onClick={() => handleSelectCategory(category)}
                                                className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer flex items-center justify-between ${isSelected
                                                    ? "bg-neutral-100 text-primary font-semibold"
                                                    : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                                                    }`}
                                                role="option"
                                                aria-selected={isSelected}
                                            >
                                                <span>{category}</span>
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
            </div>
        </section>
    );
}
