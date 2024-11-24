import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SingleRegistration from '../SingleRegistration/SingleRegistration'
import Dashboard from '../Dashboard/Dashboard'

export default function Layout() {

  return (
    <div className='container-fluid'>
       <div className='row'>
        <div className='col-sm-3'>
            <Sidebar/>
        </div>
        <div className='col-sm-9'>
            <Dashboard/>
        </div>
       </div>
    </div>
  )
}
