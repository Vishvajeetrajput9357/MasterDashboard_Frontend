

// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Login from './Components/Login/Login';
// import Forgot from './Components/Forgot/Forgot';
// import Register from './Components/Register/Register';
// import OTPVerification from './Components/OTPVerification/OTPVerification';
// import ResetPassword from './Components/ResetPassword/ResetPassword';
// import Sidebar from './Components/Sidebar/Sidebar';
// import UserProfile from './Components/UserProfile/UserProfile';
// import './App.css';
// import ProfileUpdate from './Components/ProfileUdate/ProfileUpdate';
// import UserInformation from './Components/UserInformation/UserInformation';
// import Dashboard from './Components/Dashboard/Dashboard';
// import DebitPresetation from './Components/DebitPresetation/DebitPresetation';
// import './Components/Sidebar/Sidebar.css'
// import BulkMandateInfo from './Components/BulkMandateInfo/BulkMandateInfo';
// import BulkPresentation from './Components/BulkPresentation/BulkPresentation';
// import TransactionStatus from './Components/TransactionStatus/TransactionStatus';
// import TransactionReport from './Components/TransactionReport/TransactionReport';
// import SattlementReport from './Components/SattlementReport/SattlementReport';
// import Logout from './Logout/Logout';
// import AuthProvider from './AuthContext/AuthContext';
// import ProtectedRoute from './ProtectedRoute';
// // import AuthProvider from './AuthContext';
// // import PrivateRoute from './PrivateRoute';

// function AppContent() {
//   const location = useLocation();


  
//   // const user = {
//   //   name: "John Doe",
//   //   email: "johndoe@example.com",
//   //   profilePicture: "https://via.placeholder.com/150",
//   //   location: "New York, USA",
//   //   bio: "A passionate developer and tech enthusiast.",
//   // };

//   // Check if the current route is either '/login' or '/register'
//   // const showSidebar = location.pathname !== '/login' && location.pathname !== '/register';
//   const isAuthPage = location.pathname === '/login' || location.pathname === '/register'|| location.pathname === '/userinformation';
//   const showSidebar = !isAuthPage;
//   return (
//     <div className="app-container">
//       {/* Conditionally render Sidebar */}
//       {showSidebar && <Sidebar/>}
//       <div className={isAuthPage? "":"main-content"}>
//         {/* <AuthProvider> */}
//         <AuthProvider>

//         <Routes>
//           <ProtectedRoute>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/forgot-password" element={<Forgot />} />
//           <Route path="/reset-password" element={<ResetPassword />} />
//           {/* <Route path="/" element={<UserProfile user={user} />} /> */}
//           <Route path="/otp-verifications" element={<OTPVerification />} />
//           <Route path="/profileupdate" element={<ProfileUpdate />} />
//           <Route path="/userinformation" element={<UserInformation />} />
//           <Route path="/logout" element={<Logout />} />

//           <Route path="/" element={<Dashboard /> }/>
//           {/* <Route
//             path="/"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           /> */}
//           {/* <Route exact path="/singleregistration" element={<SingleRegistration />} /> */}
//           <Route exact path="/debitpresetation" element={<DebitPresetation />} />
//           <Route exact path="/bulkmandateinfo" element={<BulkMandateInfo />} />
//           <Route exact path="/bulkpresentation" element={<BulkPresentation/>} />
//           <Route exact path="/transactionstatus" element={<TransactionStatus/>} />
//           <Route exact path="/transactionreport" element={<TransactionReport/>} />
//           <Route exact path="/sattlementreport" element={<SattlementReport/>} />
//           </ProtectedRoute>
//         </Routes>
//         </AuthProvider>
//         {/* </AuthProvider> */}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;


import React from 'react';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './Components/Login/Login';
import Forgot from './Components/Forgot/Forgot';
import Register from './Components/Register/Register';
import OTPVerification from './Components/OTPVerification/OTPVerification';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Sidebar from './Components/Sidebar/Sidebar';
import UserProfile from './Components/UserProfile/UserProfile';
import './App.css';
import ProfileUpdate from './Components/ProfileUdate/ProfileUpdate';
import UserInformation from './Components/UserInformation/UserInformation';
import Dashboard from './Components/Dashboard/Dashboard';
import DebitPresetation from './Components/DebitPresetation/DebitPresetation';
import './Components/Sidebar/Sidebar.css';
import BulkMandateInfo from './Components/BulkMandateInfo/BulkMandateInfo';
import BulkPresentation from './Components/BulkPresentation/BulkPresentation';
import TransactionStatus from './Components/TransactionStatus/TransactionStatus';
import TransactionReport from './Components/TransactionReport/TransactionReport';
import SattlementReport from './Components/SattlementReport/SattlementReport';
import Logout from './Logout/Logout';
import AuthProvider from './AuthContext/AuthContext';
import ProtectedRoute from './ProtectedRoute';
import AadharOtp from './Components/AadharOtp/AadharOtp';

function AppContent() {

  const location = useLocation();
 
  // Check if the current route is for authentication pages
  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/userinformation';

  const showSidebar = !isAuthPage;

  return (
    <div className="app-container">
      {/* Conditionally render Sidebar */}
      {showSidebar && <Sidebar />}
      <div className={isAuthPage ? '' : 'main-content'}>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp-verifications" element={<OTPVerification />} />
          <Route path="/userinformation" element={<UserInformation />} />

          {/* Protected Routes */}
          <Route
            path="/profileupdate"
            element={
              <ProtectedRoute>
                <ProfileUpdate />
              </ProtectedRoute>
            }
          />
           
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/debitpresetation"
            element={
              <ProtectedRoute>
                <DebitPresetation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bulkmandateinfo"
            element={
              <ProtectedRoute>
                <BulkMandateInfo />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bulkpresentation"
            element={
              <ProtectedRoute>
                <BulkPresentation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactionstatus"
            element={
              <ProtectedRoute>
                <TransactionStatus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transactionreport"
            element={
              <ProtectedRoute>
                <TransactionReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sattlementreport"
            element={
              <ProtectedRoute>
                <SattlementReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/aadharotp"
            element={
              <ProtectedRoute>
                <AadharOtp />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  // const disableInspect = (event) => {
  //   if (
  //     event.keyCode === 123 || // F12
  //     (event.ctrlKey && event.shiftKey && event.keyCode === 73) || // Ctrl+Shift+I
  //     (event.ctrlKey && event.keyCode === 85) // Ctrl+U
  //   ) {
  //     event.preventDefault();
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener('contextmenu', (e) => e.preventDefault());
  //   document.addEventListener('keydown', disableInspect);
  //   return () => {
  //     document.removeEventListener('contextmenu', (e) => e.preventDefault());
  //     document.removeEventListener('keydown', disableInspect);
  //   };
  // }, []);
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
