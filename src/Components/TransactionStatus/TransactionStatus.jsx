import React from 'react'
import UserProfile from '../UserProfile/UserProfile';
import { CiSearch } from "react-icons/ci";
import './TransactionStatus.css'
export default function TransactionStatus() {
    const user = {
        profilePicture: "https://via.placeholder.com/150",
        name: "Hemendra Singh",
      };

  return (

    <div className='search-container'>
        <UserProfile user={user}/>
        <div className='search-main-container'>
            <div className='searchcontainer'>
            <label className='labelsearch'>ENach Transaction Id-</label>
            </div>
          <input
          className='seachinput'
          type='search'
          placeholder='Enter ENach Transaction Id'

          />
          <button type='search' className='search-btn'> <CiSearch className='searchicon' /></button>
          </div>

      
    </div>
  )
}
