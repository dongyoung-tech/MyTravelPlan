import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './user.css';
import CartList from "./CartList";
import CourseList from "./CourseList";

const User = () => {
  const [param, setParam] = useState();
  const [isLoad,setLoad] = useState(true);
  const [userData , setData] = useState();
  const location = useLocation();
  const user = JSON.parse(sessionStorage.getItem("userData"));
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userid = searchParams.get("user");
    setParam(userid);
    // getUser 함수를 useEffect 내부로 이동하여 param이 변경될 때만 호출
    const getUser = async (userid) => {
      try {
        // 서버로 로그인 요청을 보냅니다.
        const response = await axios.post(
          "http://youngtour.dothome.co.kr/member/user-list.php",
          {
            userid: userid,
          }
        );    
        if (response.data !== "Failed") {
          setData(response.data[0]);
          setLoad(false);
        }
      } catch (error) {
        console.error("Login Failed:", error);
      }
    };
    // param이 변경될 때만 getUser 호출
    if (param) {
      getUser(param);
    }
  }, [param, location.search]);
  const modifyMove =()=>{
    window.location.href='Login/Modify';
  } 
  if(isLoad) return;
  return (
    <>
    <div className="Area-photo"><p>회원정보</p></div>
    <div className='user-info'>
      <div className="user_p_info"> 
           {userData && userData.file_copied && <img className="profile-image"
            src={`http://youngtour.dothome.co.kr/upload/${userData.file_copied}`} alt="프로필 이미지" />}
            {!userData || !userData.file_copied && <div className="non_profile_image"></div>}
           <div className="user_p_detail">
            <p>이름 : {userData.name}</p>
              <p>아이디 : {userData.id}</p>
              {user && userData.id == user.id  && <button onClick={modifyMove}>회원정보수정</button>}
           </div>
           <p className="user-intro">{userData.intro}</p>
      </div> 
      <div className="user_con_list">
         <h3 className="sub-topic">찜한 여행지</h3>
          {<CartList item={userData.id}/>}
         <h3 className="sub-topic">만든 여행코스</h3>
         <div className="course-list">
            {<CourseList item={userData.name}/>}
         </div>
       </div>
     </div>
    </>
  );
};

export default User;
