export function ConvertToEuro(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;

    if (!original) {
        throw new Error('ConvertToEuro can only be applied to getters');
    }

    // const original = descriptor.get!;

    descriptor.get = function () {
        const valueInBGN = original.call(this);

        if (valueInBGN === undefined) {
            return undefined;
        }
        const valueInEUR = valueInBGN / 1.95583;
        return Math.round(valueInEUR * 100) / 100;
    }

    return descriptor;
}