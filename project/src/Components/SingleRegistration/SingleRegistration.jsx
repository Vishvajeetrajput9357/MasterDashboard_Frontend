import React from "react";
import { NavLink } from "react-router-dom";
import "./SingleRegistration.css";
import "../../App.css";

import { useState, useRef } from "react";
import BulkRegistration from "../BulkRegistration/BulkRegistration";
import { FaArrowUp } from "react-icons/fa6";

export default function SingleRegistration() {
  const formRef = useRef(null);
  const nameRef = useRef(null); // Example: Ref for the "Customer Name" field
  const [activeLink, setActiveLink] = useState("single");
  const [errors, setErrors] = useState({});

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [formData, setFormData] = useState({
    customername: "",
    customeremail: "",
    mobilenumber: "",
    collectionamount: "",
    loanamount: "",
    accounttype: "Saving",
    accountnumber: "",
    confirmaccountnumber: "",
    bankifsc: "",
    bankname: "",
    debittype: "",
    authtype: "Net Banking",
    categorycode: "",
    frequencytype: "",
    startdate: "",
    enddate: "",
    utilitycode: "",
  });

  const bankname = [
    "bank of baroda",
    "uco bank",
    "indian bank",
    "state bank of india",
    "yes bank",
  ];

  const debittype = ["Fixed Amount", "maximum Amount"];

  const categorycode = [
    "Loan Installment Payment",
    "Loan Amount Security",
    "Small Salue Mandate",
    "Others",
  ];

  const frequencytype = [];
  const utilitycode = ["Yes Bank XX264564"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleAuthTypeChange = (e) => {
  //   const { name } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     authtype: {
  //       option1: name === "option1",
  //       option2: name === "option2",
  //       option3: name === "option3",
  //     },
  //   }));
  // };

  // const handleAccountTypeChange = (e) => {
  //   const { name } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     accounttype: {
  //       option1: name === "option1",
  //       option2: name === "option2",
  //     },
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customername) {
      setErrors({ customername: "Name is required" });
      nameRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    console.log("mandate created");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="mandate-container">
      <div className="mandateregistration">
        <ul>
          <li>
            <a
              href="#"
              className={activeLink === "single" ? "active-link" : ""}
              onClick={() => handleLinkClick("single")}
            >
              Single Registration
            </a>
            <a
              href="#"
              className={activeLink === "bulk" ? "active-link" : ""}
              onClick={() => handleLinkClick("bulk")}
            >
              Bulk Registration
            </a>
          </li>
        </ul>
      </div>
      {activeLink == "single" ? (
        <form className="mandateregistrationform" onSubmit={handleSubmit}>
          <div className="mandateregistrationformheading">
            <h1>Mandate Registration</h1>
            <img src="" alt="" />
          </div>
          <div className="mandate-main-container">
            <div className="mandate-input-container">
              <label>Customer Name *</label>
              <input
                //ref={nameRef} // Attach ref here for auto-scroll
                className="mandateinput"
                type="text"
                name="customername"
                value={formData.customername}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Customer Email *</label>
              <input
                className="mandateinput"
                type="text"
                name="customeremail"
                value={formData.customeremail}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Mobile Number *</label>
              <input
                className="mandateinput"
                type="text"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Collection Amount *</label>
              <input
                className="mandateinput"
                type="text"
                name="collectionamount"
                value={formData.collectionamount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Loan Amount *</label>
              <input
                className="mandateinput"
                type="text"
                name="loanamount"
                value={formData.loanamount}
                onChange={handleChange}
                required
              />
            </div>
              <div className="mandate-input-container">
                <label>Auth Type *</label>
                <div className="check-box">
                  <label className="checkbox-label">
                    <input
                      id="saving"
                      className="radiobutton"
                      type="radio"
                      name="accounttype"
                      value="Saving"
                      checked={formData.accounttype === "Saving"}
                      onChange={handleRadioChange}
                    />
                    Saving
                  </label>
                  <label className="checkbox-label">
                    <input
                      id="current"
                      className="radiobutton"
                      type="radio"
                      name="accounttype"
                      value="Current"
                      checked={formData.accounttype === "Current"}
                      onChange={handleRadioChange}
                    />
                    Current
                  </label>
                </div>
            </div>
            <div className="mandate-input-container">
              <label>Account Number *</label>
              <input
                className="mandateinput"
                type="text"
                name="accountnumber"
                value={formData.accountnumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Confirm Account Number *</label>
              <input
                className="mandateinput"
                type="text"
                name="confirmaccountnumber"
                value={formData.confirmaccountnumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Bank IFSC *</label>
              <input
                className="mandateinput"
                type="text"
                name="bankifsc"
                value={formData.bankifsc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Bank Name *</label>
              <select
                className="optionselectinput"
                name="bankname"
                value={formData.bankname}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                {bankname.map((option, index) => (
                  <option className="optionselect" key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mandate-input-container">
              <label>Debit Type*</label>
              <select
                className="optionselectinput"
                name="debittype"
                value={formData.debittype}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                {debittype.map((option, index) => (
                  <option className="optionselect" key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mandate-input-container">
                <label>Auth Type *</label>
              <div className="check-box">
                <label className="checkbox-label">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="authtype"
                    value="Net Banking"
                    checked={formData.authtype === "Net Banking"}
                    onChange={handleRadioChange}
                  />
                  Net Banking
                </label>
                {/* Auth Option 1 */}
                <label className="checkbox-label">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="authtype"
                    value="Debit Card"
                    checked={formData.authtype === "Debit Card"}
                    onChange={handleRadioChange}
                  />
                  Debit Card
                  {/* Auth Option 2 */}
                </label>
                <label className="checkbox-label">
                  <input
                    className="radiobutton"
                    type="radio"
                    name="authtype"
                    value="Aadhaar"
                    checked={formData.authtype === "Aadhaar"}
                    onChange={handleRadioChange}
                  />
                  Aadhaar
                  {/* Auth Option 3 */}
                </label>
              </div>
            </div>

            <div className="mandate-input-container">
              <label>Category Code *</label>
              <select
                className="optionselectinput"
                name="categorycode"
                value={formData.categorycode}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                {categorycode.map((option, index) => (
                  <option className="optionselect" key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mandate-input-container">
              <label>Frequency Type *</label>
              <select
                className="optionselectinput"
                name="frequencytype"
                value={formData.frequencytype}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                {frequencytype.map((option, index) => (
                  <option className="optionselect" key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mandate-input-container">
              <label>Start Date*</label>
              <input
                className="startdateenddate"
                type="date"
                name="startdate"
                value={formData.startdate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>End Date*</label>
              <input
                className="startdateenddate"
                type="date"
                name="enddate"
                value={formData.enddate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mandate-input-container">
              <label>Utilitiycode Type *</label>
              <select
                className="optionselectinput"
                name="utilitiycode"
                value={formData.utilitiycode}
                onChange={handleChange}
                required
              >
                <option value="">Choose an option</option>
                {utilitycode.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="next-btn">
              Next
            </button>
            <button type="reset" className="reset-btn">
              Rest
            </button>
          </div>
          <div className="scroll-top-container">
            <button
              type="button"
              className="scroll-top-btn"
              onClick={scrollToTop}
            >
              <FaArrowUp className="scroll-icon" />
            </button>
          </div>
        </form>
      ) : (
        <BulkRegistration />
      )}
    </div>
  );
}
