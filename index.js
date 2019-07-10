const express = require('express');
const app = express();

app.get('/app', (req, res)=>{
    res.send('Estoy en la ruta ruta /app');
});
app.get('/', (req, res)=>{
    res.send('Estoy en la ruta HOME');
});
app.get('*', (req, res)=>{
    res.send('No se donde estoy');
});

app.listen(3000, ()=> {
    console.log('El servidor Express está en escucha en el puerto 3000')
});