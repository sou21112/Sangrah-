// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/forgot_password', (req, res) => {
    const email = req.body.email;

    // Set up your mail server (e.g., Gmail)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Password Reset Link',
        text: 'Click the link to reset your password: http://yourwebsite.com/reset_password'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Password reset link has been sent to your email');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
