function reading (num, perHour, days){
    let timeToRead = num / perHour;
    let hoursPerDay = timeToRead / days;
    console.log(hoursPerDay);
}
reading (432, 15, 4)