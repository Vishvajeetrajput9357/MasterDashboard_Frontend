



import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { BiHide, BiShow } from "react-icons/bi";
import { TbReload } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import AadharOtp from "../AadharOtp/AadharOtp";

const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length: 6 }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join("");
};

const Register = () => {
  const { setUserData } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    merchantFirstname: "",
    merchantLastname: "",
    merchantEmail: "",
    merchantPhone: "",
    merchantPassword: "",
    merchantBusinessName: "",
    captchaInput: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false); // New state to track registration status

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setValidationErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.merchantFirstname.trim()) errors.merchantFirstname = "First name is required.";
    if (!formData.merchantLastname.trim()) errors.merchantLastname = "Last name is required.";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.merchantEmail)) errors.merchantEmail = "Invalid email format.";
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.merchantPhone)) errors.merchantPhone = "Phone must be 10 digits.";
    if (formData.merchantPassword.length < 6) errors.merchantPassword = "Password must be at least 6 characters.";
    if (formData.merchantPassword !== confirmPassword) errors.confirmPassword = "Passwords do not match.";
    if (!formData.merchantBusinessName.trim()) errors.merchantBusinessName = "Business name is required.";
    if (formData.captchaInput !== captcha) errors.captchaInput = "Incorrect CAPTCHA.";

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
  //  console.log("hii")  
    // Using .then() and .catch() for the API request
    axios
      .post(
        "https://empirical-tootsie-vishvajeet-6c9fa64e.koyeb.app/dashboard/merchantController/merchantregistration",
        {
          merchantFirstname: formData.merchantFirstname,
          merchantLastname: formData.merchantLastname,
          merchantEmail: formData.merchantEmail,
          merchantPhone: formData.merchantPhone,
          merchantPassword: formData.merchantPassword,
          merchantBusinessName: formData.merchantBusinessName,
        }
      )
      .then((response) => {
        // Handle the response data
        const { code, description } = response.data;
        if (code === "0x0200") {
          toast.success(description );
          setUserData(formData);
          setIsRegistered(true); // Update state to show AadharOtp

          // setTimeout(() => navigate("/login"), 1500);
        } else {
          toast.error(description);
          setTimeout(() => navigate("/login"), 1500);
        } 
      })
      .catch((error) => {
        if (error.response) {

          toast.error(
            error.response?.data?.message || "Registration failed. Please try again."
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      captchaInput: "",
    }));
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} />
      {/* {!isRegistered ?( */}
      <div className="register-container">
        <div className="register-image">
          <img
            src="https://fidy-dashboard-images.s3.ap-south-1.amazonaws.com/Images/undraw.png"
            alt="Register Illustration"
          />
        </div>
        {!isRegistered ?(
          <div className="register-form-container">
          <div className="register-form">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              {/** Form Fields **/}
              {[
                { label: "First Name", name: "merchantFirstname", type: "text" },
                { label: "Last Name", name: "merchantLastname", type: "text" },
                { label: "Email", name: "merchantEmail", type: "email" },
                { label: "Phone Number", name: "merchantPhone", type: "tel" },
                { label: "Business Name", name: "merchantBusinessName", type: "text" },
              ].map(({ label, name, type }) => (
                <div className="form-group" key={name}>
                  <label>{label}:</label>
                  <input
                    className={`${name}-input`}
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                  {validationErrors[name] && (
                    <p className="error-message">{validationErrors[name]}</p>
                  )}
                </div>
              ))}

              {/** Password Fields */}
              <div className="form-group">
                <label>Password:</label>
                <div className="password-input">
                  <input
                    className="passwordinput"
                    type={showPassword ? "text" : "password"}
                    name="merchantPassword"
                    value={formData.merchantPassword}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="toggle-password"
                  >
                    {showPassword ? <BiHide /> : <BiShow />}
                  </button>
                </div>
                {validationErrors.merchantPassword && (
                  <p className="error-message">{validationErrors.merchantPassword}</p>
                )}
              </div>

              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  className="passwordinput"
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
                {validationErrors.confirmPassword && (
                  <p className="error-message">{validationErrors.confirmPassword}</p>
                )}
              </div>

              {/** CAPTCHA */}
              <div className="form-group">
                <label>CAPTCHA:</label>
                <div className="captcha-container">
                  <span className="captcha-text">{captcha}</span>
                  <button type="button" onClick={reloadCaptcha} className="reload-captcha">
                    <TbReload />
                  </button>
                </div>
                <input
                  className="captchainput"
                  type="text"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  placeholder="Enter the Captcha"
                />
                {validationErrors.captchaInput && (
                  <p className="error-message">{validationErrors.captchaInput}</p>
                )}
              </div>

              <div className="anotherlink">
                <Link to="/login">Already Have Account?</Link>
              </div>
              <button
                type="submit"
                className={`register-button ${loading ? "blurred" : ""}`}
              >
                {loading ? <div className="spinner"></div> : "Register"}
              </button>
            </form>
          </div>
        </div>
      ):(

        <AadharOtp/>
      )}
      </div>
    </>
  );
};

export default Register; 