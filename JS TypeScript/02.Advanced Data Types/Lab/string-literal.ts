// let successStatus1: number;
// or

let successStatus1: 200 | 201 | 204;

successStatus1 = 200;
// successStatus1 = 400;

let successStatus: 'success' | 'error';
successStatus = 'success';
successStatus = 'Not respond';