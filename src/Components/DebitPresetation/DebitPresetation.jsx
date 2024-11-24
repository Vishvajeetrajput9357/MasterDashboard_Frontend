import React from "react";
import { NavLink } from "react-router-dom";
import "./DebitPresetation.css";
import { useState, useRef } from "react";
import BulkRegistration from "../BulkRegistration/BulkRegistration";
import { FaArrowUp } from "react-icons/fa6";
import UserProfile from "../UserProfile/UserProfile";

export default function DebitPresetation() {

  const user = {
    profilePicture: "https://via.placeholder.com/150", // Replace with actual URL or local image path
    name: "Hemendra Singh",
  };

  const formRef = useRef(null);
  const nameRef = useRef(null); // Example: Ref for the "Customer Name" field
  const [activeLink, setActiveLink] = useState("single");
  const [errors, setErrors] = useState({});

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [formData, setFormData] = useState({
    mandateid: "",
    accountholdername: "",
    customeremail: "",
    mobilenumber: "",
    bankifsc: "",
    accountnumber: "",
    accounttype: "",
    amount: "",
    sattlementdate: "",
  });

  //   const bankname = [
  //     "bank of baroda",
  //     "uco bank",
  //     "indian bank",
  //     "state bank of india",
  //     "yes bank",
  //   ];

  //   const debittype = ["Fixed Amount", "maximum Amount"];

  //   const categorycode = [
  //     "Loan Installment Payment",
  //     "Loan Amount Security",
  //     "Small Salue Mandate",
  //     "Others",
  //   ];

  //   const frequencytype = [];
  //   const utilitycode = ["Yes Bank XX264564"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   const handleAuthTypeChange = (e) => {
  //     const { name } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       authtype: {
  //         option1: name === "option1",
  //         option2: name === "option2",
  //         option3: name === "option3",
  //       },
  //     }));
  //   };

  //   const handleAccountTypeChange = (e) => {
  //     const { name } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       accounttype: {
  //         option1: name === "option1",
  //         option2: name === "option2",
  //       },
  //     }));
  //   };

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

  return (
    <div className="DebitPresetation-container">
      <UserProfile user={user}/>
      <div className="DebitPresetation">
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
        <form className="DebitPresetationform" onSubmit={handleSubmit}>
          {/* <div className="DebitPresetationformheading">
            <h1>Mandate Registration</h1>
            <img src="" alt="" />
          </div> */}
          <div className="DebitPresetation-main-container">
            <div className="DebitPresetation-input-container">
              <label>Mandate Id *</label>
              <input
                //ref={nameRef} // Attach ref here for auto-scroll
                className="DebitPresetationinput"
                type="text"
                name="customername"
                value={formData.customername}
                onChange={handleChange}
                required
              />
            </div>
            <div className="DebitPresetation-input-container">
              <label>Account Holder Name *</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="customeremail"
                value={formData.customeremail}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="DebitPresetation-input-container">
              <label>Customer Email*</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="DebitPresetation-input-container">
              <label>Mobile Number *</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="collectionamount"
                value={formData.collectionamount}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="DebitPresetation-input-container">
              <label>Bank IFSC *</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="loanamount"
                value={formData.loanamount}
                onChange={handleChange}
                required
                disabled
              />
            </div>

            <div className="mandate-input-container">
              <label>Account Number *</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="accountnumber"
                value={formData.accountnumber}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="mandate-input-container">
              <label>Account type *</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="confirmaccountnumber"
                value={formData.confirmaccountnumber}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="mandate-input-container">
              <label>Amount *</label>
              <input
                className="DebitPresetationinput"
                type="text"
                name="bankifsc"
                value={formData.bankifsc}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mandate-input-container">
              <label>Settlement Date *</label>
              <input
                className="Settlementdate"
                type="date"
                name="sattlementdate"
                value={formData.sattlementdate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="next-btn">
              submit
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
