export interface INavbarProps {
    className?: string;
}

export interface INavItem {
    id?: string | number;
    title: string;
    path: string;
}

export interface IFooterLink {
    title: string;
    path: string;
}

export interface IFooterColumn {
    id: number;
    links: IFooterLink[];
}