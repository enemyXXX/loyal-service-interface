export enum DiscountType {
    PERCENT = 'DISCOUNT_PERCENT',
    RUB = 'DISCOUNT_RUB',
}

export interface Discount {
    id: string;
    topic: string;
    description: string;
    maxPurchases: number;
    activations: number;
    purchases: number;
    discount: number;
    discountType: DiscountType;
    possibleServices: string[];
    active: boolean;
}
