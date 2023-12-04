export interface UserLoyalty {
    id: string;
    user_phone: string;
    points: number;
    visit_points: number;
    admin_points: number;
    total_points: number;
    referral?: string;
    noReferral?: boolean;
}

export enum LoyaltyHistoryStatuses {
    INCOME = 'income',
    PURCHASE = 'purchase'
}

export enum LoyaltyHistoryDestinations {
    ORDER = 'order',
    REFERRAL = 'referral',
    TOURNAMENT = 'tournament',
    OTHER = 'other'
}

export type LoyaltyHistoryStatus = LoyaltyHistoryStatuses;

export type LoyaltyHistoryDestination = LoyaltyHistoryDestinations;

export interface LoyaltyHistoryItem {
    id: string;
    status: LoyaltyHistoryStatus;
    points: number;
    user_phone: string;
    destination: LoyaltyHistoryDestination;
    date: Date;
}

export enum EditLoyaltyType {
    PLUS = 'PLUS',
    MINUS = 'MINUS'
}
