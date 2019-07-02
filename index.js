const fs = require('fs');
const ops = require('./src/fileops');

let incValue;

fs.readFile('./resources/number.txt', 'utf8', (err, text)=>{
    if(err) throw err;
    const numbers = text
        .split('\n')
        .map(n => Number(n));
    incValue = ops.incrementValues(numbers);
    fs.writeFile('./resources/numbernew.txt', incValue.join('\n'), (err, result)=>{
        if(err) throw err;
    });
});

//Desafío:

let addName;

fs.readFile('./resources/name.txt', 'utf8', (err, text)=>{
    if(err) throw err;
    const names = text
        .split('\n')
    addName = ops.callNames(names);
    fs.writeFile('./resources/hereisyourname.txt', addName.join('\n'),(err)=>{
        if(err) throw err;
    });
});    
