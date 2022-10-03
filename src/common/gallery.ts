export interface GalleryDetails {
    id: string;
    title: string;
}

export interface GalleryImage {
    id: string;
    topic: string;
    date: Date;
    thumbUrl: string;
    mainUrl: string;
    images: string[];
}
