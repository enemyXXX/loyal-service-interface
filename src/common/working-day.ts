export interface WorkingDaysRange {
    currentDay: Date;
    firstWorkingDay: Date;
    lastWorkingDay: Date;
}

export interface WorkingDay {
    id: string;
    working_day: Date;
    master: string;
    start_hour: number;
    end_hour: number;
    lunch?: boolean;
    lunch_start_hour?: number;
    lunch_end_hour?: number;
}
