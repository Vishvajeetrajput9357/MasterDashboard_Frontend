import React, { useState } from 'react';
import axios from 'axios';
import './OTPVerification.css';

const OTPVerification = ({ email }) => {
  const [otp, setOtp] = useState(['', '', '', '']); // Array to hold values of each OTP box
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle OTP change in individual box
  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    // Only allow 1 character input and update the OTP array
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Focus the next input automatically when a character is entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Verify OTP on button click
  const handleVerifyOtp = async () => {
    const otpString = otp.join(''); // Join the OTP array into a single string
    if (otpString.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      setSuccessMessage('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/verify-otp', { email, otp: otpString });
      setSuccessMessage("OTP verified successfully!");
      setError('');
      // Perform any further actions (e.g., redirect to dashboard)
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed. Please try again.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="otp-verification">
      <h2 className='otpheading'>OTP Verification</h2>
      <p className='otppara'>Enter the OTP sent to your email: {email}</p>
      
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(e, index)}
            placeholder="0"
            maxLength="1"
            className="optverifications"
          />
        ))}
      </div>

      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button className='otpbtn' onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  );
};

export default OTPVerification;
