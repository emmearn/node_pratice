const { URL } = require('url'),
    address = 'http://mysite.com/user/?id=1&name=Micol',
    urlObj = new URL(address),
    parameters = urlObj.searchParams;

var iterator = parameters.entries();
for (let item of iterator)
    console.log(item);

parameters.set('age', 34);

parameters.forEach((value, name) => {
    console.log(name, value);
});

console.log(parameters.get('name'));
console.log(parameters.has('surname'));