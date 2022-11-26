import React, { useState } from "react";
import "./Login.css";
import {json, Link, useNavigate} from "react-router-dom"
import { Icon } from 'react-icons-kit'
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
import {eye} from 'react-icons-kit/ionicons/eye'
import axios from 'axios'

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeDisabled)

    const handleToggle = () => {
        if(type === "password"){
            setIcon(eye)
            setType("text")
        }else{
            setIcon(eyeDisabled)
            setType("password");
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();      // prevent the default nature
        console.log(email, password);

        const Data = {              // the data type
            email : email,
            password : password
        }

        localStorage.setItem("userId", Data.email);
        axios.post("http://localhost:5000/user/login", Data)  
        .then((response) => {
            console.log(response.data.message);
            if(response.data.message === "success"){
                 localStorage.setItem("token", response.data.token);
                navigate("/home-page");
            }else{
                alert("Create a New Account");
            }
        })
        .catch((error) => {
            console.log(error);
            alert("You are a New User. Please Create a New Account");
        })
    };

  return (
    <div>
        <div  className = "container">
            <div className="main-form">
                <div className="logo">
                    <img src={require("../Images/Logo.jpg")}></img>
                </div>
                <div className="paragraph">
                    <p>Enter your crentitals to access your account</p>
                </div>
                <form action = "" method = "POST">
                    <div >
                        <input
                        name="User-ID"
                        placeholder= "User ID"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input-1"
                        ></input>
                    </div>
                    <div className="input-field">
                        <input 
                        name = "password"
                        placeholder="password"
                        value = {password}
                        type = {type}
                        onChange = {(e) => setPassword(e.target.value)}
                        className = "input-2"
                        />
                        <span  onClick = {handleToggle}>
                            <Icon icon = {icon} size = {25} className = "toggle-icon"/>
                        </span>
                    </div>
                    <div className="tonew">
                        <button type="submit" className="button" onClick={submitHandler}>Sign In</button>
                    </div>
                </form>
                <div>
                    <p><b>Don't have account ?</b></p>
                </div>
                <Link to = "/signup">
                    <p className="tonew">Create Account</p>
                </Link>
            </div>
        </div>
        
    </div>
  );
};
export default Login;
