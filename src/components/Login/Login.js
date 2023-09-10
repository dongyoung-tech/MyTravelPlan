import React from "react";
import { Routes, Route } from 'react-router-dom';
import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";

const Login = () =>{

    return(
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/NewMember" element={<JoinForm/>}/>
       </Routes>
    )
}

export default Login;