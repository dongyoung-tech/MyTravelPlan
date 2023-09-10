import React from "react";

const LogOutButton = () =>{
    const user = JSON.parse(sessionStorage.getItem('userData'));
    const logoutHandler = () =>{
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
        window.location.reload();
    }
    console.log(user);
    return(
        <div>
            {user.name} 님
            <img style={{width:"50px",borderRadius:"30px"}}src={`http://youngtour.dothome.co.kr/upload/${user.file_copied}?567`} alt='profile'></img>
            <button onClick={logoutHandler}>로그아웃</button>
        </div>
    )
}

export default LogOutButton;