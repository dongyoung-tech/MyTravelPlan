import React, { useState } from "react";
import axios from 'axios';

const JoinForm = () => {
  const [formData, setFormData] = useState({
    userid: "",
    pass: "",
    username: "",
    email: "",
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
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { userid, pass, username, email, intro, upfile } = formData;

      // FormData를 생성하고 파일 및 필드 정보를 추가
      const formDataToSend = new FormData();
      formDataToSend.append('userid', userid);
      formDataToSend.append('pass', pass);
      formDataToSend.append('username', username);
      formDataToSend.append('email', email);
      formDataToSend.append('intro', intro);
      formDataToSend.append('upfile', upfile);

      // 서버로 회원가입 요청을 보냅니다.
      const response = await axios.post('http://youngtour.dothome.co.kr/member/member-join.php', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Content-Type 설정
        },
      });
      
    } catch (error) {
      console.error('Join Failed:', error);
    }
  };

  return (
    <div>
      <img  className='j-logo'src="http://youngtour.dothome.co.kr/images/letter-logo.png"></img>
      <form className="join_frm" onSubmit={handleFormSubmit}>
        <div className="join-sub">
        <input
            name="userid"
            className="userid"
            type="text"
            placeholder="이름"
            value={formData.userid}
            onChange={handleInputChange}
          />
          <input
            name="pass"
            className="pass"
            type="password"
            placeholder="비밀번호"
            value={formData.pass}
            onChange={handleInputChange}
          />
          <input
            name="username"
            className="username"
            type="text"
            placeholder="닉네임"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            name="email"
            className="email"
            type="email"
            placeholder="이메일"
            value={formData.email}
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
