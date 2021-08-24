const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
//Mandar email
//endpoint: /api/contacto

router.post('/', async (req, res) => {

    try {
        const {nombre, email, telefono, mensaje} = req.body;

        contentHTML = `
            <p>Cliente</p>
            <ul>
                <li> <p>Nombre: ${nombre}</p> </li>
                <li><p>Correo electronico: ${email}</p> </li>
                <li><p>Telefono: ${telefono}</p></li>
            </ul>
            <p>${mensaje}</p>
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
