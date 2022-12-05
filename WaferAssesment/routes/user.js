const { response } = require('express');
const express = require('express')
const User = require('../db/models/user')
const route = express.Router();

route.post('/users', async (req,res,next)=>{
    try{
    const user = req.body;
   const response = await checkUserAlreadyExisted(user)
   if(response["Status"] === "Valid"){
    const u = await User.query().insertAndFetch(user);
    res.send(u);
   }
   else{
    res.status(400).send(response.Details);
   }} 
   catch(e){
    res.status(400).send("Server Error Please Try Again")
    console.log(e)
   }
}) 

async function checkUserAlreadyExisted(user){
    const u = await User.query().select('*').where('email',`${user.email}`)
    if((u.length > 0)){
        const response={"Status":"Failure","Details": "User Already Exist"}
        return response;
    }
    else{
        const response = {"Status":"Valid"}
        return response;
    }

}

module.exports = route;