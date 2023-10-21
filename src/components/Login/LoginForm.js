
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './login.css';
const LoginForm =()=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const NewMem = () =>{
    navigate('NewMember');
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post('http://youngtour.dothome.co.kr/member/user-info.php', {
        username,
        password,
      });
      if(typeof response.data != 'string'){
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('userData',JSON.stringify(response.data[0]));
        window.location.href='/';
      } 
      else alert(response.data);

    } catch (error) {
      console.error('Login Failed:', error);
    }
  };


  return (
    <div className='login-page'>
      <form className='login-con'>
      <h2>마이트레블플랜</h2>
        <div className='login-box'>
          <div  className='login-sub-con'>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder='아이디'
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder='비밀번호'
            />
          </div>
          <div>
          </div>
        </div>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={NewMem}>회원가입</button>
      </form>
    </div>
  );
}

export default LoginForm;
