function solve() {
    let magePrototype = {
        cast
    }
    function cast(spelName) {
        console.log(`${this.name} cast ${spelName}`);
        this.mana--;
    }
    function mage(name) {
        let mageObj = Object.create(magePrototype);
        Object.assign(mageObj, {
            name,
            health: 100,
            mana: 100,
        });
        return mageObj;
    }

    let fighterPrototype = {
        fight
    }
    function fight() {
        console.log(`${this.name} slashes at the foe!`);
        this.stamina--;
    }
    function fighter(name){
        let fighterObj = Object.create(fighterPrototype);
        Object.assign(fighterObj, {
            name,
            health: 100,
            stamina: 100,
        });
        return fighterObj;
    }
    return {
        mage,
        fighter
    }
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);