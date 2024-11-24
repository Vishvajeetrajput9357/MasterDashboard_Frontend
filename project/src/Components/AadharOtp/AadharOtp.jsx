// // import React, { useState } from "react";
// // import axios from "axios";  
// // import "./AadharOtp.css";
// // import "react-toastify/dist/ReactToastify.css";
// // import { ToastContainer, toast } from "react-toastify";

// // export default function AadharOtp() {
// //   const [formData, setFormData] = useState({
// //     aadhaarNumber: "",
   
// //   });

// //   const [otpSent, setOtpSent] = useState(false); 

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });
// //   };

// //   const handleSendOtp = (e) => {
// //     e.preventDefault();

// //     if (formData.aadhaarNumber.trim().length !== 12) {
// //       toast.error("Please enter a valid 12-digit Aadhaar number.");
// //       return;
// //     }
// //   console.log("hii")
// //     axios
// //       .post(`https://masterdashboard.koyeb.app/dashboard/merchantEkyc/aadhar/${formData.aadhaarNumber}`, {
// //          aadhaarNumber: formData.aadhaarNumber
// //          })
// //       .then((response) => {
// //         const { code, description,mermerchantTrxnRefId } = response.data;
// //        console.log(mermerchantTrxnRefId)
// //         if (code==="0x0200") {
// //           setOtpSent(true); 
// //           toast.success(description);
// //         } else {
// //           toast.error(description);
// //         }
// //       })
// //       .catch((error) => {
// //         if (error.response) {
// //           toast.error(error.response.data.message || "Error sending OTP.");
// //         } else if (error.request) {
// //           toast.error("No response from the server. Please check your internet connection.");
// //         } else {
// //           toast.error("An unexpected error occurred.");
// //         }
// //       });
// //   };

// //   const handleOtpVerification = (e) => {
// //     e.preventDefault();

// //     if (formData.otp.trim().length !== 6) {
// //       toast.error("Please enter a valid 6-digit OTP.");
// //       return;
// //     }
// //       console.log("hii")
// //     axios
// //       .post("https://masterdashboard.koyeb.app/dashboard/merchantEkyc/validateOtp", {
// //         aadhaarNumber: formData.aadhaarNumber,
// //         otp: formData.otp,
// //       })
// //       .then((response) => {
// //         const { code, description } = response.data;

// //         if (code==="0x0200") {
// //           toast.success(description);
// //         } else {
// //           toast.error(description);
// //         }
// //       })
// //       .catch((error) => {
// //         if (error.response) {
// //           toast.error(error.response.data.message || "Error verifying OTP.");
// //         } else if (error.request) {
// //           toast.error("No response from the server. Please check your internet connection.");
// //           console.log("hii")
// //         } else {
// //           toast.error("An unexpected error occurred.");
// //         }
// //       });
// //   };

// //   return (
// //     <div className="aadhar-container">
// //       <div className="aadhar-main-container">
// //         <h1 className="aadhar-heading">Aadhar OTP Verification</h1>
// //         <form
// //           className="aadhar-form"
// //           onSubmit={otpSent ? handleOtpVerification : handleSendOtp}
// //         >
// //           {!otpSent && (
// //             <div className="aadhar-input">
// //               <label htmlFor="aadharNumber">Aadhaar Number:</label>
// //               <input
// //                 id="aadharNumber"
// //                 className="input-aadhar"
// //                 type="text"
// //                 name="aadhaarNumber"
// //                 placeholder="Enter Aadhaar Number"
// //                 value={formData.aadhaarNumber}
// //                 onChange={handleChange}
// //                 maxLength={12} 
// //               />
// //             </div>
// //           )}
// //           {otpSent && (
// //             <div className="aadhar-input">
// //               <label htmlFor="otp">OTP:</label>
// //               <input
// //                 id="otp"
// //                 className="input-otp"
// //                 type="text"
// //                 name="otp"
// //                 placeholder="Enter OTP"
// //                 value={formData.otp}
// //                 onChange={handleChange}
// //                 maxLength={6}
// //               />
// //             </div>
// //           )}
// //           <button type="submit" className="otp-send">
// //             {otpSent ? "Verify OTP" : "Send OTP"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import axios from "axios";  
// import "./AadharOtp.css";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// export default function AadharOtp() {
//   const [formData, setFormData] = useState({
//     aadhaarNumber: "", // Consistent spelling: "aadhaarNumber"
//     otp: "", // Ensure otp is initialized
//   });

//   const [otpSent, setOtpSent] = useState(false); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSendOtp = (e) => {
//     e.preventDefault();

//     if (formData.aadhaarNumber.trim().length !== 12) {
//       toast.error("Please enter a valid 12-digit Aadhaar number.");
//       return;
//     }
//      console.log("hii")
     
//     axios
//       .post(`https://empirical-tootsie-vishvajeet-6c9fa64e.koyeb.app/dashboard/merchantEkyc/aadhar/${formData.aadhaarNumber}`, {
//         aadhaarNumber: formData.aadhaarNumber,
//       })
//       .then((response) => {
//         const { code, description, mermerchantTrxnRefId } = response.data;
//         console.log(mermerchantTrxnRefId); 
        
//         if (code === "0x0200") {
//           setOtpSent(true);
//           setFormData({ ...formData, mermerchantTrxnRefId }); // Store mermerchantTrxnRefId
//           toast.success(description);
//         } else {
//           toast.error(description);
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           toast.error(error.response.data.message || "Error sending OTP.");
//         } else if (error.request) {
//           toast.error("No response from the server. Please check your internet connection.");
//         } else {
//           toast.error("An unexpected error occurred.");
//         }
//       });
//   };

//   const handleOtpVerification = (e) => {
//     e.preventDefault();

//     if (formData.otp.trim().length !== 6) {
//       toast.error("Please enter a valid 6-digit OTP.");
//       return;
//     }

//     axios
//       .post("https://masterdashboard.koyeb.app/dashboard/merchantEkyc/validateOtp", {
//         aadhaarNumber: formData.aadhaarNumber,
//         otp: formData.otp,
//         mermerchantTrxnRefId: formData.mermerchantTrxnRefId, // Send mermerchantTrxnRefId with OTP verification request
//       })
//       .then((response) => {
//         const { code, description } = response.data;

//         if (code === "0x0200") {
//           toast.success(description);
//         } else {
//           toast.error(description);
//         }
//       })
//       .catch((error) => {
//         if (error.response) {
//           toast.error(error.response.data.message || "Error verifying OTP.");
//         } else if (error.request) {
//           toast.error("No response from the server. Please check your internet connection.");
//         } else {
//           toast.error("An unexpected error occurred.");
//         }
//       });
//   };

//   return (
//     <div className="aadhar-container">
//       <div className="aadhar-main-container">
//         <h1 className="aadhar-heading">Aadhar OTP Verification</h1>
//         <form
//           className="aadhar-form"
//           onSubmit={otpSent ? handleOtpVerification : handleSendOtp}
//         >
//           {!otpSent && (
//             <div className="aadhar-input">
//               <label htmlFor="aadhaarNumber">Aadhaar Number:</label>
//               <input
//                 id="aadhaarNumber"
//                 className="input-aadhar"
//                 type="text"
//                 name="aadhaarNumber"
//                 placeholder="Enter Aadhaar Number"
//                 value={formData.aadhaarNumber}
//                 onChange={handleChange}
//                 maxLength={12} 
//               />
//             </div>
//           )}
//           {otpSent && (
//             <div className="aadhar-input">
//               <label htmlFor="otp">OTP:</label>
//               <input
//                 id="otp"
//                 className="input-otp"
//                 type="text"
//                 name="otp"
//                 placeholder="Enter OTP"
//                 value={formData.otp}
//                 onChange={handleChange}
//                 maxLength={6}
//               />
//             </div>
//           )}
//           <button type="submit" className="otp-send">
//             {otpSent ? "Verify OTP" : "Send OTP"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import './AadharOtp.css'
export default function AadharOtp() {
  const [step, setStep] = useState("aadhaar-step");
  const [formData, setFormData] = useState({
    aadhaarNumber: "",
    otp: "",
    bankAccount: "",
    ifscCode: "",
    panNumber: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleNextStep = (currentStep, nextStep) => {
    setStep(nextStep);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert(`Step "${step}" completed!`);
    if (step === "pan-step") {
      alert("eKYC Completed Successfully!");
    }
  };

  return (
    <div className="ekyc-container">
      
      <h2>eKYC Verification</h2>

      {step === "aadhaar-step" && (
        <div className="step active" id="aadhaar-step">
          <div className="aadhaar-container">
            <label htmlFor="aadhaarNumber">Aadhaar Number</label>
            <input
              type="text"
              id="aadhaarNumber"
              placeholder="Enter Aadhaar Number"
              value={formData.aadhaarNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="aadhaar-container">
            <button
              className="btn"
              onClick={() => handleNextStep("aadhaar-step", "bank-step")}
            >
              Generate OTP
            </button>
          </div>
          <div className="aadhaar-container">
            <label htmlFor="otp">Enter OTP</label>
            <input
              type="text"
              id="otp"
              placeholder="Enter OTP"
              value={formData.otp}
              onChange={handleInputChange}
            />
          </div>
          <div className="aadhaar-container">
            <button
              className="btn"
              onClick={() => handleNextStep("aadhaar-step", "bank-step")}
            >
              Validate OTP
            </button>
          </div>
        </div>
      )}

      {step === "bank-step" && (
        <div className="step active" id="bank-step">
          <div className="aadhaar-container">
            <label htmlFor="bankAccount">Bank Account Number</label>
            <input
              type="text"
              id="bankAccount"
              placeholder="Enter Bank Account Number"
              value={formData.bankAccount}
              onChange={handleInputChange}
            />
          </div>
          <div className="aadhaar-container">
            <label htmlFor="ifscCode">IFSC Code</label>
            <input
              type="text"
              id="ifscCode"
              placeholder="Enter IFSC Code"
              value={formData.ifscCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="aadhaar-container">
            <button
              className="btn"
              onClick={() => handleNextStep("bank-step", "pan-step")}
            >
              Verify Bank Account
            </button>
          </div>
        </div>
      )}

      {step === "pan-step" && (
        <div className="step active" id="pan-step">
          <div className="aadhaar-container">
            <label htmlFor="panNumber">PAN Number</label>
            <input
              type="text"
              id="panNumber"
              placeholder="Enter PAN Number"
              value={formData.panNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="aadhaar-container">
            <button className="btn" onClick={handleSubmit}>
              Verify PAN
            </button>
          </div>
        </div>
      )}

      <div className="consent">
        By continuing, you agree to our{" "}
        <a href="#">Terms & Conditions</a> and give consent to share data with
        authorized agencies as per{" "}
        <a href="#">Government Guidelines</a>.
      </div>
    </div>
  );
}
