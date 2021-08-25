const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
//Mandar email
//endpoint: /api/contacto

router.post('/', async (req, res) => {

    try {
        const {nombre, email, telefono, mensaje} = req.body;

        contentHTML = `
            <h1>🥶Cliente Nuevo🥶</h1><br>
            <h3>Nombre: ${nombre}</h3><br> 
            <h3>Correo electronico: ${email}</h3><br> 
            <h3>Telefono: ${telefono}</h3><br>
            <h3>Mensaje: ${mensaje}</h3><br>
        `;
        
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
            user: "marcocaos11@gmail.com",
            pass: "fmcsiuhmpndzhfyn"
            },
            tls:{
                rejectUnauthorized: false
            }
        });

        const info = await transporter.sendMail({
            from: "Consultorio",
            to: "marcocarrilloosuna@gmail.com",
            subject: "Cliente Nuevo",
            html: contentHTML
        });

        if(info.messageId){
            console.log("Mensaje enviado", info.messageId);
            res.status(200).json(info);
        }else{
            console.log('Mensaje fallido');
            res.redirect('/')
        }
    

    } catch (error) {
        console.log(error);
    }
}

);

module.exports = router;
