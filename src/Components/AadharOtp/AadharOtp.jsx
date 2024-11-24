import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BiHide, BiShow } from "react-icons/bi";
import { TbReload } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';


const Login = () => {
  const { startSession, sessionExpired, closeSessionExpiredPopup } = useContext(AuthContext);
  const navigate = useNavigate();

  // States for Login form
  const [formData, setFormData] = useState({ email: '', password: '', captchaInput: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // States for eKYC
  const [ekycStep, setEkycStep] = useState("aadhaar-step");
  const [ekycData, setEkycData] = useState({
    aadhaarNumber: "",
    otp: "",
    bankAccount: "",
    ifscCode: "",
    panNumber: "",
  });

  // State to toggle between Login and eKYC
  const [isEkycMode, setIsEkycMode] = useState(false);

  // Generate captcha on component mount
  useEffect(() => {
    const generateCaptcha = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return Array.from({ length: 6 }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
    };
    setCaptcha(generateCaptcha());
  }, []);

  // Validate Login Form
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

  // Handle Login Submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setLoading(true);
    axios.post(
      "https://empirical-tootsie-vishvajeet-6c9fa64e.koyeb.app/dashboard/merchantController/login",
      { email: formData.email, password: formData.password }
    )
    .then((response) => {
      const { code, description } = response.data;
      if (code === "0x0200") {
        toast.success(description);
        startSession(response.token);
        setTimeout(() => navigate("/home"), 1500);
      } else {
        toast.error(description);
      }
    })
    .catch((error) => {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  // Handle eKYC Submit
  const handleEkycSubmit = (e) => {
    e.preventDefault();
    toast.success("eKYC completed successfully!");
    setEkycStep("aadhaar-step");
    setEkycData({
      aadhaarNumber: "",
      otp: "",
      bankAccount: "",
      ifscCode: "",
      panNumber: "",
    });
    setIsEkycMode(false); // Switch back to login mode
  };

  // Handle field changes for eKYC
  const handleEkycChange = (e) => {
    const { id, value } = e.target;
    setEkycData({ ...ekycData, [id]: value });
  };

  // Reload captcha
  const reloadCaptcha = () => {
    setCaptcha(generateCaptcha());
    setFormData({ ...formData, captchaInput: '' });
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="login-image">
          <img src="https://fidy-dashboard-images.s3.ap-south-1.amazonaws.com/Images/undraw.png" alt="Login Illustration" />
        </div>
        <div className="login-form-container">
          { (
            <div className="ekyc-form">
              <h2>eKYC Verification</h2>
              <form onSubmit={handleEkycSubmit}>
                {ekycStep === "aadhaar-step" && (
                  <div>
                    <label>Aadhaar Number:</label>
                    <input
                      id="aadhaarNumber"
                      value={ekycData.aadhaarNumber}
                      onChange={handleEkycChange}
                      placeholder="Enter Aadhaar Number"
                    />
                    <button type="button" onClick={() => setEkycStep("bank-step")}>Next</button>
                  </div>
                )}
                {ekycStep === "bank-step" && (
                  <div>
                    <label>Bank Account:</label>
                    <input
                      id="bankAccount"
                      value={ekycData.bankAccount}
                      onChange={handleEkycChange}
                      placeholder="Enter Bank Account"
                    />
                    <label>IFSC Code:</label>
                    <input
                      id="ifscCode"
                      value={ekycData.ifscCode}
                      onChange={handleEkycChange}
                      placeholder="Enter IFSC Code"
                    />
                    <button type="button" onClick={() => setEkycStep("pan-step")}>Next</button>
                  </div>
                )}
                {ekycStep === "pan-step" && (
                  <div>
                    <label>PAN Number:</label>
                    <input
                      id="panNumber"
                      value={ekycData.panNumber}
                      onChange={handleEkycChange}
                      placeholder="Enter PAN Number"
                    />
                    <button type="submit">Submit</button>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
