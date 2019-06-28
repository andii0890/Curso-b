const math = require("./math");
const greet = require ("./greetings");
const hello = require("./greetings/hello")
const goodbye = require("./greetings/goodbye.js");

console.log(math.add(4, 5));
console.log(math.divide(4, 5));
console.log(math.multiply(4, 5));
console.log(math.substract(4, 5));

console.log(greet.greet("Emir"));

console.log(hello.sayHello("Carlos"));

console.log(goodbye.sayGoodbye("Brownie"))
