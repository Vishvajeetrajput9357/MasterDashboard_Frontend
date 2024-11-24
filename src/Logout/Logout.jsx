import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthContext"; // Ensure correct import
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  const { endSession } = useContext(AuthContext);  // Correctly accessing the endSession function
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    // Call endSession to remove session and token
    endSession();

    // Set timeout to hide alert bar and redirect to login
    const timer = setTimeout(() => {
      setShowAlert(false);
      navigate("/login");
    }, 3000); // Redirect after 3 seconds

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [endSession, navigate]);

  return (
    <div>
      <h1>Logout</h1>
      {showAlert && (
        <div className="alert-bar">
          <p>You have been successfully logged out. Redirecting to login...</p>
        </div>
      )}
    </div>
  );
};

export default Logout; 