const express = require('express');
const app = express();
const path = require('path');

//Habilitar CORS
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

//Habilitar express.json para las solicitudes de POST y reconoce que es .json el objeto del request, se pueden hacer los requests con content-type: application.json desde headers en postman
app.use(express.json({extends: true}));

//Si hay puerto en variable de entorno tomar ese si no el puerto 4000
const port = process.env.PORT || 4000;

app.use(express.urlencoded({extended: false})); //Entender los datos del form

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public'))); //Carpeta publica del proyecto

//Si hay puerto en variable de entorno tomar ese si no el puerto 4000
const port = process.env.PORT || 4000;

//Arrancar el servidor
app.listen(port, '0.0.0.0', () =>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})