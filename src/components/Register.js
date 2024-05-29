import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/register.css';
import Header from './Header';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

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

  const handleRegister = () => {
    const isUsernameValid = validateUsername(username);
    const isPasswordValid = validatePassword(password);

    if (isUsernameValid && isPasswordValid) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      navigate('/login');
    }
  };

  return (
    <>
      <Header />
      <div className='registerLayout'>
        <div className='registerBox'>
          <h1>Register <hr /></h1>
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
          <button className='Logbutton' onClick={handleRegister}>Register</button>
        </div>
      </div>
    </>
  );
};

export default Register;

