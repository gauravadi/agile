import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const Logout = () => {
  const { logOut } = useContext(AuthContext); // Access logOut from AuthContext
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert('Sign out successful!');
        navigate(from, { replace: true }); // Redirect to the previous page or home
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
