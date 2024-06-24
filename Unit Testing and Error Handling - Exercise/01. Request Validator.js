function requestValidator(obj) {

    const methodExamples = ['GET', 'POST', 'DELETE', 'CONNECT'];
    if (!methodExamples.includes(obj.method) || !obj.method) {
        throw new Error("Invalid request header: Invalid Method");
    }

    const uriPattern = /^[\w.]+$/;
    let isValid = uriPattern.test(obj.uri);
    if (!isValid || obj.uri === '*' || !obj.uri) {
        throw new Error("Invalid request header: Invalid URI");
    }

    const versionExamples = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    if (!versionExamples.includes(obj.version) || !obj.version) {
        throw new Error("Invalid request header: Invalid Version");
    }

    if (!obj.hasOwnProperty('message')) {
        throw new Error("Invalid request header: Invalid Message");
    }

    const specialChars = ['<', '>', '\\', '&', `'`, `"`];
    for (let el of obj.message) {
        if (specialChars.includes(el)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }

    return obj;
}

requestValidator({

    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',

    message: ''

})