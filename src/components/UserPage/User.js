import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import './user.css';
import CartList from "./CartList";
import CourseList from "./CourseList";
import UserTitle from "./UserTitle";
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
        else{alert('존재하지 않는 페이지 입니다.'); window.history.go(-1);}
      } catch (error) {
        console.error("Login Failed:", error);
      }
    };
    // param이 변경될 때만 getUser 호출
    if (param) {
      getUser(param);
    }
  }, [param, location.search]);

  if(isLoad) return;
  return (
    <>
    <div className="Area-photo"><p>회원정보</p></div>
    <div className='user-info'>
      <UserTitle user={user} item={userData}/>
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
