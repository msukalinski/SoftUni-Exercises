function demo(r, h) {
    let area = Math.PI * r * (r  + Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2)))
    let volume = (Math.PI * Math.pow(r, 2) * h) / 3
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}
demo(3, 5)
demo(3.3, 7.8)