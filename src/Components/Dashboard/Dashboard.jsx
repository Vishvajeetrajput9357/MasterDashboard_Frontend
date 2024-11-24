// Dashboard.js
import React, { useState } from "react";
import "./Dashboard.css";
import UserProfile from "../UserProfile/UserProfile";
import { FaRegCircle } from "react-icons/fa6";
import SingleRegistration from "../SingleRegistration/SingleRegistration";

export default function Dashboard() {
  // Mock user object with profilePicture
  const user = {
    profilePicture: "https://via.placeholder.com/150", // Replace with actual URL or local image path
    name: "Hemendra Singh",
  };
  


  return (
    <div className="container-fluid">
      <UserProfile user={user} />
      <div className="row" >
        <div className="col-md-7">
          <div className="username">
            <div className="usernameimg-conatainer">
              {/* <img src='' alt=''/> */}
              <FaRegCircle className="usernameimg" />
            </div>
            <label>Hello {user.name},</label>
            <p>Revolutionize Your Financial Needs with KJSSTPAY!</p>
          </div>
        </div>
        <div className="col-md-5" id="imagehelp">
          <div className="helpinfo">
            <img
              className="helpimg"
              src="https://ocr-image-aws.s3.ap-south-1.amazonaws.com/42ea013f-ebd1-4526-8d58-81b61196cea0"
              alt=""
            />
          </div>

          <label className="helpnumber">9216248649</label>
          <address className="emailaddress">
            {" "}
            <a href="support@kjsst.com">support@kjsst.com</a>
          </address>
          <p>For any further assistance kindly contact</p>
        </div>

      </div>
      <SingleRegistration/>
    </div>
  );
}
