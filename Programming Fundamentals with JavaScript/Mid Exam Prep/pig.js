function guineaPig (arr){
    let [food, hay, cover, weight] = arr;
    for (let day = 1; day <= 30; day++){
        food -= 0.3;
        if (day % 2 === 0){
            hay -= (food * 0.05);
        }
        if (day % 3 === 0){
            cover -= (1 / 3) * weight;
        }
    }
    if (food < 0 || hay < 0 || cover < 0){
        console.log('Merry must go to the pet store!');
    }else{
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}
guineaPig (["10", "5", "5.2", "1"])