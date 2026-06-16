function vacation (num, type, day){
    let price = 0;
    if (type === 'Students'){
        if (day === 'Friday'){
            price = num * 8.45;
        }else if (day === 'Saturday'){
            price = num * 9.8;
        }else if (day === 'Sunday'){
            price = num * 10.46;
        }
        if (num >= 30){
            price *= 0.85;
        }
    }else if (type === 'Business'){
        if (day === 'Friday'){
            price = 10.9;
        }else if (day === 'Saturday'){
            price = 15.6;
        }else if (day === 'Sunday'){
            price = 16;
        }
        if (num >= 100){
            num -= 10;
            price *= num;
        }else{
            price *= num;
        }
    }else if (type === 'Regular'){
        if (day === 'Friday'){
            price = num * 15;
        }else if (day === 'Saturday'){
            price = num * 20;
        }else if (day === 'Sunday'){
            price = num * 22.5;
        }
        if (num >= 10 && num <= 20){
            price *= 0.95;
        }
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation (50,

    "Business",
    
    "Sunday")