let text = 'Random Text Generator is a web application which provides true random text which you can use.';
let res = text;
while (res.includes('which')){
    res = res.replace('which', 'ASD');
}
console.log(res);