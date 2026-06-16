function showNumDay (str: string): void {

    enum DaysOfWeek {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    console.log(DaysOfWeek[str as keyof typeof DaysOfWeek] ?? 'error');
}

showNumDay('Tuesday')
showNumDay('asd')