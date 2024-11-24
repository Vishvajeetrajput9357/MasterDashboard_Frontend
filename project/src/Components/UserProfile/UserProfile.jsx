

import React, { useState, useEffect, useRef } from 'react';
import './UserProfile.css';
import { CiSettings } from "react-icons/ci";
// import { MdPersonAddAlt } from "react-icons/md";
// import { LuUser } from "react-icons/lu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const UserProfile = () => {

  
  const [isOpen, setIsOpen] = useState(false);
  const sliderRef = useRef(null);

  const handleToggleSlider = () => {
    setIsOpen(!isOpen);
  };

  // Close slider when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="profile-image">
      
      <div className='profileimg'>
      <img
        src= 'https://via.placeholder.com/150' // Default image if profilePicture is undefined
        alt="Profile"
        className="profile-picture-thumbnail"
        onClick={handleToggleSlider}
      />
      </div>

      <div
        className={`slider ${isOpen ? 'slider-open' : ''}`}
        ref={sliderRef}
      >
        <div className="slider-content">
         <ul className='slider-link'>
          <li className='sliderlink'>  <Link className="profile-link" to='/profileupdate'><CiSettings className='settingicon' /> Setting</Link></li>
          {/* <li className='sliderlink'><a className="profile-link" href='/adduser'><MdPersonAddAlt className='addusericon'/>Add User</a></li> */}
            {/* <li className='sliderlink'><a className="profile-link" href='/useractivitiy'><LuUser className='useractiviityicon'/> User Activitiy</a></li> */}
          <li className='sliderlink'><Link className="profile-link" to='/logout'><RiLogoutCircleRLine className='logouticon' />Logout</Link></li>
         </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
