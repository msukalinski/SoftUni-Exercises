function computerStore (arr){
    let priceWithoutTaxes = 0;
    let customerType = arr.pop();
    // console.log(customerType);
    // console.log(arr);
    for (let current of arr){
        current = Number (current);
        if (current <= 0){
            console.log('Invalid price!');
            continue;
        }
        priceWithoutTaxes += current;
    }
    if (priceWithoutTaxes === 0){
        console.log('Invalid order!');
        return;
    }
    const taxes = priceWithoutTaxes * 0.2;
    let total = priceWithoutTaxes + taxes;
    if (customerType === 'special'){
        total *= 0.9;
    }
    console.log('Congratulations you\'ve just bought a new computer!')
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log('-----------');
    console.log(`Total price: ${total.toFixed(2)}$`);
}
computerStore (['1050', '200', '450', '2', '18.50', '16.86', 'special'])