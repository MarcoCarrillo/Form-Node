const express = require('express');
const app = express();
const path = require('path');



//Habilitar express.json para las solicitudes de POST y reconoce que es .json el objeto del request, se pueden hacer los requests con content-type: application.json desde headers en postman
app.use(express.json({extends: true}));


app.use(express.urlencoded({extended: false})); //Entender los datos del form

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public'))); //Carpeta publica del proyecto

//  use alternate localhost and the port Heroku assigns to $PORT
const host = '0.0.0.0';
const puerto = process.env.PORT || 3000;

app.listen(puerto, host, function() {
    console.log("Server started.......", puerto);
  });