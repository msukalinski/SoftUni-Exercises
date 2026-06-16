enum TravelVacation {
    Abroad = 'Abroad',
    InCountry = 'InCountry'
}

enum MountainVacation {
    Ski = 'Ski',
    Hiking = 'Hiking'
}

enum BeachVacation {
    Pool = 'Pool',
    Sea = 'Sea',
    ScubaDiving = 'ScubaDiving'
}

interface Holiday {
    set start(val: Date);
    set end(val: Date);
    getInfo(): string;
}

interface VacationManager<T, V> {
    reserveVacation(holiday: T, vacationType: V): void;
    listReservations(): string;
}

class PlannedHoliday implements Holiday {
    private _start!: Date;
    private _end!: Date;

    constructor(start: Date, end: Date) {
        this.start = start;
        this.end = end;
    }

    set start(val: Date) {
        if (val > this._end) {
            throw new Error('End date cannot be before start date');
        }
        this._start = val;
    }

    set end(val: Date) {
        if (val < this.start) {
            throw new Error('End date cannot be before start date');
        }
        this.end = val;
    }

    getInfo(): string {
        return `Holiday: ${this.formatDate(this._start)} - ${this.formatDate(this._end)}`;
    }

    private formatDate(date: Date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}

class HolidayManager<T extends Holiday, V extends TravelVacation | MountainVacation | BeachVacation> implements VacationManager<T, V> {
    vacations: Map<T, V> = new Map();

    reserveVacation(holiday: T, vacationType: V): void {
        this.vacations.set(holiday, vacationType);
    }

    listReservations(): string {
        let result = [];
        const vacationEntries = Array.from(this.vacations.entries());

        for (let [holidayObj, vacationType] of vacationEntries) {
            result.push(`${holidayObj.getInfo()} => ${vacationType}`);
        }

        return result.join('\n');
    }
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager<Holiday, TravelVacation>();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations())

// let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
// let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
// let holidayManager = new HolidayManager<Holiday, BeachVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
// console.log(holidayManager.listReservations())