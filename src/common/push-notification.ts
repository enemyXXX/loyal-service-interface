export type PushNotificationHandler = 'feedback' | 'history' | 'services' | 'news' | 'lottery';

export enum PushNotificationTypes {
    COMPLETED_ORDER = 'completed_order',
    LOTTERY = 'lottery',
    NEWS = 'news',
    VISIT = 'visit',
    SERVICES = 'services'
}

export type PushNotificationToken = string | null | undefined;
