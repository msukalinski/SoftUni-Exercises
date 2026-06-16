function demo(speed, area) {
    if (area === 'motorway'){
        if (speed > 130){
            let diff = speed - 130;
            if (diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - speeding`);
            }else if (diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - excessive speeding`);
            }else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 130 - reckless driving`);
            }
        }else{
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }
    }else if (area === 'interstate'){
        if (speed > 90){
            let diff = speed - 90;
            if (diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - speeding`);
            }else if (diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - excessive speeding`);
            }else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 90 - reckless driving`);
            }
        }else{
            console.log(`Driving ${speed} km/h in a 90 zone`);
        }
    }else if (area === 'city'){
        if (speed > 50){
            let diff = speed - 50;
            if (diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - speeding`);
            }else if (diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - excessive speeding`);
            }else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 50 - reckless driving`);
            }
        }else{
            console.log(`Driving ${speed} km/h in a 50 zone`);
        }
    }else if (area === 'residential'){
        if (speed > 20){
            let diff = speed - 20;
            if (diff <= 20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - speeding`);
            }else if (diff <= 40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - excessive speeding`);
            }else{
                console.log(`The speed is ${diff} km/h faster than the allowed speed of 20 - reckless driving`);
            }
        }else{
            console.log(`Driving ${speed} km/h in a 20 zone`);
        }
    }
}
demo(40, 'city')
demo(21, 'residential')
demo(120, 'interstate')
demo(200, 'motorway')