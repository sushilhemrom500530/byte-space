import { ICourseCard } from "@/types";
import { SortType } from "@/data";

export interface ICoursesBannerProps {
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    selectedCategory?: string | null;
    onSelectCategory?: (category: string | null) => void;
    categories?: string[];
}

export interface ICoursesFilterProps {
    selectedLevel: string | null;
    onSelectLevel: (level: string | null) => void;
    selectedFilterCategory: string | null;
    onSelectCategory: (category: string | null) => void;
    sortBy: SortType;
    onSelectSortBy: (sort: SortType) => void;
    activeTag: string;
    onSelectTag: (tag: string) => void;
    onReset: () => void;
    hasActiveFilters: boolean;
    courses?: ICourseCard[];
    children?: React.ReactNode;
}
