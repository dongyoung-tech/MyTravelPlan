import React from "react";

const SideButton = () =>{
    const user = JSON.parse(sessionStorage.getItem("userData"));
   const sideHandler = () =>{
       document.querySelector('.side-menu').style.display='none';
       document.querySelector('.side-overlay').style.display='none';
   }
    const logoutHandler = () =>{
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
        window.location.reload();
    }
return(
    <>
    <div className="side-menu">
        <div className="login-menu">
            {!user || !user.file_copied ? (
        <div className="non_profile_image"></div>
      ) : (
        <img className="profile-image"
            src={`http://youngtour.dothome.co.kr/upload/${user.file_copied}`} alt="프로필 이미지" />
      )}
            <h4>{user && user.name}{!user && "로그인 해주세요"}</h4>
            <div className="s_login_btn_con">
                {user && <a href={`/User?user=${user.id}`}><button>마이페이지</button></a>}
                {user && <button onClick={logoutHandler}>로그아웃</button>}
                {!user &&<a href={`/Login`}><button>로그인</button></a> }
            </div>
        </div>
        <form action="/Keyword">
            <input name="keyword" placeholder="여행지 이름을 입력해주세요"></input>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <ul>
            <a href="/"><li>메인</li></a>
            <a href="/Area"><li>지역별 검색</li></a>
            <a href="/Course"><li>여행코스</li></a>
            <a href="/Freeboard"><li>게시판</li></a>
        </ul>
    </div>
    <div className="side-overlay" onClick={sideHandler}></div>
    </>
)

}

export default SideButton;