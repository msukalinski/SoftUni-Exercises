function demo(arr) {
    let sections = arr.map(Number);
    let totalConcreteUsed = 0;

    const dailyConcrete = [];
    const concretePerFoot = 195;
    const costPerCubicYard = 1900;

    while (sections.some(section => section < 30)){
        let daily = 0;

        for (let i = 0; i < sections.length; i++){
            if (sections[i] < 30){
                sections[i]++;
                daily += concretePerFoot;
            }
        }
        dailyConcrete.push(daily);
    }
    const totalConcrete = dailyConcrete.reduce((acc, value) => acc + value, 0);
    const totalCost = totalConcrete * costPerCubicYard;

    console.log(dailyConcrete.join(', '));
    console.log(`${totalCost} pesos`);
}
demo([17, 22, 17, 19, 17]);