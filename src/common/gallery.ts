export interface GalleryImage {
    id: string;
    image: string;
    images: string[];
    pinned?: boolean;
    date: Date;
    topic: string;
    service?: string;
    description?: string;
    master: string;
    likes: number;
}
