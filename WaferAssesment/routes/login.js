const router = require('express').Router();
const Otp = require('../db/models/otp')
const accountSid = 'ACa6d1ee9523f9fe09f4b8796e52d7cf2d';
const authToken = 'ebf6bc75cb70c14ef75346b5c2dba080';
const client = require('twilio')(accountSid, authToken);

router.post("/login",async (req,res,next)=>{
    const {emailotp} = req.body
    
    try{
        const s = await Otp.query().select('*').where('otp_val',`${emailotp}`)
    console.log(s.length)
    if((s.length)>0 ){
        const response={"Status":"Success","Details": "OTP Successfully verified"}
        res.status(202).send(response)
    }
    else{
        const response={"Status":"FAILED","Details": "Please Input Correct OTP"}
        res.status(400).send(response);
    }

}
catch(err){
    res.status(404).send(err)
}
})

module.exports = router