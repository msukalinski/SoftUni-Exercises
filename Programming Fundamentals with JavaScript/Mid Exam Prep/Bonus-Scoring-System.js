function scoringSystem (arr){
    let studNum = Number (arr.shift());
    let lecturesCount = Number (arr.shift());
    let bonus = Number (arr.shift());
    function totalBonus (arg1, arg2, arg3){
        let total = arg1 / arg2 * (5 + arg3);
        return total;
    }

    // let result = totalBonus (12, lecturesCount, bonus);
    let max = 0;
    let maxAttendances = 0;
    for (let attendances of arr){
        let attendancesToNum = Number (attendances)
        let currentStud = totalBonus (attendancesToNum, lecturesCount, bonus);
        if (currentStud > max){
            max = currentStud;
        }
        if (attendancesToNum > maxAttendances){
            maxAttendances = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.round(max)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}
// scoringSystem (['5', '25', '30', '12', '19', '24', '16', '20'])
scoringSystem (['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])