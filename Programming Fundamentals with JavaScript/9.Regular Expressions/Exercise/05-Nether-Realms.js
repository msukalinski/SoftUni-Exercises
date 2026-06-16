function demo(arr) {
    const demons = arr
        .split(/,\s*/)
        .map(demon => demon.trim())
        .sort((a, b) => a.localeCompare(b));

    const results = [];

    demons.forEach(demon => {
        let health = 0;
        let damage = 0;

        const healthRegex = /[^0-9+\-*\/.]/g;
        const healthMathes = demon.match(healthRegex);
        if (healthMathes) {
            health = healthMathes.reduce((sum, char) => sum + char.charCodeAt(0), 0);
        }

        const damageRegex = /[+-]?\d(\.\d+)?/g;
        const damageMatches = demon.match(damageRegex);
        if (damageMatches){
            damage = damageMatches.reduce((sum, num) => sum + parseFloat(num), 0);
        }

        for (const char of demon){
            if (char === '*') damage *= 2;
            if (char === '/') damage /= 2;
        }

        results.push(`${demon} - ${health} health, ${damage.toFixed(2)} damage`)
    });
    results.forEach(result => console.log(result))
}

demo('M3ph1st0**, Azazel');
// demo()