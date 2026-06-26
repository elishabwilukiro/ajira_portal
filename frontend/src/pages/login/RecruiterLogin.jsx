import { React } from 'react';
import TextInput from '../../components/inputs/TextInput';
import { NavLink } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;



const RecruiterLogin = () => {

  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSuccess = async(credentialResponse) => {
    try {
      setLoading(true);
      const token = credentialResponse.credential;
      await axios.post(`${API_URL}/auth/google-login`, {
        token,
        role: 'recruiter'
      },      
      {
        withCredentials: true,  // http-only cookie will be set by the server in response to this request
      }
    );

    // After Login SUccess
    window.location.href = '/recruiter/dashboard';
    
  } catch (error) {
    showToast({
      type: 'error',
      message: error.response?.data?.error || 'An error occurred during Google login',
    });
    
    } finally {
      setLoading(false);
    }

  };

  const handleError = () => {
    console.error('Google Login Error:', error);
    showToast({
      type: 'error',
      message: 'Failed to login with Google. Please try again.',
    });
  };

  const handleManualLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
        role: 'recruiter'
      },      
      {
        withCredentials: true,  // http-only cookie will be set by the server in response to this request
      }
    );

    // After Login SUccess
    window.location.href = '/recruiter/dashboard';
    
    } catch (error) {
      showToast({
        type: 'error',
        message: error.response?.data?.error || 'An error occurred during login',
      });
      
      } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="flex-grow flex justify-center items-center p-6">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-md border border-gray-100">
          <div className="p-8 sm:p-10">

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Recruiter Login
            </h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              Access your recruiter dashboard
            </p>

            {/* Google Login */}
            <div className='mb-6'>
              <div className='border border-gray-300 rounded-lg overflow-hidden'>
                <GoogleLogin 
                  onSuccess={handleSuccess}
                  onError={handleError}
                  shape='rectangular' />
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-200"></div>
              <span className="px-3 text-sm text-gray-400">OR</span>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>

            {/* Manual Login Form */}
            <form onSubmit={handleManualLogin} className="space-y-5">

              {/* Email */}

              <TextInput
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required={true}
              />

              {/* Password */}
              <TextInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required={true}
              />

              {/* Submit Button */}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-200 shadow-sm shadow-purple-200"
              >
                { loading ? 'Logging in...' : 'Log In as Recruiter'}
              </button>
            </form>

            {/* Footer */}
            <p className="mt-6 text-center text-sm text-gray-500">
              Don’t have an account?{" "}
              <NavLink to='/recruiterSignup' className="text-purple-600 font-medium cursor-pointer hover:underline">
                Register here
              </NavLink>
            </p>

          </div>
        </div>
      </div>
    </>
  );
};

export default RecruiterLogin;