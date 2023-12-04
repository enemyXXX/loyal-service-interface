export enum OrderStatusList {
    active = 'active',
    cancelled = 'cancelled',
    completed = 'completed',
    missed = 'missed'
}

export type OrderStatus =
    | OrderStatusList.active
    | OrderStatusList.cancelled
    | OrderStatusList.completed
    | OrderStatusList.missed;

export interface Order {
    id: string;
    date: Date;
    description?: string;
    start_hour: number;
    end_hour: number;
    master: string;
    user_name: string;
    user_phone: string;
    status: OrderStatus;
    total: number;
    notify: number;
    isNotified: boolean;
    services: string[];
    created_at: Date;
    feedback: string;
    visitsCount?: number;
    lastVisit?: Date;
    avatar?: string | null;
    min_order_date_hour?: number;
    max_order_date_hour?: number;
}

export interface SelectedTime {
    start_hour: number;
    end_hour: number;
}
