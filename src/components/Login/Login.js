import React from "react";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";
import UserModify from "./UserModify";
const Login = () =>{

    return(
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/NewMember" element={<JoinForm/>}/>
            <Route path="/Modify" element={<UserModify/>}/>
       </Routes>
    )
}

export default Login;