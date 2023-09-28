import React from "react";

const LogOutButton = () =>{
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const logoutHandler = () =>{
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
        window.location.reload();
    }
    return(
            <button onClick={logoutHandler}>로그아웃</button>
    )
}

export default LogOutButton;