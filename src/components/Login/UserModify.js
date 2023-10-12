import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserModify = () => {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const userid = user.id;
  const [formData, setFormData] = useState({
    pass: user.pass,
    name: user.name, // 수정: 'username'에서 'name'으로 변경
    email: user.email,
    intro: user.intro,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    if (!formData) return;
    try {
      const response = await axios.post(
        "http://youngtour.dothome.co.kr/member/member-modify.php",
        {
          userid: userid,
          pass: formData.pass,
          name: formData.name, // 수정: 'username'에서 'name'으로 변경
          email: formData.email,
          intro: formData.intro,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(response.data.message == 'success') {
        sessionStorage.removeItem('userData');
        sessionStorage.removeItem('isLoggedIn');
        alert('회원정보를 수정하였습니다. 수정된 계정으로 로그인 해주세요');
        navigate('/Login');
        window.location.reload();
      }
      else alert(response.data.message);
    } catch (error) {
      console.error("Join Failed:", error);
    }
  };

  return (
    <div>
      <div className="Area-photo"><p>회원정보수정</p></div>
      <img className="j-logo" src="http://youngtour.dothome.co.kr/images/letter-logo.png"></img>
      <form className="join_frm" onSubmit={handleFormSubmit}>
        <div className="join-sub">
          <input
            name="pass"
            className="pass"
            type="password"
            placeholder="비밀번호"
            value={formData.pass}
            onChange={handleInputChange}
          />
          <input
            name="name" // 수정: 'username'에서 'name'으로 변경
            className="username" // 수정: 'username'에서 'name'으로 변경
            type="text"
            placeholder="닉네임"
            value={formData.name}
            onChange={handleInputChange}
          />
          <textarea
            name="intro"
            className="intro"
            placeholder="자기 소개"
            value={formData.intro}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
};

export default UserModify;
