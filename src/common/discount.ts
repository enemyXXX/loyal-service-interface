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
    giftedCount: number;
    discountType: DiscountType;
    possibleServices: string[];
    cost: number;
    active: boolean;
}

export interface UserDiscount {
    id: string;
    discountId: string;
    user_phone: string;
    purchaseDate: Date;
    isActivated: boolean;
    activationDate?: Date;
    gift?: boolean;
}
