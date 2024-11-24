


import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const[userData,setUserData]=useState(null);
  const [sessionExpired, setSessionExpired] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if the token exists in localStorage on initialization
    const token = localStorage.getItem('token');
    const expirationTime = localStorage.getItem('sessionExpiration');
    return token && expirationTime && Date.now() < expirationTime;
  });

  // Helper to start a session
  const startSession = (token) => {
    const expirationTime = Date.now() + 30 * 60 * 1000; // 30 minutes from now
    localStorage.setItem('token', token);
    localStorage.setItem('sessionExpiration', expirationTime);
    setIsAuthenticated(true);
  };

  // Helper to end a session
  const endSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('sessionExpiration');
    setIsAuthenticated(false);
    setSessionExpired(true); // Show the popup

  };

  
  // Check session validity periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const expirationTime = localStorage.getItem('sessionExpiration');
      if (expirationTime && Date.now() > expirationTime) {
        endSession();
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const closeSessionExpiredPopup = () => setSessionExpired(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, startSession, endSession, sessionExpired, closeSessionExpiredPopup,userData,setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
