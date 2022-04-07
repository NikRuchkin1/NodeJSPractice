const path = require('path');

console.log(path.join('first', 'second', 'third'));
console.log(path.join(__dirname, '..', '..'));
console.log(path.resolve('/first', 'second', 'third'));
//resolve will return absolute path, but
//if we use / for string into method resolve then we will get absolute path
const fullPath = path.resolve(__dirname, 'first', 'second', 'third');

console.log('Parsing', path.parse(fullPath));
//we will get parse fullPath variable

// ---------------------------------

const siteURL = 'http://localhost:8000/users?id=5123';

const url = new URL(siteURL);
