type DetermineParamType<T> =
T extends number ? number :
T extends string ? string :
never;

function conditionalNumber<T>(p: DetermineParamType<T>) {
    if (typeof p === 'number') {
        console.log(p.toFixed(2));
    }else {
        console.log(p);
    }
}

conditionalNumber<number>(20.3555);
conditionalNumber<string>('wow');
// conditionalNumber<boolean>('a string');
// conditionalNumber<boolean>(30);
// conditionalNumber<number>('test');