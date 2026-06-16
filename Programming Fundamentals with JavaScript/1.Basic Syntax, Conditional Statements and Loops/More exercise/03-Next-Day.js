function nextDayy (year, month, day){
    let currDate = new Date(year, month - 1, day);
    currDate.setDate (currDate.getDate() + 1);
    let nextYear = currDate.getFullYear();
    let nextMonth = currDate.getMonth() + 1;
    let nextDay = currDate.getDate();
    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}
nextDayy (2016, 9, 30)