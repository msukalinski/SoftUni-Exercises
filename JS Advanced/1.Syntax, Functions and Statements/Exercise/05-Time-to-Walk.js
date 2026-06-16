function demo(steps, length, speed) {
    let distance = steps * length;
    let speedPerSecond = speed * 1000 / 3600;
    const timeInSeconds = distance / speedPerSecond;
    const restTime = Math.floor(distance / 500) * 60;
    const totalTime = timeInSeconds + restTime;

    const hours = Math.floor(totalTime / 3600);
    const mins = Math.floor(totalTime % 3600 / 60);
    const seconds = Math.ceil(totalTime % 60);
    
    console.log(`${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
}
demo(2564, 0.70, 5.5)
// demo(1234)