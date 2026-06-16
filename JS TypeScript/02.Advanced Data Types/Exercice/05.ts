type CarBody = { material: string; state: string; }

type Tires = { airPressure: number; condition: string; }

type Engine = { horsepower: number; oilDensity: number; }

type ExtraProps = { partName: string; runDiagnostics: () => string; }

// type CarBodyDiagnostics = CarBody & ExtraProps;
// type TiresDiagnostics = Tires & ExtraProps;
// type EngineDiagnostics = Engine & ExtraProps;

function carDiagnostics(a: CarBody & ExtraProps, b: Tires & ExtraProps, c: Engine & ExtraProps) {

    console.log(a.runDiagnostics());
    console.log(b.runDiagnostics());
    console.log(c.runDiagnostics());
}

const runDiagnostics = function (this: ExtraProps) {
    return this.partName;
}


console.log(carDiagnostics({ material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics },
    { airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics },
    { horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics }))