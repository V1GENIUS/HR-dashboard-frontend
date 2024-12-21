import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      setSuccessMessage("");
      return;
    }

    try {
     
      const response = await fetch("https://hr-dashboard-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Registration successful! Redirecting to login...");
        setErrorMessage(""); 
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
       
        setErrorMessage(data.message || "Registration failed!");
        setSuccessMessage(""); 
      }
    } catch (error) {
      
      setErrorMessage("Something went wrong. Please try again.");
      setSuccessMessage(""); 
    }
  };


  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Welcome to Dashboard</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button className="register" type="submit">
            Register
          </button>
        </form>

        
        {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="error-msg">{errorMessage}</p>}

        <p>
          Already have an account?{" "}
          <b onClick={() => navigate("/")}>
            <b style={{ color: "purple", cursor: "pointer" }}>Login</b>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Register;