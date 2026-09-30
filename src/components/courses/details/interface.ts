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
