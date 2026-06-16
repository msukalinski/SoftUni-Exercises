function mirrorWords (input){
    let text = input.shift();
    let pattern = /([\@\#])(?<verse>[A-Za-z]{3,})\1\1(?<reverse>[A-Za-z]{3,})\1/g;
    let pairs = 0;
    let mirror = [];
    let matches = text.matchAll(pattern);
    for (const match of matches){
        pairs++;
        let verse = (match.groups.verse);
        rev = match.groups.reverse;
        let reverse = (match.groups.reverse).split('').reverse().join('');
        if (verse == reverse){
            mirror.push (`${verse} <=> ${rev}`)
        }
    }
    if (pairs == 0){
        console.log('No word pairs found!');
    }else{
        console.log(`${pairs} word pairs found!`);
    }
    if (mirror.length == 0){
        console.log('No mirror words!');
    }else{
        console.log(`The mirror words are:\n${mirror.join(', ')}`);
    }
}
mirrorWords (['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
// mirrorWords (['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
mirrorWords (['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])