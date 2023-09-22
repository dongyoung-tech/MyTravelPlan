import React from "react";
import LogOutButton from "../Login/LogOutButton";
import LoginButton from "../Login/LoginButton";
import {useNavigate} from 'react-router-dom';
const LoginInfo = (props) =>{
    const navigate = useNavigate();
    const user = props.item;
    const clickHandler = () => {
        navigate(`/User?user=${user.id}`);
    }
    if(user){
        return(
            <div className="login_info_con">
                <img src={`http://youngtour.dothome.co.kr/upload/${user.file_copied}`} ></img>
                <p>{user.name} 님</p>
                <p>{user.id}</p>
                <LogOutButton/>
                <button onClick={clickHandler}>마이페이지</button>
            </div>
    
        )
    }
    else{
        return(
            <div className="login_info_con">
                <p>로그인 해주세요</p>
                <LoginButton/>
            </div>
        )
    }
}

export default LoginInfo