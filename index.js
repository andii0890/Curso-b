const call = require('./src/call');

    //call.withCallback('Andrea Jiménez', call.sync);

call.withPromise('Andrea')
    .then(name=>{console.log(name)});


//Cuando se habla de .then(), lo asociamos con el resolve;
//Cuando se habla de .catch(), lo asociamos con el reject.

/*
Callbacks y Promesas: Casos de estudio
“Un objeto Promise representa un valor que puede no estar disponible aún.”

Internamente, Promise puede encontrarse en uno de tres estados:

Pending, cuando el valor final no está disponible aún. 
Este es el único estado que puede cambiar a uno de los otros dos estados.
Fulfilled, cuando y si el valor final esté disponible. 
Un valor fulfillment viene asociado permanentemente con Promise. 
Este puede ser cualquiera, incluyendo undefined.
Rejected, si un error impidió que el valor final se determine. 
Una valor rejection viene asociado permanentemente con Promise.
Este puede ser cualquier valor, incluyendo undefined, aunque por lo general
es un objeto Error, como en el manejo de excepciones. */