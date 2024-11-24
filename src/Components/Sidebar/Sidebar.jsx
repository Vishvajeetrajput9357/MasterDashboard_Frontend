

import React, { useState, useEffect, useRef } from "react";
import { GoCircle } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import "../../App.css";
import { AiOutlineHome } from "react-icons/ai";

export default function Sidebar() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [profilePicture, setProfilePicture] = useState("");

  // Set the active link based on the current path
  const activeLink = location.pathname;

  useEffect(() => {
    const storedProfilePicture =
      localStorage.getItem("profilePicture") ||
      "https://fidy-qr-images.s3.ap-south-1.amazonaws.com/kjsstpayLogo.jpg"; // Default logo
    setProfilePicture(storedProfilePicture);
  }, []);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar if clicked outside of it
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar-conatiner">
      {/* Sidebar Toggle Button (for mobile) */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`} ref={sidebarRef}>
        <div className="sidebar-logo">
          <img
            src={profilePicture}
            alt="logo"
            className="sidebar-logo"
          />
        </div>
        <h2 className="Dashboard-headind">
          <AiOutlineHome className="dashboard-icon" />
          Dashboard
        </h2>
        <ul className="sidebar-link">
          <li className="link-item">
            <Link
              to="/"
              className={`AnkarTag ${activeLink === "/" ? "active" : ""}`}
            >
              <GoCircle className="icon-link" />
              <span>Create Mandate</span>
            </Link>
          </li>
          <li className="link-item">
            <Link
              to="/debitpresetation"
              className={`AnkarTag ${
                activeLink === "/debitpresetation" ? "active" : ""
              }`}
            >
              <GoCircle className="icon-link" />
              <span>Debit Presentation</span>
            </Link>
          </li>
          <li className="link-item">
            <Link
              to="/transactionreport"
              className={`AnkarTag ${
                activeLink === "/transactionreport" ? "active" : ""
              }`}
            >
              <GoCircle className="icon-link" />
              <span>Transaction Report</span>
            </Link>
          </li>
          <li className="link-item">
            <Link
              to="/sattlementreport"
              className={`AnkarTag ${
                activeLink === "/sattlementreport" ? "active" : ""
              }`}
            >
              <GoCircle className="icon-link" />
              <span>Settlement Report</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}



