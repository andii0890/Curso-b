const greet = require('./src/greet');

greet.emit('clap');
greet.emit('shout', 'viva el amor');
greet.emit('call', 'Andrea Jimenez', (name)=> {
    console.log('Estamos llamando a: ', name);
})