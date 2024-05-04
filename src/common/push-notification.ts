export type PushNotificationHandler = 'feedback' | 'history' | 'services'
    | 'news' | 'lottery' | 'discount'
    | 'chat';

export enum PushNotificationTypes {
    COMPLETED_ORDER = 'completed_order',
    LOTTERY = 'lottery',
    NEWS = 'news',
    VISIT = 'visit',
    SERVICES = 'services',
    DISCOUNT = 'discount',
    CHAT = 'chat'
}

export type PushNotificationToken = string | null | undefined;
