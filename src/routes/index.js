const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const {name, email, phone, message} = req.body;

    contentHTML = `
        <h1>Cliente</h1>
        <ul>
            <li>Nombre: ${name} </li>
            <li>Correo electronico: ${email} </li>
            <li>Telefono: ${phone} </li>
        </ul>
        <p>${message}</p>
    `;
    
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "403a477d3934dc",
          pass: "6e1df527a6028c"
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    const info = await transporter.sendMail({
        from: "Consultorio",
        to: "marcocarrilloosuna@gmail.com",
        subject: "Cliente😎",
        html: contentHTML
    });

    console.log("Mensaje enviado", info.messageId);
    res.redirect('/success.html');
    
});

module.exports = router;