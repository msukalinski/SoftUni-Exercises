export function ApplyInsurance(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get;

    if (!original) {
        throw new Error('ApplyInsurance can only be applied to getters');
    }

    descriptor.get = function() {
        const basePrice = original.call(this);

        if (basePrice === undefined) {
            return undefined;
        }

        const priceAfterInsurance = basePrice * 1.12;

        return Math.round(priceAfterInsurance * 100) / 100;
    }

    return descriptor;
}