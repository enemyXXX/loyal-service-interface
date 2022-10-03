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
}
