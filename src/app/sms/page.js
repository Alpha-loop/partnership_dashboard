'use client'; 

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';


import {
  getRecentSMS,
} from '../../services/partner'; 

const SMSPage = ({ openNavbar }) => {
  const [smsRecords, setSmsRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  // State to manage which tab is active: 'purchases' or 'sentMessages'
  const [currentView, setCurrentView] = useState('purchases');

  const fetchSmsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const smsData = await getRecentSMS()
      setSmsRecords(smsData.data)

    } catch (err) {
      console.error(`Failed to fetch SMS data for ${currentView}:`, err);
      setError(err.message || `Failed to load ${currentView} data.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSmsData();
  }, []);

  

  // Client-side filtering for the table based on search term
  const filteredSmsRecords = smsRecords.filter(record => {
    const name = record.name || '';
    const amount = record.amount ? String(record.amount) : '';
    const smsUnit = record.smsUnit ? String(record.smsUnit) : '';
    const smsBalance = record.smsBalance ? String(record.smsBalance) : '';
    const purchaseDate = record.purchaseDate || '';

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return (
      name.toLowerCase().includes(lowerCaseSearchTerm) ||
      amount.includes(lowerCaseSearchTerm) ||
      smsUnit.includes(lowerCaseSearchTerm) ||
      smsBalance.includes(lowerCaseSearchTerm) ||
      purchaseDate.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  // Helper function to format date if needed (assuming purchaseDate is a string like "MM/DD/YYYY")
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    // You might want to parse and reformat date strings here if they come in a different format
    // For example, if from API as ISO string: 
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className="p-8 font-sans">
      <button
        onClick={openNavbar}
        className="lg:hidden fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-full shadow-lg z-50"
        aria-label="Open navigation"
      >
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="text-3xl font-medium text-gray-800 mt-10 md:mt-0">SMS</h1>

      <div className="mb-6 mt-13 sm:flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentView('purchases')}
            className={`font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200
              ${currentView === 'purchases' ? 'bg-blue-800 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
          >
            SMS Purchases
          </button>
          <button
            onClick={() => setCurrentView('sentMessages')}
            className={`font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200
              ${currentView === 'sentMessages' ? 'bg-blue-800 text-white' : 'bg-gray-300 text-gray-800 hover:bg-gray-400'}`}
          >
            Sent Messages
          </button>
        </div>
        <input
          type="text"
          className="border border-gray-300 rounded-lg py-2 px-4 bg-stone-700 text-gray-200 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mt-3 w-full sm:mt-0 sm:w-auto"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-blue-500 text-center">Loading SMS data...</p>}
      {error && <p className="text-red-500 text-center">Error: {error}</p>}

      {!loading && !error && (
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-5 py-3 text-left text-sm font-bold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold uppercase tracking-wider">
                  SMS <br />Unit
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold uppercase tracking-wider">
                  SMS <br />Balance
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold uppercase tracking-wider">
                  <p className="font-extrabold">Purchase <br />Date</p>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSmsRecords.length > 0 ? (
                filteredSmsRecords.map((sms, index) => (
                  // Use a unique identifier from your backend if available (e.g., sms.id)
                  // Falling back to index if no unique ID is guaranteed, but ID is preferred.
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                      {sms.name || 'N/A'}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                      {sms.amount || 'N/A'}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                      {sms.smsUnit || 'N/A'}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                      {sms.smsBalance || 'N/A'}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                      {formatDate(sms.purchaseDate)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-5 py-4 text-center text-gray-500">No SMS records found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default SMSPage;