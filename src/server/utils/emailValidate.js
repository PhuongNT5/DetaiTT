/*jshint esversion: 6*/
var nodemailer = require('nodemailer');
var transport = require('nodemailer-smtp-transport');

module.exports = {
    sendMail: sendMail
};

function sendMail(email, token) {
    var transporter = nodemailer.createTransport(transport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'biaiteam12@gmail.com',
            pass: 'Biaiteam12'
        }
    }));

    var mailOptions = {
        from: '"BiAi" <biaiteam12@gmail.com>',
        to: email,
        subject: 'Reset Password Vertification',
        html: 'http://localhost:3000/resetPassword/' + token
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}