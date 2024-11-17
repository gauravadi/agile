import React, { useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../contects/AuthProvider';

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    setError(''); // Clear previous errors
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    login(email, password)
      .then((userCredential) => {
        alert('Login successful!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message || 'Failed to log in');
      });
  };

  const handleGoogleLogin = () => {
    setError(''); // Clear previous errors
    loginwithGoogle()
      .then((result) => {
        alert('Login with Google successful!');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message || 'Failed to log in with Google');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Log In</h1>
            <form
              onSubmit={handleLogin}
              className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                  placeholder="Email address"
                />
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                  placeholder="Password"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <p>
                Don't have an account?{' '}
                <Link className="text-blue-500 underline" to="/sign-up">
                  Sign Up
                </Link>{' '}
                here.
              </p>
              <button className="bg-blue-500 text-white rounded-md px-2 py-2">
                Log In
              </button>
            </form>
            <hr />
            <div className="flex w-full items-center flex-col mt-5 gap-2">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-2 border-2 border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                <FcGoogle className="w-6 h-6" /> Log In with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
