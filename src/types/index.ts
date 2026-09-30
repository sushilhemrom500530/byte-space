import type { StaticImageData } from "next/image";

export interface INavbarProps {
    className?: string;
}

export interface INavItem {
    id?: string | number;
    title: string;
    path: string;
}

export interface IFooterLink {
    id?: string | number;
    title: string;
    path: string;
}

export interface IFooterColumn {
    id: number;
    links: IFooterLink[];
}

export interface IAuthLayoutProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export interface ILoginFormInputs {
    email: string;
    password: string;
}


export interface ICourseCard {
    id?: string | number;
    title: string;
    author: string;
    authorPrefix?: string;
    authorUrl?: string;
    rating?: number | string;
    level?: string;
    studentsCount?: string | number;
    avatars?: (string | StaticImageData)[];
    price: number | string;
    priceSuffix?: string;
    image: string | StaticImageData;
    imageAlt?: string;
    tags?: string[];
    lessons?: string | number;
    duration?: string;
    comments?: string | number;
    url?: string;
    className?: string;
}

export interface ITestimonialCardProps {
    id?: string | number;
    name: string;
    role: string;
    quote: string;
    avatar: string | StaticImageData;
    className?: string;
}
