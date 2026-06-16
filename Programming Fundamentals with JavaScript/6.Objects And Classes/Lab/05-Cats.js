function catsInfo (arr){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let line of arr){
        let args = line.split(' ');
        let [name, age] = args;
        let cat = new Cat(name, age);
        cat.meow();
    }
}
catsInfo(['Mellow 2', 'Tom 5'])