function processCrystals(input) {
    const targetThickness = input[0];
    const chunks = input.slice(1);
    
    // Define operation details: name and effect on thickness
    const operations = [
        { name: 'Cut', effect: (thickness) => thickness / 4, canUseMultipleTimes: true },
        { name: 'Lap', effect: (thickness) => thickness * 0.8, canUseMultipleTimes: true },
        { name: 'Grind', effect: (thickness) => thickness - 20, canUseMultipleTimes: true },
        { name: 'Etch', effect: (thickness) => thickness - 2, canUseMultipleTimes: true },
        { name: 'X-ray', effect: (thickness) => thickness + 1, canUseMultipleTimes: false }
    ];

    // Helper function to process a single chunk
    function processChunk(chunk) {
        let operationsList = [];
        let currentThickness = chunk;
        let usedXRay = false;
        let operationCounts = {};

        // Continue processing until the thickness is <= target thickness
        while (currentThickness > targetThickness) {
            let operationPerformed = false;

            // Check operations starting from the most effective
            for (let operation of operations) {
                if (operation.name === 'X-ray' && !usedXRay && currentThickness < targetThickness) {
                    // Apply X-ray only once
                    currentThickness = operation.effect(currentThickness);
                    operationCounts['X-ray'] = (operationCounts['X-ray'] || 0) + 1;
                    operationsList.push({ operation: 'X-ray', times: 1 });
                    usedXRay = true;
                    operationPerformed = true;
                    break;
                } else if (operation.name !== 'X-ray') {
                    // Apply other operations
                    let newThickness = operation.effect(currentThickness);
                    if (newThickness >= targetThickness || (operation.name === 'Grind' && newThickness >= targetThickness)) {
                        currentThickness = newThickness;
                        operationCounts[operation.name] = (operationCounts[operation.name] || 0) + 1;
                        operationsList.push({ operation: operation.name, times: 1 });
                        operationPerformed = true;
                        break;
                    }
                }
            }

            // If operations were applied, add the transporting and washing step
            if (operationPerformed) {
                operationsList.push({ operation: 'Transporting and washing' }); // Add it after every operation
            } else {
                break; // If no operation was applied, stop
            }
        }

        // Return the list of operations performed
        return { operationsList, operationCounts, finalThickness: currentThickness };
    }

    // Process each chunk and print the operations
    chunks.forEach(chunk => {
        console.log(`Processing chunk ${chunk} microns`);

        const { operationsList, operationCounts, finalThickness } = processChunk(chunk);

        // Print the operations and their count
        operationsList.forEach(op => {
            if (op.operation === 'Transporting and washing') {
                console.log('Transporting and washing');
            } else {
                console.log(`${op.operation} x${operationCounts[op.operation]}`);
            }
        });

        console.log(`Finished crystal ${finalThickness} microns`);
    });
}
processCrystals ([1000, 4000, 8100])