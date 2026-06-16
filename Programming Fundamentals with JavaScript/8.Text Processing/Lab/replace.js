let text = 'Random Text Generator is a web application which provides true random text which you can use.';
// replace first occurrance
let replaceWhich = text.replace('which', 'ASD');
console.log(replaceWhich);
// replace all
let replaceAllWhich = text;
// while (replaceAllWhich.indexOf('which') >= 0){
//     replaceAllWhich = replaceAllWhich.replace('which', 'ASD'); 
// }
while (replaceAllWhich.includes('which')){
    replaceAllWhich.replace('which', 'Hello')
}
console.log(replaceAllWhich);