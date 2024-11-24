import React, { useState } from 'react';
import './Forgot.css';
import { IoChevronBack } from "react-icons/io5";

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset submission logic here
    console.log('Reset link sent to:', email);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <img  src="https://fidy-qr-images.s3.ap-south-1.amazonaws.com/kjsstpayLogo.jpg" alt="Logo" className="logo" /> {/* Replace with your actual logo path */}
        <h2 className='heading'>Forgot Password? <span role="img" aria-label="lock">🔒</span></h2>
        <p className='paragraph'>Enter your email and we'll send you instructions to reset your password</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input className='emailforget'
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="reset-button">Send reset link</button>
        </form>
        <a href="/Login" className="back-to-login"><IoChevronBack className='back-icon' />
        Back to login</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
