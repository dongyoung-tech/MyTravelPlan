import React from "react";

const UserTitle = (props) =>{
    const modifyMove =()=>{
        window.location.href='Login/Modify';
      } 
    return (

        <div className="user_p_info"> 
            {props.item.file_copied && <img className="profile-image"
            src={`http://youngtour.dothome.co.kr/upload/${props.item.file_copied}`} alt="프로필 이미지" />}
            {!props.item || !props.item.file_copied && <div className="non_profile_image"></div>}
            <div className="user_p_detail">
            <p>{props.item.name}</p>
            <p>{props.item.id}</p>
            {props.user && props.item.id == props.user.id  && <button onClick={modifyMove}>회원정보수정</button>}
            </div>
            <p className="user-intro">{props.item.intro}</p>
        </div> 
    ) 
}
export default UserTitle;