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
