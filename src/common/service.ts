export interface Service {
    order: number;
    active: boolean;
    id: string;
    title: string;
    description: string;
    min_duration: number;
    max_duration: number;
    price: number;
    photo_url: string;
    consultation: boolean;
    undefined_max_price: boolean;
    without_time?: string[];
    min_order_date_hour?: number;
    max_order_date_hour?: number;
    master: string;
    disable_alone: boolean;
    gold_fee?: boolean;
}

export type SelectedService = Service;

export interface SelectedServicesInfo {
    count: number;
    duration: number;
    amount: number;
    prevAmount?: number;
    min_order_date_hour?: number;
    max_order_date_hour?: number;
}
