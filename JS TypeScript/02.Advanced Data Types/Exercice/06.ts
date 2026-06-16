type SuccessResponse = {
    code: 200 | 201 | 301;
    text: string;
}

type ErrorResponse = {
    code: 400 | 404 | 500;
    text: string;
    printChars?: number;
}

function httpResponse(responseObj: SuccessResponse | ErrorResponse) {
    if ('printChars' in responseObj && responseObj.printChars !== undefined) {
        console.log(responseObj.text.substring(0, responseObj.printChars));
    }else {
        console.log(responseObj.text);
    }
}

httpResponse({ code: 200, text: 'OK'})
httpResponse({ code: 201, text: 'Created'})
httpResponse({ code: 400, text: 'Bad Request', printChars: 4})
httpResponse({ code: 404, text: 'Not Found'})
httpResponse({ code: 404, text: 'Not Found', printChars: 3})
httpResponse({ code: 500, text: 'Internal Server Error', printChars: 1})
httpResponse({ code: 500, text: 'Internal Server Error', printChars: 0})