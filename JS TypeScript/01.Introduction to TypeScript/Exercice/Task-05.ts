function unknownResponse (arg: unknown): string {
    if (typeof arg === 'object' && 
        arg !== null && 
        'value' in arg && 
        typeof arg['value'] === "string") {
            return arg.value;
    }

    return '-';
}

console.log (unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log (unknownResponse({ code: 200, text: 'Ok', value: 'New URL' }))