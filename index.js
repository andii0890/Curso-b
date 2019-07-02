const call = require ('./src/call');

//call.greet('Andrea Jiménez');

async function callWithPromise(){
    const fullName = await call.withPromise('Andrea', 'Jiménez')
    console.log(fullName);
}

callWithPromise();