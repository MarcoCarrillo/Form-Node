const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({extended: false})); //Entender los datos del form
app.use(express.json()); 

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public'))); //Carpeta publica del proyecto

app.listen(3000, () => {
    console.log('Server on port 3000');
});