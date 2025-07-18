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

'use client';

import React, { useState } from 'react';
import loginUser from '../../services/auth';
import { useRouter } from 'next/navigation';
// import DashboardPage from '../dashboard'

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const { data } = await loginUser(username, password);
      console.log('Login successful:', data);
      setSuccessMessage('Login successful! Redirecting...');
      if (data) {
        localStorage.setItem('authToken', data.token);
      } else {
        console.warn('Login response did not contain a token. Check backend response structure.');
      }
      router.push('/');
      
    } catch (err) {
      console.error('Login failed:', err);
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
              type="text"
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
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};


export default LoginPage;
