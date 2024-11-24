import React, { useState } from "react";
import UserProfile from "../UserProfile/UserProfile";
import "./TransactionReport.css";
import { NavLink } from "react-router-dom";
import SearchByFilter from "./SearchByFilter";

export default function TransactionReport() {
  const user = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Hemendra Singh",
  };
  const [activeLink, setActiveLink] = useState("single");
   

  const [fromData, setFromData] = useState({
    fromdate: "",
    todate: "",
    starthours: "",
    endhours: "",
    selectservice: "",
    transactionstatus: "",
  });

  const timeselect = ["00:00", "01:00", "02:00", "03:00", "04:00"];

  const selectservices = [
    "All Services",
    "CANCEL MANDATE",
    "DEBIT PRESENTATION",
    "ESIGN REJECTED",
    "MANDATE REGISTRATION",
    "MANDATE REGISTRATION ESIGN",
  ];

  const transactionstatus = [
    "ALL",
    "Success/Registered",
    "Faild",
    "Panding",
    "Refaunded",
    "Reversed",
    "Cancelled",
    "Cancel Initiated",
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleReset = () => {
    setFromData({
      fromdate: "",
      todate: "",
      starthours: "",
      endhours: "",
      selectservice: "",
      transactionstatus: "",
    });
  };
 

  return (
    <div className="transaction-report">
      
              
              <UserProfile user={user}/>
        <div className="transactionlink-report">
        <ul>
          <li>
            <a
              href="#"
              className={activeLink === "single" ? "active-link" : ""}
              onClick={() => handleLinkClick("single")}
            >
              Search By Date
            </a>
            <a
              href="#"
              className={activeLink === "bulk" ? "active-link" : ""}
              onClick={() => handleLinkClick("bulk")}
            >
              Search By Fillter
            </a>
          </li>
        </ul>
      </div>
      {activeLink=="single"?(<div className="transaction-conatiner">
        <h1>ENach Transaction Report</h1>
        <div className="transaction-main-report">
          <div className="transaction-input">
            <label>From Date</label>
            <input
              className="transactionreportinput"
              type="date"
              name="fromdate"
              value={fromData.fromdate}
              onChange={(e) =>
                setFromData({ ...fromData, fromdate: e.target.value })
              }
              required
            />
          </div>
          <div className="transaction-input">
            <label>To Date</label>

            <input
              className="transactionreportinput"
              type="date"
              name="todate"
              value={fromData.todate}
              onChange={(e) =>
                setFromData({ ...fromData, todate: e.target.value })
              }
              required
            />
          </div>
          <div className="transaction-input">
            <label>Start Hours</label>
            <select 
            className="transactionreportinput"
              value={fromData.starthours}
              onChange={(e) =>
                setFromData({ ...fromData, starthours: e.target.value })
              }
            >
              <option>select start hours</option>
              {timeselect.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="transaction-input">
            <label>End Hours</label>
            <select
             className="transactionreportinput"
             value={fromData.endhours}
             onChange={(e) =>
               setFromData({ ...fromData, endhours: e.target.value })
             }
             >
              <option>select end hours</option>
              {timeselect.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="transaction-input">
            <label>Select Service</label>
            <select className="transactionreportinput"
            value={fromData.selectservice}
            onChange={(e) =>
              setFromData({ ...fromData, selectservice: e.target.value })
            }
            >
              {/* <option></option> */}
              {selectservices.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="transaction-input">
            <label>Transaction Status</label>
            <select 
            className="transactionreportinput"
            value={fromData.transactionstatus}
            onChange={(e) =>
              setFromData({ ...fromData, transactionstatus: e.target.value })
            }
            >
              <option>Transaction Status</option>
              {transactionstatus.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
         
        </div>
         <div className="transactionreport-btn">

          <button className="transactionreport-btn-submit">submit</button>
          <button className="ransactionreport-btn-reset" onClick={handleReset} >reset</button>
          </div>
      </div>
      ):(<SearchByFilter/>)}
    </div>
  );
}
