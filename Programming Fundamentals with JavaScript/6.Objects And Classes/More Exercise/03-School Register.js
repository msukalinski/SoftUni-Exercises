function demo(arr) {
    let grades = {};

    for (let entry of arr) {
        let [namePart, gradePart, scorePart] = entry.split(', ');
        let name = namePart.split(': ')[1];
        let grade = Number(gradePart.split(': ')[1]) + 1;
        let score = Number(scorePart.split(': ')[1]);

        if (score >= 3){
            if (!grades[grade]){
                grades[grade] = {students: [], totalScore: 0};
            }
            grades[grade].students.push(name);
            grades[grade].totalScore += score;
        }
    }

    let sortedGrades = Object.keys(grades).sort((a, b) => a - b);

    for (let grade of sortedGrades){
        let gradeData = grades[grade];
        let studentList = gradeData.students.join(', ');
        let avgScore = (gradeData.totalScore / gradeData.students.length).toFixed(2);

        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentList}`);
        console.log(`Average annual score from last year: ${avgScore}`);
        console.log('');
    }
}
asd
demo([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);
// demo()