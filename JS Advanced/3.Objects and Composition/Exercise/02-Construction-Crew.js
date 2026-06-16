function worker(obj) {
    if (obj.dizziness){
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
        obj.dizziness = false;
    }
    // console.log(obj);
    return obj;
}
worker ({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true })