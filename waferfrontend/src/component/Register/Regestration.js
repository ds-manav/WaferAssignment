import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Regestration.style.css'
const Regestration = ()=>{
    const navigate = useNavigate();
    const [fname,setFname] = useState("")
    const [emaill,setEmaill] = useState("")
    const [ph,setph] = useState(0)
    const [lname,setLname] = useState("")
    const randomNumberInRange=(min, max)=> {
        return Math.round(Math.random() * (max - min + 1)) + min;
      }
      const [status,setStatus] = useState();
      const [id,setID] = useState();
    async function handleSubmit(){
        await setID(randomNumberInRange(1,1000))
        const user = {"email":emaill,"phone":ph,"firstname":fname,"lastname":lname,"id":id}
        console.log(user)
        const posturl = `http://localhost:8000/api/users/`;
        const postdata = await axios.post(posturl,user).then(response =>{
               setStatus(response.status);
        })
        if(status == 200){
            // localStorage.setItem("users",JSON.stringify(userdetails));
            alert("You are successefully registered");
            navigate("/login")
            window.location.reload(true);
        }
        else {
            alert("Please Try Again");
        }
    
    
     }
     

    return(
        <div>
            {/* <h1>{userdetails}</h1> */}
            <div className="container">
                <div className="innercontainer">
                    <h1>SignUp</h1>
                    <input  className="inputcontainer" type="email" value={emaill} placeholder="Email" onChange={(e)=>{
                            setEmaill(e.target.value)
                    }}/>
                    <input  className="inputcontainer" type="text" value = {fname} placeholder="First Name" onChange={(e)=>{
                            setFname(e.target.value);
                    }}/>
                    <input type="text" className="inputcontainer"  value={lname} placeholder="Last Name" onChange={(e)=>{
                            setLname(e.target.value);
                    }}/>
                    <input type="number" className="inputcontainer"  value={ph} placeholder="Phone" onChange={(e)=>{
                            setph(e.target.value);
                    }}/>
                    <div className="submitbutton">
                    <button id="submit" onClick={handleSubmit}>Submit</button>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Regestration