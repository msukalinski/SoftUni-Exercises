function reception (arr){
    let [first, second, third, studCount] = arr.map(Number);
    let totalPerHour = first + second + third;
    let hoursNeeded = 0;
    while (studCount > 0){
        studCount -= totalPerHour;
        hoursNeeded++;
        if (hoursNeeded % 4 === 0){
            hoursNeeded += 1;
        }
    }
    
    console.log(`Time needed: ${Math.ceil(hoursNeeded)}h.`);
    // console.log((hoursNeeded));
    // console.log(totalPerHour);
}
reception (['5','6','4','20'])
reception (['1','2','3','45'] )
reception (['3','2','5','40'])