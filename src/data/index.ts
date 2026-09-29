import { INavItem, IFooterColumn, IFooterLink } from "@/types";

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
        path: "/auth/join-us",
    },
];

export const footerNavColumns: IFooterColumn[] = [
    {
        id: 1,
        links: [
            {
                id: 1,
                title: "Featured Courses",
                path: "/courses"
            },
            {
                id: 2,
                title: "Featured Categories",
                path: "/categories"
            },
            {
                id: 3,
                title: "Business",
                path: "/categories/business"
            },
            {
                id: 4,
                title: "IT",
                path: "/categories/it"
            },
            {
                id: 5,
                title: "Design",
                path: "/categories/design"
            },
        ],
    },
    {
        id: 2,
        links: [
            {
                id: 1,
                title: "Development",
                path: "/categories/development"
            },
            {
                id: 2,
                title: "Marketing",
                path: "/categories/marketing"
            },
            {
                id: 3,
                title: "Photography",
                path: "/categories/photography"
            },
            {
                id: 4,
                title: "Finance",
                path: "/categories/finance"
            },
            {
                id: 5,
                title: "Sport",
                path: "/categories/sport"
            },
        ],
    },
    {
        id: 3,
        links: [
            {
                id: 1,
                title: "Become a Creator",
                path: "/creators"
            },
            {
                id: 2,
                title: "Affiliate Program",
                path: "/affiliate"
            },
            {
                id: 3,
                title: "Contact",
                path: "/contact"
            },
            {
                id: 4,
                title: "Help",
                path: "/help"
            },
            {
                id: 5,
                title: "About",
                path: "/about"
            },
        ],
    },
];

export const footerBottomLinks: IFooterLink[] = [
    {
        id: 1,
        title: "Privacy Policy",
        path: "/privacy-policy"
    },
    {
        id: 2,
        title: "Terms of Service",
        path: "/terms-of-service"
    },
    {
        id: 3,
        title: "Cookies Settings",
        path: "/cookies-settings"
    },
];
