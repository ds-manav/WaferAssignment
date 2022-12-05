import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './Login.style.css'

const Login = ({ props, route, navigation }) => {
    const [response, setResponse] = useState();
    const [status, setStatus] = useState();
    const [email, setEmail] = useState("")
    const [emailverify, setEmailVerify] = useState(false)
    const [emailotp, setEmailOtp] = useState("")
    const [phone, setPhone] = useState("+91")
    const [OtpPhone, setOtpPhone] = useState("");
    const [phoneVerify, setPhoneVerify] = useState(false);
    const [phoneStatus,setPhoneStatus] = useState();




    // Loggin Function
    async function handleLogin() {
        const loginurl = `http://localhost:8000/api/login`;
        console.log(emailotp)
        const otp = {"emailotp":emailotp}
        const data = await axios.post(loginurl,otp).then(response => {
            setResponse(response.data);
            setStatus(response.status);
        });
        if (status === 202) {
            alert("User is successfully logged in");
            // navigate('/')
            window.location.reload(true);
        }

        else {
            console.log("Incorrect Credentials")
            // navigate('/admin',{state:{userstatus:userstatus}})
        }
    }
    const sendOtpEmail = async () => {
        const purl = `http://localhost:8000/api/email/otp`;
        const data = await axios.post(purl, { "email": email }).then(response=>{return (response.data)}).catch(e=>{return (e)})
        setEmailVerify(true)


    }
    const phoneOtpHandler = async () => {
        const phurl = `http://localhost:8000/api/otp/phone`;
        const data = await axios.post(phurl, { "phone_number": phone }).then(response => {response.data})
        
        setPhoneVerify(true)
    }
    const phoneOtpVerify = async () => {
        const posturl = `http://localhost:8000/api/otp/phone`;
        const details = { "phone_number": phone, "otp": OtpPhone }
        const data = await axios.get(posturl, details).then((response) => {
            setPhoneStatus(response.data)
            return(response.data)
        })
        console.log(phoneStatus);
        
        alert(phoneStatus);
    }

    return (
        <div className="logincontainer">
            <div className="logininput">
                <h1>Login</h1>
                <div className="buttoManage">
                {
                    !emailverify ?
                        <div>
                            <input className="uservalues" type="email" placeholder="Email" value={email} onChange={(e) => {
                                setEmail(e.target.value);
                            }} />
                            <button className="button" onClick={sendOtpEmail}>Send OTP</button>
                        </div>
                        :
                        <div>
                            <input className="uservalues" type="text" placeholder="Enter OTP" value={emailotp} onChange={(e)=>{setEmailOtp(e.target.value)}}/>
                        </div>

                }
                {
                    !phoneVerify ?
                        <div>
                            <input className="uservalues" type="text" placeholder="Phone" value={phone} onChange={(e) => {
                                setPhone(e.target.value)
                            }} />
                            <button className="button" onClick={phoneOtpHandler}>Send OTP</button>
                        </div>
                        :
                        <div>
                            <input className="uservalues" type="text" placeholder="Phone OTP" value={OtpPhone} onChange={(e) => {
                                setOtpPhone(e.target.value)
                            }} />
                            <button className="button" onClick={phoneOtpVerify}>Verify OTP</button>
                        </div>}
                    </div>
                <div className="login">
                    <button id="loginbtn" onClick={handleLogin}>Login</button>
                    <button id="loginbtn" onClick={() => {
                    }}>SignUp</button>
                </div>
            </div>


        </div>
    )
}
export default Login;