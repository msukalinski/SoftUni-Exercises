type Character = {
    name: string;
    level: number;
}

export function getCharacter (boss: boolean): Character {
    let level: number;

    if (boss) {
        level = 99;
    }

    return {
        name: 'Goblin',
        // level: level,
    };
}

let goblin = getCharacter(false);

console.log(goblin.level + 1);

function combinePrompts (systemPrompt: string, userPrompt: string) {
    return `${systemPrompt}\n${userPrompt}`
}