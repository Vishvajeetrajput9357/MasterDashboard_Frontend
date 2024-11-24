import React, { useState } from "react";
import "./TransactionReport.css";

export default function SearchByFilter() {
  const [formData, setFormData] = useState({});
  const [selectedFilter, setSelectedFilter] = useState("");

  const selectFilter = [
    "Customer Account Number",
    "MandateId",
    "Mobile Number",
    "Utility Code",
  ];

  const handleSelectChange = (event) => {
    setSelectedFilter(event.target.value);
  };
  const handlereset=(e)=>{
    e.preventDefault();
    setFormData({});
    setSelectedFilter("");
    
  }

  return (
    <div className="search-container">
      <div className="search-filter">
        <h1>ENach Transaction Report</h1>
        <div className="search-filter-row">
          <div className="search-filter-container">
            <select
              className="searchselect"
              onChange={handleSelectChange}
              value={selectedFilter}
            >
              <option value="" disabled>
                Select filter value
              </option>
              {selectFilter.map((filter, index) => (
                <option key={index} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>

          {/* Display input box if a filter is selected */}
          {selectedFilter && (
            <div className="input-box">
              {/* <label>{selectedFilter}</label> */}
              <input
                type="text"
                value={formData[selectedFilter] || ""}
                onChange={(e) =>
                  setFormData({ ...formData, [selectedFilter]: e.target.value })
                }
                placeholder={`Enter ${selectedFilter}`}
              />
            </div>
          )}
        </div>

        <div className="search">
          <button className="search-submit">Submit</button>
          <button className="search-reset" onClick={handlereset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
