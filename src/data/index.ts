import { INavItem } from "@/types";

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
