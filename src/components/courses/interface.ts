
export interface ICoursesBannerProps {
    searchQuery?: string;
    onSearchChange?: (query: string) => void;
    selectedCategory?: string | null;
    onSelectCategory?: (category: string | null) => void;
    categories?: string[];
}
