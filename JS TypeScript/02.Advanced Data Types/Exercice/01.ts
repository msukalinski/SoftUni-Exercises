function showDay (n: number): void {

    enum DaysOfWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(DaysOfWeek[n] || 'error');
}

showDay(4);
showDay(9);