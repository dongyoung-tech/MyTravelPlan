import React from "react";

const LogOutButton = () =>{
    const user = JSON.parse(localStorage.getItem('userData'));
    const logoutHandler = () =>{
        localStorage.removeItem('userData');
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
    }
    return(
        <div>
            {user.name} 님
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    )
}

export default LogOutButton;