// function extractMails (arr){
//     let pattern = /(?<user>[A-Za-z0-9]+[\.\-\_]?\w+[.-_]?)\@(?<host>[A-Za-z\.\-]+\.[A-Za-z]+)/g;
//     let text = arr;
//     let result = text.match(pattern);
//     console.log(result.join('\n'));
// }

extractMails ('Please contact us at: support@github.com.')
extractMails ('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractMails ('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')