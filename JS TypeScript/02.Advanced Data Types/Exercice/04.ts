function performOperation(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
): string | number {
    if (operation === 'Index' && typeof param !== "number") {
        return param[operand];
    }

    if (operation === 'Length' && typeof param !== "number") {
        return param.length % operand;
    }

    if (operation === "Add") {
        return Number(param) + operand;
    }

    return 0;
}

console.log(performOperation(['First', 'Second', 'Third'], 'Index', 1));
console.log(performOperation('string', 'Index', 1));
console.log(performOperation(['Just', 'Two'], 'Length', 5));
console.log(performOperation('short string1', 'Length', 5));
console.log(performOperation('7', 'Add', 3));
console.log(performOperation(11, 'Add', 3));