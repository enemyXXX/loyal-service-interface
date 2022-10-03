export interface NewsElement {
    id: string;
    expired_at: Date;
    title: string;
    active: boolean;
    description: string;
    background: string[];
    horizontal?: boolean;
    image?: string;
    buttonText: string;
    linking: boolean;
    link?: string;
}
