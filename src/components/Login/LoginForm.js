
import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // 서버로 로그인 요청을 보냅니다.
      const response = await axios.post('http://youngtour.dothome.co.kr/member/user-info.php', {
        username,
        password,
      });
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData',JSON.stringify(response.data[0]));
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
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
