import React, { useState } from "react";
import axios from 'axios';

const JoinForm = () => {
  const [memberValid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    userid: "",
    pass: "",
    passCheck:"",
    username: "",
    intro: "",
    upfile: null, // 파일 업로드를 위한 초기값
  });

  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;

    // 파일 업로드 필드인 경우 파일 정보를 설정
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: files[0], // 첫 번째 파일만 업로드
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    LoginCheck();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const useridText = document.forms[0].userid.value;
    const userpassText = document.forms[0].pass.value;
    const usernameText = document.forms[0].username.value;
    if(useridText == "") {alert('아이디를 입력해주세요'); return;}
    if(userpassText == "") {alert('비밀번호 를 입력해주세요'); return;}
    if(usernameText == "") {alert('닉네임을 입력해주세요'); return;}
    if(userpassText != formData.passCheck) {alert('비밀번호 확인을 다시 해주세요!'); return}
    if(!memberValid){
      alert('아이디 형식을 충족 시켜주세요');
      return;
    }
    try {
      const formDataToSend = {
        userid:formData.userid,
        pass:formData.pass,
        username:formData.username,
        intro:formData.intro,
        upfile:formData.upfile,
      }
      console.log('전송할데이터',formDataToSend.userid);
      // 서버로 회원가입 요청을 보냅니다.
      const response = await axios.post('http://youngtour.dothome.co.kr/member/member-join.php', formDataToSend, {
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if(response.data.trim() == "success!") window.location.href='/';
      else{
        alert(response.data);
        return;
      }
    } catch (error) {
      console.error('Join Failed:', error);
    }
  };
  const LoginCheck = () =>{
    const regex = /^(?=.*[a-zA-Z])(?=.*[\W_])[\da-zA-Z\W_]*$/;
    const idPattern =  /^(?=.*[a-zA-Z])[a-zA-Z\d]+$/;
    const useridText = document.querySelector('.userid').value;
    const userpassText = document.querySelector('.pass').value;
    if(idPattern.test(useridText))  {
      if(useridText.length >0){
        document.querySelector(".IdText").innerHTML = "";
        setValid(true);
      }
    }
    else {
        if(useridText.length >0){
          document.querySelector(".IdText").innerHTML =
          "아이디는 영어 와 숫자만 사용 하셔야 합니다.";
          setValid(false);
        }
        else document.querySelector(".IdText").innerHTML = "";
        
    }
    // 입력한 패스워드가 정규식과 일치하는지 확인
    if (regex.test(userpassText)) {
        document.querySelector(".passText").innerHTML = "";
        setValid(true);
    } else {
      if(userpassText.length >0){
        document.querySelector(".passText").innerHTML =
          "패스워드는 영어와 특수문자와 를 포함해야합니다.";
          setValid(false);
      }
      else document.querySelector(".passText").innerHTML = "";;
    }

  }
  return (
    <div>
      <div className="Area-photo"><p>회원가입</p></div>
      <img  className='j-logo'src="http://youngtour.dothome.co.kr/images/letter-logo.png"></img>
      <form className="join_frm" onSubmit={handleFormSubmit}>
        <div className="join-sub">
        <input
            name="userid"
            className="userid"
            type="text"
            placeholder="아이디"
            value={formData.userid}
            onChange={handleInputChange}
          />
          <span className="IdText"></span>
          <input
            name="pass"
            className="pass"
            type="password"
            placeholder="비밀번호"
            value={formData.pass}
            onChange={handleInputChange}
          />
          <input
            name="passCheck"
            className="passCheck"
            type="password"
            placeholder="비밀번호 확인"
            onChange={handleInputChange}
          />
            <span className="passText"></span>
          <input
            name="username"
            className="username"
            type="text"
            placeholder="닉네임"
            value={formData.username}
            onChange={handleInputChange}
          />
          <textarea
            name="intro"
            className="intro"
            placeholder="자기 소개"
            value={formData.intro}
            onChange={handleInputChange}
          ></textarea>
          <input
            name="upfile"
            className="upfile"
            type="file"
            onChange={handleInputChange}
          />
          </div>
          <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default JoinForm;
