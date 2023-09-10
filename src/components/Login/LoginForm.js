
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
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userData',JSON.stringify(response.data[0]));
      if(response.data != "Failed") window.location.href='/';
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className='login-con'>
        <div  className='login-con'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
      <span onClick={NewMem}>회원가입</span>
    </div>
  );
}

export default LoginForm;