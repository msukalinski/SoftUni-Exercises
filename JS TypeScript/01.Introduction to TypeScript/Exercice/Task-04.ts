function summarize(
    id: number,
    fName: string,
    lName: string,
    age: number,
    mName?: string,
    hobbiesArr?: string[],
    workInfoArr?: [string, number]) {

    const fullName = mName ? `${fName} ${mName} ${lName}` : `${fName} ${lName}`;
    const hobbies = hobbiesArr && hobbiesArr.length >= 1 ? hobbiesArr.join(', ') : '-';
    const workInfo = workInfoArr ? `${workInfoArr[0]} -> ${workInfoArr[1]}` : '-';

    return [id, fullName, age, hobbies, workInfo];
}

console.log(summarize (12, 'Eliot', 'Des', 20, 'Braylen', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
console.log(summarize (12, 'Eliot', 'Des', 20, '', ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500]))
// summarize (12, 'Eliot', 'Des', 20, ['tennis', 'football', 'hiking'], ['Sales Consultant', 2500])