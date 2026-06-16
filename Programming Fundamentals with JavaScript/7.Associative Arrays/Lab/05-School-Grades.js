function schoolGrades (arr){
    let studs = {};
    for (let line of arr){
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(a => Number(a));
        if (studs[name]){
            studs[name] = studs[name].concat(grades);
        }else{
            studs[name] = grades;
        }
    }
    let studsEntries = Object.entries(studs);
    let sorted = studsEntries.sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, grades] of sorted){
        let sum = 0;
        for (let grade of grades){
            sum += grade;
        }
        let avg = sum / grades.length;
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}
schoolGrades (['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])