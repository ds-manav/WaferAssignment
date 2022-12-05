const express = require('express')
const setup = require('./db/setup')
const User = require('./db/models/user')
const userroute = require('./routes/user')
const otpGen = require('./routes/otp-generator')
const phoneOtp = require('./routes/phone-otp-generator')
const login = require('./routes/login')
const cors = require('cors')
const port = 8000;
setup();

const app = express();
app.use(cors())
app.use(express.json())
app.use('/api/',userroute)
app.use('/api/',otpGen)
app.use('/api/',phoneOtp)
app.use('/api/',login)

// app.get('/users/:id',async (req,res)=>{
//     const id= req.params;
//     const user = await  User.query().findById(id.id);
//     console.log(user);
//     res.send(user);
// })
app.listen(port,()=>{
    console.log("Listening on port 8000")
})
