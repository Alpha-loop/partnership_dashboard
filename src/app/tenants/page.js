'use client'; // Important for client-side interactivity

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

// Import the API service functions from your apiService.js file
// Adjust the path based on where you saved apiService.js relative to TenantsPage.jsx
// For example, if apiService.js is in the root and TenantsPage.jsx is in src/pages, it might be '../../apiService'
// If apiService.js is in src/utils and TenantsPage.jsx is in src/pages, it might be '../utils/apiService'
import { getAllTenants } from '../../services/partner'; // Assuming apiService.js is one level up from this file
import { getActiveAccounts, getBasicSaasInformation, getInactiveAccounts } from '../../services/dashboard'

const TenantsPage = ({ openNavbar }) => {
  const [tenants, setTenants] = useState([]);
  const [totalTenants, setTotalTenants] = useState(0);
  const [activeTenantsCount, setActiveTenantsCount] = useState(0);
  const [inactiveTenantsCount, setInactiveTenantsCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch all necessary data for the Tenants page
  const fetchTenantsData = async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch all tenants for the table
      const allTenantsData = await getAllTenants();
      // Assuming allTenantsData is an array of tenant objects
      setTenants(allTenantsData);

      // Fetch active accounts count
      // The apiService.js already handles extracting 'count' or returning direct data
      const activeAccounts = await getActiveAccounts();
      setActiveTenantsCount(activeAccounts);

      // Fetch inactive accounts count
      // The apiService.js already handles extracting 'count' or returning direct data
      const inactiveAccounts = await getInactiveAccounts();
      setInactiveTenantsCount(inactiveAccounts);

      // Fetch basic SaaS information for total tenants count
      const basicSaasInfo = await getBasicSaasInformation();
      // Assuming basicSaasInfo has a property like 'totalTenants'
      setTotalTenants(basicSaasInfo.totalTenants || 0);

    } catch (err) {
      console.error("Failed to fetch tenants data:", err);
      setError(err.message || 'Failed to load tenant data.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchTenantsData();
  }, []); // Empty dependency array means this runs once on mount

  // Client-side filtering for the table based on search term
  const filteredTenants = tenants.filter(tenant => {
    const name = tenant.name || '';
    const email = tenant.email || '';
    const plan = tenant.plan || '';
    const country = tenant.country || '';
    const size = tenant.size ? String(tenant.size) : ''; // Convert to string for search
    const smsUnit = tenant.smsUnit ? String(tenant.smsUnit) : ''; // Convert to string for search
    const expiry = tenant.expiry || '';

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return (
      name.toLowerCase().includes(lowerCaseSearchTerm) ||
      email.toLowerCase().includes(lowerCaseSearchTerm) ||
      plan.toLowerCase().includes(lowerCaseSearchTerm) ||
      country.toLowerCase().includes(lowerCaseSearchTerm) ||
      size.includes(lowerCaseSearchTerm) ||
      smsUnit.includes(lowerCaseSearchTerm) ||
      expiry.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="p-8 font-sans">
      <button
        onClick={openNavbar} // Call the function to open the navbar
        className="lg:hidden fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-full shadow-lg z-30"
        aria-label="Open navigation"
      >
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-3xl font-medium text-gray-800 mb-4 mt-10 md:mt-0">Tenants</h1>

      {loading && <p className="text-blue-500 text-center">Loading tenant data...</p>}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {!loading && !error && (
        <>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-1xl font-semibold text-gray-700 mb-2">Tenants</h3>
                <p className="text-green-500 font-semibold">%</p>
              </div>
              <p className="text-2xl font-medium text-gray-950 text-right mt-12">
                {totalTenants}
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-1xl font-semibold text-gray-700 mb-2">
                  Active Tenants
                </h3>
                <p className="text-green-500 font-semibold">%</p>
              </div>
              <p className="text-2xl font-medium text-gray-950 text-right mt-12">
                {activeTenantsCount}
              </p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between">
                <h3 className="text-1xl font-semibold text-gray-700 mb-2">
                  In-Active Tenants
                </h3>
                <p className="text-2xl font-medium text-gray-950 text-right mt-12">
                  {inactiveTenantsCount}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-12 mb-4"> {/* Changed justify-self-end to justify-end */}
            <input
              type="text"
              className="border border-gray-300 rounded-l-lg py-2 px-4 bg-stone-700 text-gray-200 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" // Added focus styles, rounded-l-lg
              placeholder="Search tenants..." // More generic search placeholder
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"> {/* Added rounded-r-lg, better hover/focus */}
              Search
            </button>
          </div>

          {/* Tenants Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Size
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    SMS Unit
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Expiry Date
                  </th>
                  <th className="px-5 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTenants.length > 0 ? (
                  filteredTenants.map((tenant, index) => (
                    // Use a unique identifier from your backend if available (e.g., tenant.id)
                    // Falling back to index if no unique ID is guaranteed, but ID is preferred.
                    <tr key={tenant.id || index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {tenant.name || 'N/A'}
                        </div>
                        <div className="text-sm text-gray-500">{tenant.email || 'N/A'}</div>
                        <div className="text-sm text-gray-500">{tenant.phone || 'N/A'}</div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-500">
                          {tenant.plan || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tenant.country || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tenant.size || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tenant.smsUnit || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {tenant.expiry || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-md font-bold text-gray-500 tracking-wider">
                        <p>...</p> {/* Keep the existing "..." for action */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-6 py-4 text-center text-gray-500">No tenants found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TenantsPage;