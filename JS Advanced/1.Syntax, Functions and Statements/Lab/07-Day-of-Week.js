function demo(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = days.indexOf(day) + 1;
    if (index >= 1 && index <= 7){
        console.log(index);
    }else{
        console.log('error');
    }
}
demo('Tuesday')
// demo('name')