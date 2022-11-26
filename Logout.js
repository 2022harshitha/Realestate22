import React from "react";
import {useNavigate} from 'react-router-dom'

const Logout = () => {
   const nav = useNavigate();

   const logoutHandle = () => {
    localStorage.clear();
    nav("/");
   }

   return(
    <div>
        <button onClick = {logoutHandle}>
            <b>Log Out</b>
        </button>
    </div>
   )
}
export default Logout;