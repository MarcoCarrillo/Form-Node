const {Router} = require('express');
const nodemailer = require('nodemailer');
const router = Router();

router.post('/send-email', async (req, res) => {
    const {name, email, phone, message} = req.body;

    contentHTML = `
        <p>Cliente</p>
        <ul>
            <li> <p>Nombre: ${name}</p> </li>
            <li><p>Correo electronico: ${email}</p> </li>
            <li><p>Telefono: ${phone}</p></li>
        </ul>
        <p>${message}</p>
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
        subject: "🎉Cliente Nuevo🎉",
        html: contentHTML
    });

    if(info.messageId){
        console.log("Mensaje enviado", info.messageId);
        res.redirect('/success.html');
    }else{
        console.log('Mensaje fallido');
        res.redirect('/')
    }
    
    
});

module.exports = router;