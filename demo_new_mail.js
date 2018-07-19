var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lawrenceloh.octafa@gmail.com',
    pass: 'Law_112408289'
  }
});

var mailOptions = {
  from: 'lawrenceloh.octafa@gmail.com',
  to: 'xin08289@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});