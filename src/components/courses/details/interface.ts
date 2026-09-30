import { ICourseCard } from "@/types";

export interface ICourseDetailsProps {
    courseId: string;
}

export type CourseTabType = "about" | "lessons" | "reviews";

export interface ICourseModule {
    id: number;
    title: string;
    description: string;
}

export interface IReviewItem {
    id: number;
    author: string;
    role: string;
    timeAgo: string;
    rating: number;
    avatar?: string;
    comment: string;
}

export interface ICourseExtendedDetails extends ICourseCard {
    subtitle?: string;
    videoDuration?: string;
    totalLessonsCount?: number;
    modules?: ICourseModule[];
    reviewsList?: IReviewItem[];
}

export interface ICourseHeroProps {
    title: string;
    subtitle?: string;
    author: string;
    authorUrl?: string;
    level: string;
    rating: number;
    reviewsCount?: number;
    studentsCount: string | number;
}


export interface ICourseSidebarProps {
    price: number | string;
    priceSuffix?: string;
    totalLessons?: string | number;
    duration?: string;
    creatorName?: string;
    creatorRole?: string;
    creatorUrl?: string;
}
