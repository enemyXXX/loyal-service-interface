export interface Master {
    id: string;
    name: string;
    surname: string;
    photo_url: string;
    role: string;
    active: boolean;
    rating: number;
    feedbacks: number;
}

export interface MasterInfo {
    missedOrdersCount: number;
    activeOrdersCount: number;
}
