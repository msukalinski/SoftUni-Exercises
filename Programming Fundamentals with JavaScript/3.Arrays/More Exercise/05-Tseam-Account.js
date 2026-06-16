function demo(input) {
    let account = input.shift().split(' ');
    let tokens = input.shift();

    while (tokens !== 'Play!') {
        let [action, game] = tokens.split(' ');
        if (action == 'Install') {
            if (!account.includes(game)) {
                account.push(game)
            }
        } else if (action == 'Uninstall') {
            account = account.filter(g => g !== game);
        } else if (action == 'Update') {
            if (account.includes(game)) {
                account = account.filter(g => g !== game);
                account.push(game)
            }
        } else if (action == 'Expansion') {
            let [baseGame, expansion] = game.split('-');
            if (account.includes(baseGame)) {
                let index = account.indexOf(baseGame);
                account.splice(index + 1, 0, `${baseGame}:${expansion}`);
            }
        }
        tokens = input.shift();
    }
    console.log(account.join(' '));
}
demo(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);
demo(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);