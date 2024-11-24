import { Link } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BiHide, BiShow } from "react-icons/bi";
import './Login.css';
import { TbReload } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { startSession, sessionExpired, closeSessionExpiredPopup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: '', 
    password: '',
    captchaInput: '' 
    });
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) errors.email = "Invalid email format.";
    if (formData.password.length < 6) errors.password = "Password must be at least 6 characters.";
    if (!formData.captchaInput) errors.captchaInput = "Captcha is required.";
    else if (formData.captchaInput !== captcha) errors.captchaInput = "Incorrect captcha. Please try again.";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate the form before submitting
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
  
    setLoading(true);
   console.log("hii")  
    // Using .then() and .catch() for the API request
    axios
      .post(
        "https://empirical-tootsie-vishvajeet-6c9fa64e.koyeb.app/dashboard/merchantController/login",
        {
          email:formData.email,
          password:formData.password,
        }
      )
      .then((response) => {
        // Handle the response data
        const { code, description } = response.data;

        if (code === "0x0200") {
          toast.success(description );
          startSession(response.token);
          setTimeout(() => navigate("/home"), 1500);
        } else {
          toast.error(description);
          setTimeout(() => navigate("/login"), 1500);
        } 
      })
      .catch((error) => {
        if (error.response) {

          toast.error(
            error.response?.data?.message || "Login failed. Please try again."
          );
        } else if (error.request) {
          toast.error("No response from the server. Please check your internet connection.");
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  


  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData({ ...formData, captchaInput: '' });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific validation error
    setValidationErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };


  return (
    <>
      <ToastContainer />
      {sessionExpired && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">
              <div className='icon-i'>i</div>
            </div>
            <h2>Session Timeout!</h2>
            <p>The Current Session has Expired</p>
            <button className="session-button" onClick={() => { closeSessionExpiredPopup(); navigate('/login'); }}>
              Ok
            </button>
          </div>
        </div>
      )}
      <div className="login-container">
        <div className="login-image">
          <img src="https://fidy-dashboard-images.s3.ap-south-1.amazonaws.com/Images/undraw.png" alt="Login Illustration" />
        </div>
        <div className="login-form-container">
          <div className="login-form">
            <h2>Dashboard!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  className="Emailinput"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}                />
                {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
              </div>
              <div className="form-group">
                <label>Password:</label>
                <div className="password-input">
                  <input
                    className="passwordinput"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password"
                  >
                    {showPassword ? <BiHide /> : <BiShow />}
                  </button>
                </div>
                {validationErrors.password && <p className="error-message">{validationErrors.password}</p>}
              </div>
              <div className="form-group">
                <div className="captcha-container">
                  <span className="captcha-text">{captcha}</span>
                  <button type="button" onClick={reloadCaptcha} className="reload-captcha">
                    <TbReload className="reload" />
                  </button>
                </div>
                <input
                  className="captcha"
                  type="text"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  placeholder="Enter Captcha"
                />
                {validationErrors.captchaInput && <p className="error-message">{validationErrors.captchaInput}</p>}
              </div>
              {/* <div className='register-link'>
                <Link to="/register"className='registerlink'>DoRegister here</Link>
              </div> */}
              <div className="password-forgot">
              <Link to="/register"className='registerlink'>Register here</Link>

                <Link className="forgotpasswrod" href="/forgot">Forgot Password?</Link>
              </div>
              <button type="submit" className={`login-button ${loading ? 'blurred' : ''}`} disabled={loading}>
                {loading ? <div className="spinner"></div> : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="login-footer">
        <p>Copyright © FidyPay 2024, All rights reserved</p>
        <div className="footer-links">
          <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    </>
  );
};

export default Login;
