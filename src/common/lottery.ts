export interface LotteryMember {
    member_item: number;
    user_phone: string;
    user_name: string;
    services: number;
}

export enum LotteryStatus {
    ACTIVE = 'ACTIVE',
    DONE = 'DONE'
}

export interface Lottery {
    id: string;
    image: string;
    description: string;
    title: string;
    startDate: Date;
    endDate: Date;
    members: LotteryMember[];
    status: LotteryStatus;
    winners: LotteryMember[];
    winnersCount: number;
    created_at: Date;
}
