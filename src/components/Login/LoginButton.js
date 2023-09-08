import React from "react";
import {useNavigate} from 'react-router-dom';

const LoginButton = () =>{
    const navigate = useNavigate();
    const clickHandler = () =>{
        navigate(`/Login`);
    }
    return (
        <div>
            <button onClick={clickHandler} >로그인</button>
        </div>
    )
}

export default LoginButton;