import { INavItem, IFooterColumn, IFooterLink } from "@/types";

import coursesJson from "./courses.json";
import learnFigmaImg from "@/assets/skills/figma.jpg";
import bigDataImg from "@/assets/skills/big-data.jpg";
import digitalAssetsImg from "@/assets/skills/digital-assets.jpg";
import balancingImg from "@/assets/skills/balancing.jpg";
import moneyManageImg from "@/assets/skills/money-manage.jpg";
import startupIdeaImg from "@/assets/skills/startup-success.jpg";
import student1 from "@/assets/avatars/student-1.png";
import student2 from "@/assets/avatars/student-2.png";
import student3 from "@/assets/avatars/student-3.png";
import student4 from "@/assets/avatars/student-4.png";
import { ICourseCard } from "@/types";


export const navItems: INavItem[] = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Courses",
        path: "/courses",
    },
    {
        id: 3,
        title: "Creators",
        path: "/creators",
    },
];

export const navLinks = navItems;
export const menuItems = navItems;

export const authItems: INavItem[] = [
    {
        id: 1,
        title: "Sign In",
        path: "/auth/sign-in",
    },
    {
        id: 2,
        title: "Join Us",
        path: "/auth/sign-up",
    },
];

export const footerNavColumns: IFooterColumn[] = [
    {
        id: 1,
        links: [
            {
                id: 1,
                title: "Featured Courses",
                path: "#courses"
            },
            {
                id: 2,
                title: "Featured Categories",
                path: "#categories"
            },
            {
                id: 3,
                title: "Business",
                path: "#categories/business"
            },
            {
                id: 4,
                title: "IT",
                path: "#categories/it"
            },
            {
                id: 5,
                title: "Design",
                path: "#categories/design"
            },
        ],
    },
    {
        id: 2,
        links: [
            {
                id: 1,
                title: "Development",
                path: "#categories/development"
            },
            {
                id: 2,
                title: "Marketing",
                path: "#categories/marketing"
            },
            {
                id: 3,
                title: "Photography",
                path: "#categories/photography"
            },
            {
                id: 4,
                title: "Finance",
                path: "#categories/finance"
            },
            {
                id: 5,
                title: "Sport",
                path: "#categories/sport"
            },
        ],
    },
    {
        id: 3,
        links: [
            {
                id: 1,
                title: "Become a Creator",
                path: "#creators"
            },
            {
                id: 2,
                title: "Affiliate Program",
                path: "#affiliate"
            },
            {
                id: 3,
                title: "Contact",
                path: "#contact"
            },
            {
                id: 4,
                title: "Help",
                path: "#help"
            },
            {
                id: 5,
                title: "About",
                path: "#about"
            },
        ],
    },
];

export const footerBottomLinks: IFooterLink[] = [
    {
        id: 1,
        title: "Privacy Policy",
        path: "#privacy-policy"
    },
    {
        id: 2,
        title: "Terms of Service",
        path: "#terms-of-service"
    },
    {
        id: 3,
        title: "Cookies Settings",
        path: "#cookies-settings"
    },
];



export const defaultCourseAvatars = [student1, student2, student3, student4];

export const coursesData: ICourseCard[] = [
    {
        id: 1,
        title: "Learn Figma from Basic",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: [student1, student2, student3, student4],
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: learnFigmaImg,
        url: "/courses/view/1",
    },
    {
        id: 2,
        title: "Build Digital Asset",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: [student1, student2, student3, student4],
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: digitalAssetsImg,
        url: "/courses/view/2",
    },
    {
        id: 3,
        title: "the Power of Big Data",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: [student1, student2, student3, student4],
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: bigDataImg,
        url: "/courses/view/3",
    },
    {
        id: 4,
        title: "Balancing Productivity and Life",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: [student1, student2, student3, student4],
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: balancingImg,
        url: "/courses/view/4",
    },
    {
        id: 5,
        title: "Mastering Money Management",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: [student1, student2, student3, student4],
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: moneyManageImg,
        url: "/courses/view/5",
    },
    {
        id: 6,
        title: "From Idea to Startup Success",
        author: "purepearl studio",
        authorPrefix: "by",
        authorUrl: "/creators/purepearl-studio",
        rating: 4.5,
        level: "Beginner",
        studentsCount: "26+",
        avatars: [student1, student2, student3, student4],
        price: 25,
        priceSuffix: "/lifetime",
        lessons: "17 Lessons",
        duration: "2 hours 16 mins",
        comments: "59 Comments",
        image: startupIdeaImg,
        url: "/courses/view/6",
    },
];

export { coursesJson };



export const sortOptions = [
    {
        id: "relevant", label: "Most relevant"
    },
    {
        id: "popular", label: "Most popular"
    },
    {
        id: "rating", label: "Highest rated"
    },
    {
        id: "price-asc", label: "Price: Low to High"
    },
    {
        id: "price-desc", label: "Price: High to Low"
    },
] as const;

export type SortType = (typeof sortOptions)[number]["id"];

export const levelOptions = [
    { id: null, label: "All Levels" },
    { id: "Beginner", label: "Beginner" },
    { id: "Intermediate", label: "Intermediate" },
    { id: "Advanced", label: "Advanced" },
];

export const categoryOptions = [
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