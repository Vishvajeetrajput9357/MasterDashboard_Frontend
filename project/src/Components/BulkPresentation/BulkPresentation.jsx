import React, { useState } from "react";
import "./BulkPresentation.css";
import UserProfile from "../UserProfile/UserProfile";

export default function BulkPresentation() {
  const user = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Hemendra Singh",
  };

  const [formData, setFormData] = useState({
    fromdate: "",
    todate: "",
    selectfillter: "",
  });

  const SelectFillter = ["Verified", "Unverified"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  const handleReset = () => {
    setFormData({
      fromdate: "",
      todate: "",
      selectfillter: "",
    });
  };
  
  const isSubmitEnabled = formData.fromdate && formData.todate;
  const isResetEnabled = formData.fromdate || formData.todate;
  
  return (
    <div className="bulkpresentation-container">
      <UserProfile user={user} />

      <div className="row" id="bulk-presentation">
        <h1 className="bulkpresentation-heading">Bulk Mandate Registration Report</h1>
        <div className="col-md-4" id="bulkpresentation">
          <label>From Date</label>
          <input
            className="bulkpresentation-input"
            type="date"
            name="fromdate"
            value={formData.fromdate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4" id="bulkpresentation">
          <label>To Date</label>
          <input
            className="bulkpresentation-input"
            type="date"
            name="todate"
            value={formData.todate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-4" id="bulkpresentation">
          <label>Select Filter</label>
          <select
            className="bulkpresentation-input"
            name="selectfillter"
            value={formData.selectfillter}
            onChange={handleChange}
            required
          >
            <option value="">Select filter</option>
            {SelectFillter.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-container">
          <button
            type="submit"
            className="bulkpresentation-submit-btn"
            disabled={!isSubmitEnabled}
            onClick={handleSubmit}

          >
            Submit
          </button>
          <button
            type="button"
            className="bulkpresentation-reset-btn"
            disabled={!isResetEnabled}
            onClick={handleReset}


          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
