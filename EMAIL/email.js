const { info } = require('console');
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'developer@gmail.com',
        pass:'<dev password>'
    }
});

let mailOptions = {
    from: 'developer@gmail.com',
    to: 'friend@gmail.com',
    subject:'Sending Email Using Node.js',
    text:'Hello!! I am trying what I have learned in Node JS'
};

transporter.sendMail(mailOptions, function(error, info)
{
    if(error){
        console.log(error);
    }
    else
    {
        console.log('Email Sent: ' + info.response);
    }
});
