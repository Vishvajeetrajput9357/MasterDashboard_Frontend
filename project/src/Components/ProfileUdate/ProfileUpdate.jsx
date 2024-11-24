  
// import React, { useState, useEffect } from "react";
// import "./ProfileUpdate.css";
// import { LuUser } from "react-icons/lu";
// import { GoLock } from "react-icons/go";
// import ChangePassword from "../ChangePassword/ChangePassword";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { BsTelephone } from "react-icons/bs";

// const ProfileUpdate = ({ user }) => {
//   const defaultImage =
//     "https://ocr-image-aws.s3.ap-south-1.amazonaws.com/0def2b6e-d261-4405-a1e0-ded7a982225a"; // Default image URL

//   const [formData, setFormData] = useState({
//     username: user ? user.username : "",
//     email: user ? user.email : "",
//     mobile: user ? user.mobile : "",
//     bussinessname: user ? user.address : "",
//     profilePicture: user
//       ? user.profilePicture || defaultImage
//       : localStorage.getItem("profilePicture") || defaultImage,
//   });

//   const [activeLink, setActiveLink] = useState("profile");
//   const [showUploadButton, setShowUploadButton] = useState(false);
//   const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State for modal visibility

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         username: user.username,
//         email: user.email,
//         mobile: user.mobile,
//         bussinessname: user.address,
//         profilePicture: user.profilePicture || defaultImage,
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevData) => ({
//         ...prevData,
//         profilePicture: URL.createObjectURL(file),
//       }));
//       setShowUploadButton(true); // Show the "Upload Logo" button
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Uploaded logo:", formData.profilePicture);
//     localStorage.setItem("profilePicture", formData.profilePicture);
//     setShowUploadButton(false);
//   };

//   const handleRemoveLogo = () => {
//     setShowConfirmationModal(true); // Show the confirmation modal
//   };

//   const confirmRemoveLogo = () => {
//     setFormData((prevData) => ({
//       ...prevData,
//       profilePicture: defaultImage,
//     }));
//     localStorage.removeItem("profilePicture");
//     setShowUploadButton(false);
//     setShowConfirmationModal(false); // Hide the modal
//   };

//   const cancelRemoveLogo = () => {
//     setShowConfirmationModal(false); // Hide the modal
//   };

//   return (
//     <div className="profileupdate-container">
//       <div className="profileupdate-link">
//         <ul className="updatelink-ul">
//           <li className="updatelink">
//             <a
//               href="#"
//               className={activeLink === "profile" ? "active-link" : ""}
//               onClick={() => setActiveLink("profile")}
//             >
//               <LuUser />
//               Profile
//             </a>
//             <a
//               href="#"
//               className={activeLink === "password" ? "active-link" : ""}
//               onClick={() => setActiveLink("password")}
//             >
//               <GoLock />
//               Change Password
//             </a>
//           </li>
//         </ul>
//       </div>
//       {activeLink === "profile" ? (
//         <form className="update-form" onSubmit={handleSubmit}>
//           <h1>Profile</h1>
//           <div className="update">
//             <div className="updateform">
//               <label className="labelusername">Username:</label>
//               <input
//                 className="updateinput"
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 required
//                 disabled
//               />
//             </div>
//             <div className="updateform">
//               <label className="labelusername">Email:</label>
//               <input
//                 className="updateinput"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 disabled
//               />
//             </div>
//             <div className="updateform">
//               <label className="labelusername">Mobile:</label>
//               <input
//                 className="updateinput"
//                 type="text"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 disabled
//               />
//             </div>
//             <div className="updateform">
//               <label className="labelusername">Address:</label>
//               <input
//                 className="updateinput"
//                 type="text"
//                 name="bussinessname"
//                 value={formData.bussinessname}
//                 onChange={handleChange}
//                 required
//                 disabled
//               />
//             </div>
//           </div>

//           <div className="updateimg">
//             <img
//               src={formData.profilePicture}
//               alt="Profile Logo"
//               className="profile-preview"
//             />
//             <label htmlFor="profilePicture" className="select-logo-btn">
//               Select Logo
//             </label>
//             <input
//               id="profilePicture"
//               type="file"
//               onChange={handleImageUpload}
//               style={{ display: "none" }}
//             />
//           </div>

//           {showUploadButton ? (
//             <button type="submit" className="save-btn">
//               Upload Logo
//             </button>
//           ) : (
//             formData.profilePicture !== defaultImage && (
//               <button
//                 type="button"
//                 className="remove-btn"
//                 onClick={handleRemoveLogo}
//               >
//                 Remove Logo
//               </button>
//             )
//           )}
//           <div className="enquire-continer">
//             <h1 className="enquire">
//               For any further assistance kindly contact
//             </h1>
//             <address className="emailaddress">
//               <MdOutlineMailOutline className="email-icon" />

//               <a href="support@kjsst.com">support@kjsst.com</a>
//             </address>
//             <label className="helpnumber">
//               <BsTelephone className="telephone-icon" />
//               9216248649
//             </label>
//           </div>
//         </form>
//       ) : (
//         <ChangePassword />
//       )}

//       {/* Confirmation Modal */}
//       {showConfirmationModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <h2>Are you sure?</h2>
//             <p>Do you want to remove the logo?</p>
//             <button className="confirm-btn" onClick={confirmRemoveLogo}>
//               Yes
//             </button>
//             <button className="cancel-btn" onClick={cancelRemoveLogo}>
//               No
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfileUpdate;


import React, { useState, useEffect, useContext } from "react";
import "./ProfileUpdate.css";
import { LuUser } from "react-icons/lu";
import { GoLock } from "react-icons/go";
import ChangePassword from "../ChangePassword/ChangePassword";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import UserProfile from "../UserProfile/UserProfile";
import { AuthContext } from "../../AuthContext/AuthContext";

const ProfileUpdate = () => {
     const {userData}=useContext(AuthContext);

  const defaultImage =
    "https://ocr-image-aws.s3.ap-south-1.amazonaws.com/0def2b6e-d261-4405-a1e0-ded7a982225a"; // Default image URL

  const [formData, setFormData] = useState({
    username: '',
    email: "",
    mobile: "",
    bussinessname: "",
    profilePicture: localStorage.getItem("profilePicture") || defaultImage,
  });

  useEffect(() => {
    // const storedData = localStorage.getItem("userData");
    if (userData) {
      // const parsedData = JSON.parse(storedData);
      setFormData((prevData) => ({
        ...prevData,
        username: `${userData.merchantFirstname} ${userData.merchantLastname}`,
        email: userData.merchantEmail,
        mobile: userData.merchantPhone,
        bussinessname: userData.merchantBusinessName,
      }));
    }
  }, [userData]);
  
  const [activeLink, setActiveLink] = useState("profile");
  const [showUploadButton, setShowUploadButton] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: URL.createObjectURL(file),
      }));
      setShowUploadButton(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploaded logo:", formData.profilePicture);
    localStorage.setItem("profilePicture", formData.profilePicture);
    setShowUploadButton(false);
  };

  const handleRemoveLogo = () => {
    setShowConfirmationModal(true);
  };

  const confirmRemoveLogo = () => {
    setFormData((prevData) => ({
      ...prevData,
      profilePicture: defaultImage,
    }));
    localStorage.removeItem("profilePicture");
    setShowUploadButton(false);
    setShowConfirmationModal(false);
  };

  const cancelRemoveLogo = () => {
    setShowConfirmationModal(false);
  };

  const user = {
    profilePicture: "https://via.placeholder.com/150",
    name: "Hemendra Singh",
  };
  return (
    <div className="profileupdate-container">
      <UserProfile user={user}/>
      <div className="profileupdate-link">
        <ul className="updatelink-ul">
          <li className="updatelink">
            <a
              href="#"
              className={activeLink === "profile" ? "active-link" : ""}
              onClick={() => setActiveLink("profile")}
            >
              <LuUser />
              Profile
            </a>
            <a
              href="#"
              className={activeLink === "password" ? "active-link" : ""}
              onClick={() => setActiveLink("password")}
            >
              <GoLock />
              Change Password
            </a>
          </li>
        </ul>
      </div>
      {activeLink === "profile" ? (
        <form className="update-form" onSubmit={handleSubmit}>
          <h1>Profile</h1>
          <div className="update">
            <div className="updateform">
              <label className="labelusername">Username:</label>
              <input
                className="updateinput"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="updateform">
              <label className="labelusername">Email:</label>
              <input
                className="updateinput"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="updateform">
              <label className="labelusername">Mobile:</label>
              <input
                className="updateinput"
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                disabled
              />
            </div>
            <div className="updateform">
              <label className="labelusername">Business Name:</label>
              <input
                className="updateinput"
                type="text"
                name="bussinessname"
                value={formData.bussinessname}
                onChange={handleChange}
                required
                disabled
              />
            </div>
          </div>

          <div className="updateimg">
            <img
              src={formData.profilePicture}
              alt="Profile Logo"
              className="profile-preview"
            />
            <label htmlFor="profilePicture" className="select-logo-btn">
              Select Logo
            </label>
            <input
              id="profilePicture"
              type="file"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>

          {showUploadButton ? (
            <button type="submit" className="save-btn">
              Upload Logo
            </button>
          ) : (
            formData.profilePicture !== defaultImage && (
              <button
                type="button"
                className="remove-btn"
                onClick={handleRemoveLogo}
              >
                Remove Logo
              </button>
            )
          )}
          <div className="enquire-continer">
            <h1 className="enquire">
              For any further assistance kindly contact
            </h1>
            <address className="emailaddress">
              <MdOutlineMailOutline className="email-icon" />
              <a href="mailto:support@kjsst.com">support@kjsst.com</a>
            </address>
            <label className="helpnumber">
              <BsTelephone className="telephone-icon" />
              9216248649
            </label>
          </div>
        </form>
      ) : (
        <ChangePassword />
      )}

      {showConfirmationModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Are you sure?</h2>
            <p>Do you want to remove the logo?</p>
            <button className="confirm-btn" onClick={confirmRemoveLogo}>
              Yes
            </button>
            <button className="cancel-btn" onClick={cancelRemoveLogo}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileUpdate;
