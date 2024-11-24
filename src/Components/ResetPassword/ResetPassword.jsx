import React, { useState } from 'react';
import axios from 'axios';
import './ResetPassword.css';

const ResetPassword = ({ email }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Validation: Check if password meets criteria (e.g., at least 6 characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      // Make an API request to reset the password
      const response = await axios.post('http://localhost:3000/api/reset-password', {
        email, 
        password
      });
      setSuccessMessage("Password reset successfully!");
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || "Password reset failed. Please try again.");
      setSuccessMessage('');
    }
  };

  return (
    <div className="reset-password">
      <h2 className='resetpassword'>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Password:</label>
          <input className='resetinput'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password:</label>
          <input className='resetinput'
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="reset-button">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
