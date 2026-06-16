function demo(commands) {
    let gladiators = {};

    for (const command of commands) {
        if (command === 'Ave Cesar') break;

        if (command.includes('->')) {
            const [gladiator, technique, skillStr] = command.split(' -> ');
            const skill = Number(skillStr);

            if (!gladiators[gladiator]) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator][technique] || gladiators[gladiator][technique] < skill){
                gladiators[gladiator][technique] = skill;
            }
        } else if (command.includes('vs')) {
            const [gladiator1, gladiator2] = command.split(' vs ');

            if (gladiators[gladiator1] && gladiators[gladiator2]) {
                const gladiator1Techniques = gladiators[gladiator1];
                const gladiator2Techniques = gladiators[gladiator2];

                const commonTechniques = Object.keys(gladiator1Techniques).filter(technique =>
                    gladiator2Techniques.hasOwnProperty(technique)
                );

                if (commonTechniques.length > 0) {
                    const totalSkill1 = Object.values(gladiator1Techniques).reduce((a, b) => a + b, 0);
                    const totalSkill2 = Object.values(gladiator2Techniques).reduce((a, b) => a + b, 0);

                    if (totalSkill1 > totalSkill2) {
                        delete gladiators[gladiator2];
                    } else if (totalSkill2 > totalSkill1) {
                        delete gladiators[gladiator1];
                    }
                }
            }
        }
    }

    const sortedGladiators = Object.entries(gladiators).sort((a, b) => {
        const totalSkillA = Object.values(a[1]).reduce((x, y) => x + y, 0);
        const totalSkillB = Object.values(b[1]).reduce((x, y) => x + y, 0);

        return totalSkillB - totalSkillA || a[0].localeCompare(b[0]);
    });

    for (const [gladiator, techniques] of sortedGladiators) {
        const totalSkill = Object.values(techniques).reduce((x, y) => x + y, 0);
        console.log(`${gladiator}: ${totalSkill} skill`);

        const sortedTechniques = Object.entries(techniques).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (const [technique, skill] of sortedTechniques) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
}

demo(['Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar']);
// demo()