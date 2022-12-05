
// const {OTP} = require('../sequelize');
const router = require("express").Router();
const { val } = require("objection");
var otpGenerator = require('otp-generator');
const accountSid = 'ACa6d1ee9523f9fe09f4b8796e52d7cf2d';
const authToken = 'ebf6bc75cb70c14ef75346b5c2dba080';
const client = require('twilio')(accountSid, authToken);



// To add minutes to the current time

router.post('/otp/phone', async (req, res, next) => {

  try{

    const {phone_number} = req.body;


   

    const data = client
      .verify
      .services("VAf5dc3e5bc92eaf208423c21e5ac1141c")
      .verifications
      .create({
        to: `${phone_number}`,
        channel:'sms'
      })
    
    data.then(
        function (data) {
            return res.send({"Status":"Success","Details":`OTP Successfully sent`});
        }).catch(
        function (err) {
            return res.status(400).send({"Status":"Failure","Details": err });
    });
    
  }catch(err){
      const response={"Status":"Failure","Details": err.message}
      return res.status(400).send(response)
  }
  
});


router.get('/otp/phone', async (req, res, next) => {

  try{

    const {otp,phone_number} = req.body;
    const d = {}
      await
      client
      .verify
      .services("VAf5dc3e5bc92eaf208423c21e5ac1141c")
      .verificationChecks
      .create({
        to: `${phone_number}`,
        code:`${otp}`,
      }).then(data=>{d['res']=data}).catch(err=>{res.send(err)})

      // const {valid,...data} = res.body
      console.log(d);
      

  
    
  }catch(err){
      const response={"Status":"Failure","Details": err.message}
      return res.status(400).send(response)
  }
  
});

module.exports = router;