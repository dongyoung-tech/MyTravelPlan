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

  return (
    <>
    <div className="user-photo"><h2>회원정보</h2></div>
    <div className='user-info'>
         {!isLoad && <img className ='profile-image' src = {`http://youngtour.dothome.co.kr/upload/${userData.file_copied}`}></img>}
         <h2>{!isLoad && userData.name}</h2>
         <h4>{!isLoad && userData.id}</h4>
         <p>{!isLoad && userData.intro}</p>
         <h3 className="sub-topic">찜한 여행지</h3>
         <div className="cart-list">
            {!isLoad && <CartList item={userData.id}/>}
         </div>
         <h3 className="sub-topic">만든 여행코스</h3>
         <div className="course-list">
            {!isLoad && <CourseList item={userData.name}/>}
         </div>
     </div>
    </>
  );
};

export default User;
