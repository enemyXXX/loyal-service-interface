export interface FlappyBirdGameHistory {
    id: string;
    user_phone: string;
    duration: number;
    date: Date;
    score: number;
    width: number;
    height: number;
}

export interface GameRating {
    id: string;
    user_phone: string;
    user_name: string;
    score: number;
    width: number;
    height: number;
    defined: boolean;
    rating: number;
}

export interface GameInstance {
    id: string;
    active: boolean;
    currentTime: Date;
    endTime: Date;
}
