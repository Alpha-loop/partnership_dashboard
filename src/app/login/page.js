// const LoginPage = () => {
//   return (
//     <div className="px-4 flex items-center justify-center h-screen bg-blue-100 sm:px-0">
//       <div className="w-150">
//         <h1 className="text-2xl font-black mb-6 text-gray-950">
//           Welcome back!
//         </h1>
//         <p className="text-gray-950 mb-4">Login to your account to continue</p>
//         <form>
//           <div className="mb-6 py-1 border border-gray-300 rounded-md bg-slate-400">
//             <p className="text-gray-600 text-sm pl-3">Email Address</p>
//             <input
//               type="email"
//               className="w-full px-3 focus:outline-none"
//               placeholder="Enter your email"
//               color="text-white"
//             />
//           </div>
//           <div className="mb-8 py-1 border border-gray-300 rounded-md bg-slate-400">
//             <p className="text-gray-600 text-sm pl-3">Password</p>
//             <input
//               type="password"
//               className="w-full px-3 focus:outline-none"
//               placeholder="Enter your password"
//               color="text-white"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-auto bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

'use client'; // Important for client-side interactivity

import React, { useState } from 'react';
import loginUser from '../../services/auth'; // Adjust the path as needed

const LoginPage = () => {
  const [username, setUsername] = useState(''); // Changed from email to username
  const [password, setPassword] = useState('');
  const [isFamily, setIsFamily] = useState(true); // Added for the 'isFamily' parameter, hardcoded to true as per curl
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // For success feedback

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Call loginUser with username, password, and isFamily
      const response = await loginUser(username, password, isFamily);
      console.log('Login successful:', response);
      setSuccessMessage('Login successful! Redirecting...');
      // In a real application, you would typically:
      // 1. Store the authentication token (e.g., in localStorage, context, or Redux)
      // 2. Redirect the user to the dashboard or another protected route
      // Example: history.push('/dashboard'); or navigate('/dashboard');
      // For this example, we'll just show the success message.
    } catch (err) {
      console.error('Login failed:', err);
      // Display a more user-friendly error if the message is too technical
      setError(err.message || 'An unexpected error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 font-sans sm:px-0">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">
          Welcome back!
        </h1>
        <p className="text-gray-700 mb-8 text-center">Login to your account to continue</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text" // Changed type to text for username
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-150"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-150"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          {/* Optional: Add a checkbox for isFamily if it needs to be dynamic */}
          {/*
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isFamily"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              checked={isFamily}
              onChange={(e) => setIsFamily(e.target.checked)}
              disabled={loading}
            />
            <label htmlFor="isFamily" className="ml-2 block text-sm text-gray-900">
              Are you a family account?
            </label>
          </div>
          */}

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm text-center" role="alert">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm text-center" role="alert">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};


export default LoginPage;
