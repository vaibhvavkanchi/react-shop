import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
import { MdErrorOutline } from "react-icons/md";
import { useAuth } from '../context/AuthContext';
import Header from './Header';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [log, setLog] = useState('')
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const validateUsername = (username) => {
    if (username.length >= 3) {
      setUsernameError('');
      return true;
    } else {
      setUsernameError('Username must be at least 3 characters long.');
      return false;
    }
  };

  const validatePassword = (password) => {
    if (password.length >= 6 && /\d/.test(password)) {
      setPasswordError('');
      return true;
    } else {
      setPasswordError('Password must be at least 6 characters long and contain at least one number.');
      return false;
    }
  };
  const handleLogin = () => {
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    const user = JSON.parse(localStorage.getItem('user'));
    if (isUsernameValid && isPasswordValid) {
      if (user && user.username === username && user.password === password) {
        localStorage.setItem('isAuthenticated', true);
        setIsAuthenticated(true);
        navigate('/home');

      } else {
        setLog('Invalid credentials');
      }

    }
  };

  return (
    <>
      <Header />
      <div className='registerLayout'>
        <div className='registerBox'>
          <h1>Login <hr /></h1>
          <div style={{ width: '100%' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => { setUsername(e.target.value); validateUsername(username); }}
              onBlur={() => validateUsername(username)}
            />
            {usernameError && <p className='error'>{usernameError}</p>}
          </div>
          <div style={{ width: '100%' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); validatePassword(password); }}
              onBlur={() => validatePassword(password)}
            />
            {passwordError && <p className='error'>{passwordError}</p>}
          </div>
          {log &&
            <div className='logBox'>
              <div className='errorLog'><MdErrorOutline />{log}</div>
            </div>
          }
          <button className='Logbutton' onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
