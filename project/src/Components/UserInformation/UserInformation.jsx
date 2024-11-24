import React, { useState } from "react";
import './UserInformation.css';
import userinfoimg from '../../assets/images/1-online-registration.png'

export default function UserInformation() {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
  });
  const [error, setError] = useState("");

  const options = [
    "Madhya Pradesh",
    "Bihar",
    "Uttar Pradesh",
    "Punjab",
    "Haryana",
    "Himachal Pradesh",
  ];
  const optionscity = ["Indore", "Bhopal", "Ujjain", "Jaipur", "Nagda"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formdata);
  };

  return (
    <div className="userinfo-container">
        <div className="userinfoimage">

          <img className="userimage" src={userinfoimg}/>
        </div>
        <div className="maincontent">
        <h1 className="userheading">User Informations</h1>
      <form onSubmit={handleSubmit} className="userinfoform">
        <div className="userinfo-form">
          <label className="userinfolable">First Name</label>
          <input
            className="userinfoinput"
            type="text"
            name="firstname"
            value={formdata.firstname}
            onChange={handleChange}
            placeholder="Enter The First Name"
            required
          />
        </div>
        <div className="userinfo-form">
          <label className="userinfolable">Last Name</label>
          <input
            className="userinfoinput"
            type="text"
            name="lastname"
            value={formdata.lastname}
            onChange={handleChange}
            placeholder="Enter The Last Name"
            required
          />
        </div>
        <div className="userinfo-form">
          <label className="userinfolable">Address</label>
          <input
            className="userinfoinput"
            type="text"
            name="address"
            value={formdata.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="userinfo-form">
          <label className="userinfolable">Select State</label>
          <select  className="optionselect"
            name="state"
            value={formdata.state}
            onChange={handleChange}
            required
          >
            <option value="">Choose an option</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="userinfo-form">
          <label className="userinfolable">Select City</label>
          <select  className="optionselect"
            name="city"
            value={formdata.city}
            onChange={handleChange}
            required
          >
            <option value="">Choose an option</option>
            {optionscity.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="userinfo-form">
          <label className="userinfolable">Zip Code</label>
          <input
            className="userinfoinput"
            type="text"
            name="zipcode"
            value={formdata.zipcode}
            onChange={handleChange}
            placeholder="Enter The Zip Code"
            required
          />
        </div>
        
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}
