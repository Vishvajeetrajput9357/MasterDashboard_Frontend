
// import React, { useState } from "react";
// import "./SattlementReport.css";
// import UserProfile from "../UserProfile/UserProfile";

// export default function SattlementReport() {
//   const user = {
//     profilePicture: "https://via.placeholder.com/150",
//     name: "Hemendra Singh",
//   };

//   const [formData, setFormData] = useState({
//     fromdate: "",
//     todate: "",
//   });

//   // Function to handle reset
//   const handleReset = () => {
//     setFormData({
//       fromdate: "",
//       todate: "",
//     });
//   };

//   return (
//     <div className="sattlementreport-container">
//       <UserProfile user={user} />
//       <div className="sattlement-report">
//           <form className="settlement-form">
//           <h1>ENACH Settlement Report</h1>
//             <div className="sattlement-report-input">
//               <label>From Date</label>
//               <input
//                 className="sattlement-input"
//                 type="date"
//                 name="fromdate"
//                 value={formData.fromdate}
//                 onChange={(e) =>
//                   setFormData({ ...formData, fromdate: e.target.value })
//                 }
//                 required
//               />
//             </div>
//             <div className="sattlement-report-input">
//               <label>To Date</label>
//               <input
//                 className="sattlement-input"
//                 type="date"
//                 name="todate"
//                 value={formData.todate}
//                 onChange={
//                   (e) => setFormData({ ...formData, todate: e.target.value }) // Correct update for `todate`
//                 }
//                 required
//               />
//             </div>
//             <div className="sattlement-button">
//               <button
//                 className="sattlement-btn-submit"
//                 onClick={() => console.log("Form Submitted", formData)}
//               >
//                 Submit
//               </button>
//               <button className="sattlement-btn-reset" onClick={handleReset}>
//                 Reset
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//   );
// }

import React, { useState } from "react";
import { FaFileExcel } from "react-icons/fa"; // Excel Icon
import "./SattlementReport.css";
import UserProfile from "../UserProfile/UserProfile";

export default function SattlementReport() {

    const user = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Hemendra Singh",
  };
  const [formData, setFormData] = useState({
    fromdate: "",
    todate: "",
  });

  // Function to handle form reset
  const handleReset = () => {
    setFormData({
      fromdate: "",
      todate: "",
    });
  };

  // Function to handle form submit
  const handleSubmit = () => {
    console.log("Form Submitted", formData);
  };

  return (
    <div className="sattlementreport-container">
      <UserProfile user={user}/>
      <div className="sattlement-report">
        <h1>ENACH Settlement Report</h1>
        <form className="settlement-form">
          <div className="sattlement-report-row">
            <div className="sattlement-report-input">
              <label>From Date</label>
              <input
                type="date"
                className="sattlement-input"
                name="fromdate"
                value={formData.fromdate}
                onChange={(e) =>
                  setFormData({ ...formData, fromdate: e.target.value })
                }
              />
            </div>
            <div className="sattlement-report-input">
              <label>To Date</label>
              <input
                type="date"
                className="sattlement-input"
                name="todate"
                value={formData.todate}
                onChange={(e) =>
                  setFormData({ ...formData, todate: e.target.value })
                }
              />
            </div>
          </div>
          <div className="sattlement-button">
            <button
              type="button"
              className="sattlement-btn-submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="sattlement-btn-reset"
              onClick={handleReset}
            >
              Reset
            </button>
            <button type="button" className="sattlement-btn-excel">
              <FaFileExcel size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

