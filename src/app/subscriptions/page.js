'use client'; // Important for client-side interactivity

import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

// Import the API service function for recent subscriptions
import {
  getRecentSubscriptions,
} from '../../services/partner'; // Adjust the path based on your file structure

const SubscriptionPage = ({ openNavbar }) => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch subscription data
  const fetchSubscriptionsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRecentSubscriptions();
      // Assuming data is an array of subscription objects
      setSubscriptions(data);
      console.log('Recent Subscriptions Data:', data);
    } catch (err) {
      console.error("Failed to fetch subscription data:", err);
      setError(err.message || 'Failed to load subscription data.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchSubscriptionsData();
  }, []); // Empty dependency array means this runs once on mount

  // Client-side filtering for the table based on search term
  // const filteredSubscriptions = subscriptions.filter(subscription => {
  //   const name = subscription.name || '';
  //   const email = subscription.email || '';
  //   const phone = subscription.phone || '';
  //   const plan = subscription.plan || '';
  //   const country = subscription.country || '';
  //   const subscriptionDate = subscription.subscriptionDate || '';
  //   const amount = subscription.amount ? String(subscription.amount) : ''; // Convert to string for search

  //   const lowerCaseSearchTerm = searchTerm.toLowerCase();

  //   return (
  //     name.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     email.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     phone.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     plan.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     country.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     subscriptionDate.toLowerCase().includes(lowerCaseSearchTerm) ||
  //     amount.includes(lowerCaseSearchTerm)
  //   );
  // });

  // Helper function to format date if needed (assuming subscriptionDate is a string like "MM/DD/YYYY")
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    // You might want to parse and reformat date strings here if they come in a different format
    // For example, if from API as ISO string: new Date(dateString).toLocaleDateString()
    return dateString;
  };

  // Helper function to format amount with commas
  const formatAmount = (amount) => {
    if (amount === null || amount === undefined) return 'N/A';
    return Number(amount).toLocaleString();
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
      <h1 className="text-3xl font-medium text-gray-800 mb-18 mt-10 md:mt-0">Subscription</h1>

      <div className="w-full mt-12 flex justify-end"> {/* Changed justify-self-end to justify-end */}
        <input
          type="text"
          className="border border-gray-300 rounded-lg py-2 px-4 bg-stone-700 text-gray-200 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full sm:w-auto"
          placeholder="Search subscriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading && <p className="text-blue-500 text-center mt-4">Loading subscriptions data...</p>}
      {error && <p className="text-red-500 text-center mt-4">Error: {error}</p>}

      {!loading && !error && (
        <div className="mt-6 overflow-x-auto bg-white rounded-lg shadow-lg">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Plan
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Country
                </th>
                <th className="px-5 py-3 text-left text-sm font-bold text-gray-600 uppercase tracking-wider">
                  Subscription Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {subscriptions.length > 0 ? (
                subscriptions.map((subscription, index) => (
                  // Use a unique identifier from your backend if available (e.g., subscription.id)
                  // Falling back to index if no unique ID is guaranteed, but ID is preferred.
                  <tr key={subscription.id || index} className="hover:bg-gray-100">
                    <td className="px-5 py-4 text-sm text-gray-700">
                      <div className="text-sm font-medium text-gray-900">
                        {subscription.name || 'N/A'}
                      </div>
                      <div className="text-sm text-gray-500">
                        {subscription.phone || 'N/A'}
                      </div>
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                      {subscription.subscriptionPlan || 'N/A'}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700 uppercase">
                      {subscription.country || 'N/A'}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                      {formatDate(subscription.subscriptionDate)}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                      {subscription.expiryDate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-5 py-4 text-center text-gray-500">No subscriptions found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default SubscriptionPage;