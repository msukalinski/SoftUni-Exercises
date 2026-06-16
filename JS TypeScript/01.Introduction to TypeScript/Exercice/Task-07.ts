function friday13th (arr: unknown[]): void {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    for (const line of arr) {
        if (line instanceof Date && line.getDay() === 5 && line.getDate() === 13) {
            console.log (`${line.getDate()}-${months[line.getMonth()]}-${line.getFullYear()}`)
        }
    }
}

friday13th ([
    {},
    new Date(2024, 11, 13),
    null,
    new Date(2025, 5, 13),
    '13-09-2023',
    new Date(2025, 6, 13)])

friday13th ([
    new Date(2024, 0, 13), 
    new Date(2024, 1, 13), 
    new Date(2024, 2, 13), 
    new Date(2024, 3, 13), 
    new Date(2024, 4, 13), 
    new Date(2024, 5, 13), 
    new Date(2024, 6, 13), 
    new Date(2024, 7, 13), 
    new Date(2024, 8, 13), 
    new Date(2024, 9, 13), 
    new Date(2024, 10, 13), 
    new Date(2024, 11, 13) ]
)