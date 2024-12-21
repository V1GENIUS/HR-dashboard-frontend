import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <>
     <div className="login-container">
      <div className='white-box'>
      <div className="login-box">
        <h1>Welcome to Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login" type="submit">Log In</button>
        </form>
        <p style={{display:'flex' ,marginLeft: '100px' , textAlign:'center'}}>
          Don’t have an account? 
          <div style={{ color: "purple", cursor: "pointer" , marginLeft:'10px' }} onClick={() => navigate("/register")}> Register</div>
        </p>
      </div>
      <div>
        ria
      </div>
      </div>
      
    </div>
    </>
  );
};

export default LoginPage;
