function requestValidtor(obj) {

    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriPattern = /^[\w.]+$/gm;
    let invalidSymbols = ["<", ">", "\\", "&", `'`, `"`];

    if (!validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!uriPattern.test(obj.uri) || (/^\*$/).test(obj.uri) || !obj.uri) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }
    
    if (!obj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }
    let filteredMessage = obj.message.split('').filter((char) => invalidSymbols.includes(char));

    if (filteredMessage.length > 0) {
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj;
}
requestValidtor({
    method: 'GET',
    uri: '.babelrc',
    version: 'HTTP/1.1',
    message: 'hello world'
});