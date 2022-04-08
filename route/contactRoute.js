require("dotenv").config();
const router = require('express').Router();
const nodemailer = require('nodemailer');
const {google}=require('googleapis')


router.post('/contact', (req, res)=>{
const oAuth2Client=new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI,process.env.REFRESH_TOKEN);
oAuth2Client.setCredentials({refresh_token:process.env.REFRESH_TOKEN});

    let data = req.body;

    // if the fields are empty we want to appear a message
    if(data.name.length===0 || data.email.length===0 || data.message.length===0){

     return res.json({msg:"Please fill all the fields"})

    }
    const accessToken=oAuth2Client.getAccessToken().then((token)=>{
        return token;
    });
   
//   we create a transporter
const transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        type:"OAuth2",
        user:process.env.mail_id,
        clientId: process.env.CLIENT_ID,
        clientSecret:process.env.CLIENT_SECRET,
        refreshToken:process.env.REFRESH_TOKEN,
        accessToken:accessToken
    }
}
  );

let mailOptions = {
    from:data.email,
    to:`sathya.dinavahi@gmail.com`,
    subject:`Message from ${data.name}`,
    html:`
    <h3>Informations</h3>
    <ul>
    <li>Name: ${data.name}</li>
    <li>Email: ${data.email}</li>
   
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
    `
}

// send the message with sendmail
transport.sendMail(mailOptions, (err)=>{

try {

if(err) return res.status(400).json({msg:err})

res.status(200).json({msg:'Thank you for contacting Sathya Sreekar!'})


} catch (err) {
    if(err) return res.status(500).json({msg:'There is server error'})
}

})



})



module.exports=router; 