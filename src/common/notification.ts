import { Order } from 'src/common/order';

export type NotificationDefinition =
    | 'created_order'
    | 'completed_order'
    | 'missed_order'
    | 'cancelled_order'
    | 'declined_order'
    | 'lottery';

export interface UserNotification {
    id: string;
    date: Date;
    topic: string;
    description: string;
    definition: NotificationDefinition;
    checked: boolean;
    order?: Order;
}
