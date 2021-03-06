const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');


//Habilitar express.json para las solicitudes de POST y reconoce que es .json el objeto del request, se pueden hacer los requests con content-type: application.json desde headers en postman
app.use(express.json({extends: true}));

//habilitar cors
app.use(cors());

app.use(express.urlencoded({extended: false})); //Entender los datos del form

//Rutas
app.use(require('./routes/index'));
app.use('/api/contacto', require('./routes/contacto'));

app.use(express.static(path.join(__dirname, 'public'))); //Carpeta publica del proyecto

//  use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const puerto = process.env.PORT || 4000;

app.listen(puerto, host, function() {
    console.log("Server started.......", puerto);
  });