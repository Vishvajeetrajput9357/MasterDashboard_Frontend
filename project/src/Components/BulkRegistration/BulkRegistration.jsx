import React, { useState, useRef } from "react";
import Papa from "papaparse";
import "./BulkRegistration.css";

export default function BulkRegistration() {
  const [csvData, setCsvData] = useState([]);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null); // Add a ref for the file input

  // Function to handle file change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      Papa.parse(selectedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setCsvData(result.data);
        },
      });
    }
  };

  // Function to remove CSV data
  const handleRemove = () => {
    setCsvData([]);
    setFile(null);

    // Clear the file input using the ref
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  // Function to export CSV data
  const handleExport = () => {
    if (csvData.length > 0) {
      const csv = Papa.unparse(csvData); // Convert JSON to CSV format using Papa.unparse
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.setAttribute("download", "exported_data.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleUpload = async () => {
    if (csvData.length > 0) {
      try {
        const response = await axios.post(
          "http://your-server-url/api/upload",
          csvData
        );
        console.log("Upload successful:", response.data);
      } catch (error) {
        console.error("Error uploading data:", error);
      }
    } else {
      alert("No data available to upload.");
    }
  };

  return (
    <div className="bulk-container">
      <div className="bulk-main-conatainer">
        <div className="csv-img-conatainer">
          <img
            className="csv-image"
            src="https://fidy-dashboard-images.s3.ap-south-1.amazonaws.com/Images/NPCI-Logo.png"
            alt="NPCI Logo"
          />
          <img
            className="csv-image"
            src="https://fidy-dashboard-images.s3.ap-south-1.amazonaws.com/Images/NACH-Logo.png"
            alt="NACH Logo"
          />
        </div>
        <div className="csv-input">
          <input
            id="file-upload" // Assign an ID
            className="csvinput"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            placeholder="Select CSV File"
            ref={fileInputRef} // Attach the ref to the file input
            style={{ display: "none" }} // Hide default file input
          />
          {/* Label as a custom button */}
          <label htmlFor="file-upload" className="custom-file-upload">
            Select CSV File
          </label>

          {/* Show selected file name */}
          {file && <span className="file-name">{file.name}</span>}
        </div>
        <table border="1">
          <thead>
            <tr>
              {csvData.length > 0 &&
                Object.keys(csvData[0]).map((key) => <th key={key}>{key}</th>)}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="conatiner-  " id="csv-btn">
          <div className="row">
            <div className="col-md-4">
              <button onClick={handleExport} className="export-btn">
                Export CSV
              </button>
            </div>
            <div className="col-md-4">
              <button onClick={handleUpload} className="Upload-btn">
                Upload File
              </button>
            </div>
            <div className="col-md-4">
              <button onClick={handleRemove} className="remove-btn">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
