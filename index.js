const error = require('./src/errors');
const handle = require ('./src/handling');

handle.errorFirstCallback();


/* 

Tipo de errores:

Standar Javascript errors
Errores de sintaxis, de evaluación, contrucción de URIs, etc.

System errors
Cuando se falla en la lectura de algún archivo, etc.

User-specified errors
Cuando lanzamos un Throw y especificamos un mensaje personalizado.

Assertion Errors
Errores que definen aspectos lógicos dentro de Node.js. Violaciones de lógica como TRUE == FALSE, por ejemplo

*/