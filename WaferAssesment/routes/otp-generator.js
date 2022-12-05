const router = require('express').Router();
var otpGenerator = require('otp-generator')
const nodemailer  = require('nodemailer')
const Otp = require('../db/models/otp'); 
const { route } = require('./user');
const sgMail = require('@sendgrid/mail')
API_KEY = "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"

sgMail.setApiKey(API_KEY)
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}


router.post('/email/otp',async (req,res,next)=>{
    try{
        const{email} = req.body
        if(!email){
            const response={"Status":"Failure","Details":"Email not provided"}
            return res.status(400).send(response) 
          }

        
        const uuid = between(0,800)
        const generatedOtp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
        console.log(typeof(generatedOtp))
        const current = new Date();
        // const expiration_time = AddMinutesToDate(current,10);
        const otpObject = {"id":uuid,"otp_val":generatedOtp}
        try{
        const instanceOtp = await Otp.query().insert(otpObject)
        }
        catch(e){
          // console.log(e);
        }
        const message = {
          to: `${email}`,
          from:'manav.pathak.2001@gmail.com',
          subject:"Otp For verification",
          text:`Your One Time Otp is ${generatedOtp}`
        }
    
        sgMail.send(message).then((data)=>{res.send(data)}).catch(err=>{res.send(err)});
        
      }

    
    catch(err){
        const response={"Status":"New Failure","Details": err.message}
        return res.status(400).send(response)
      }
})

module.exports = router