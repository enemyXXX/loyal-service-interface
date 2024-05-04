export interface Master {
    id: string;
    name: string;
    surname: string;
    photo_url: string;
    role: string;
    active: boolean;
    rating: number;
    feedbacks: number;
    place: string;
    city: string;
    latitude: number;
    longitude: number;
    rate: number;
}

export interface MasterInfo {
    missedOrdersCount: number;
    activeOrdersCount: number;
}
