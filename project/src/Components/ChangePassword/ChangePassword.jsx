import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import './ChangePassword.css'
import { BiHide, BiShow } from "react-icons/bi"; // Show/hide icons

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="change-password-conatiner">
      <div className="change-password-main">
        <h1>
          Change Password
          <CiLock className="lock-icon" />
        </h1>
        <p>Your new password must be different from previously used passwords</p>
        <form className="changepassword">
          <div className="changepassword-main">
            <label>Current Password</label>
            <input
            className="changepasswordinput"
              type="password"
              placeholder="Current Password"
              value={formData.currentpassword}
              onChange={(e) =>
                setFormData({ ...formData, currentpassword: e.target.value })
              }
            />
            
          </div>
          <div className="changepassword-main">
          <label>New Password</label>

            <input
            className="changepasswordinput"
              type="password"
              placeholder="New Password"
              value={formData.newpassword}
              onChange={(e) =>
                setFormData({ ...formData, currentpassword: e.target.value })
              }
            />
          </div>
          <div className="changepassword-main">
          <label>Confirm Password</label>

            <input
            className="changepasswordinput"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              onChange={(e) =>
                setFormData({ ...formData, currentpassword: e.target.value })
              }
            />
          </div>
          <button type="submit" className="changepassword-submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}
