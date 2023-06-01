const express = require('express');
const app = express();

// Se va a mostrar que el servidor ha iniciado en el puerto 3000
app.listen(4000, () =>{
    console.log('Servidor en puerto 4000')
});


//Método GET
app.get('/', (req, res) =>{
    res.send('Recibido.')
});

//Método POST
app.post('/', (req, res)=>{
    res.send('Guardando.')
});

//Método PUT
app.post('/', (req, res)=>{
    res.send('Actualizando.')
});


//Método DElete
app.post('/', (req, res)=>{
    res.send('Eliminando.')
});