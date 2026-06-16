function personInfo (arg1, arg2, arg3){
    let person = {
        firstName: arg1,
        lastName: arg2,
        age: arg3,
    }
    return person;
    console.log(Object.keys(person));
}
personInfo ("Peter",
"Pan",
"20")