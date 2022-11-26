import React from "react";
import "./SignUp.css"
import { useState } from "react";
import { Icon } from 'react-icons-kit'
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
import {eye} from 'react-icons-kit/ionicons/eye'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const [newtype, setNewType] = useState("password")
    const [newicon, setNewIcon] = useState(eyeDisabled);
    const [oldtype, setOldType] = useState("password")
    const[oldicon, setOldIcon] = useState(eyeDisabled)

    const ToggleSubmit = () => {
        if(newtype === "password"){
            setNewIcon(eye)
            setNewType("text")
        }else{
            setNewIcon(eyeDisabled)
            setNewType("password")
        }
    }

    const newToggleSubmit = () => {
        if(newtype === "password"){
            setOldIcon(eye)
            setOldType("text")
        }else{
            setOldIcon(eyeDisabled)
            setOldType("password")
        }
    }
  
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(email, password);
    
      let Data = {
        email : email,
        password : password
      }
      // check all the required eligiblity criteria for email and password
      if(!Data.email.split("@").length > 1){
        alert("Email format is incorrect")
      }else if(Data.password.length < 5){
        alert("Please give a Password of atleast 5 length Charcters")
      }else if(Data.password !== confirmPassword){
        alert("Password and Confirm Password must be same")
      }else{
        axios.post("http://localhost:5000/user/register", Data)
        .then(function (response) {
            console.log(response.data);
            alert(response.data.message);
            if (response.data.message === "success") {
                navigate('/')
            }
        })
        .catch(function (error) {
            console.log(error);
            alert('error')
        });
        // .then((response) => {
        //     console.log(response.data)
        //     if(response.data.message === "success"){
        //     }
        // })
        // .catch((error) => {
        //     console.log(error);
        //     alert("Not able to register your account");
        // })
      }
    };

    return(
        <div>
            <div  className = "container">
            <div className="main-form">
                <div className="logo">
                    <img src={require("../Images/Logo.jpg")}></img>
                </div>
                <div className="paragraph">
                    <p>Create a New Account</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div >
                        <input
                        name="Mail-ID"
                        placeholder= "Mail ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-1"
                        ></input>
                    </div>
                    <div className="input-field">
                        <input
                        name="password"
                        placeholder="Password"
                        value={password}
                        type = {newtype}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-2"
                        />
                        <span onClick = {ToggleSubmit}>
                            <Icon icon = {newicon} size = {25} className = "toggle-icon"/>
                        </span>
                    </div>
                    <div className="new-input-field">
                        <input
                        name="Confirm password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        type = {oldtype}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-2" 
                        />
                        <span onClick = {newToggleSubmit}>
                            <Icon icon = {oldicon} size = {25} className = "new-toggle"/>
                        </span>
                    </div>
                    <div className="tonew">
                        <button type="submit" className="button">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
export default SignUp;