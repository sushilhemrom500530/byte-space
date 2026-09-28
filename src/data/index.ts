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
            { title: "Featured Courses", path: "/courses" },
            { title: "Featured Categories", path: "/categories" },
            { title: "Business", path: "/categories/business" },
            { title: "IT", path: "/categories/it" },
            { title: "Design", path: "/categories/design" },
        ],
    },
    {
        id: 2,
        links: [
            { title: "Development", path: "/categories/development" },
            { title: "Marketing", path: "/categories/marketing" },
            { title: "Photography", path: "/categories/photography" },
            { title: "Finance", path: "/categories/finance" },
            { title: "Sport", path: "/categories/sport" },
        ],
    },
    {
        id: 3,
        links: [
            { title: "Become a Creator", path: "/creators" },
            { title: "Affiliate Program", path: "/affiliate" },
            { title: "Contact", path: "/contact" },
            { title: "Help", path: "/help" },
            { title: "About", path: "/about" },
        ],
    },
];

export const footerBottomLinks: IFooterLink[] = [
    { title: "Privacy Policy", path: "/privacy-policy" },
    { title: "Terms of Service", path: "/terms-of-service" },
    { title: "Cookies Settings", path: "/cookies-settings" },
];
