import React, { useState, useEffect } from 'react';
import Tablecontent from "@/component/table";
import Expirecontent from "@/component/expiretable";
import DashboardGraph from "@/component/graph";
import { Menu } from 'lucide-react';

// Import the API service functions
import {
  getBasicSaasInformation,
  getActiveAccounts,
  getInactiveAccounts,
  // Add other API functions here as you integrate them into Tablecontent, Expirecontent, Graph
} from '../../services/dashboard'; // Adjust the path based on your file structure

const DashboardPage = ({ openNavbar }) => {
  // State for basic SaaS information
  const [saasInfo, setSaasInfo] = useState(null);
  // State for active accounts count
  const [activeAccountsCount, setActiveAccountsCount] = useState(null);
  // State for inactive accounts count
  const [inactiveAccountsCount, setInactiveAccountsCount] = useState(null);
  // State for loading status
  const [loading, setLoading] = useState(true);
  // State for error handling
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // --- Fetch Basic SaaS Information ---
        const saasInfoData = await getBasicSaasInformation();
        setSaasInfo(saasInfoData);
        console.log('Basic SaaS Info:', saasInfoData);

        // --- Fetch Active Accounts Count ---
        const activeAccountsData = await getActiveAccounts();
        setActiveAccountsCount(activeAccountsData);
        console.log('Active Accounts Count:', activeAccountsData);

        // --- Fetch In-Active Accounts Count ---
        const inactiveAccountsData = await getInactiveAccounts();
        setInactiveAccountsCount(inactiveAccountsData);
        console.log('Inactive Accounts Count:', inactiveAccountsData);

      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
        <p className="text-xl font-bold mb-2">Error loading dashboard:</p>
        <p className="text-center">{error.message}</p>
        <p className="text-sm mt-4">Please check your network and the console for more details.</p>
      </div>
    );
  }

  // Helper function to format numbers with commas
  const formatNumber = (num) => {
    if (num === null || num === undefined) return 'N/A';
    // Ensure num is a number before calling toLocaleString
    return Number(num).toLocaleString();
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
      <h1 className="text-2xl font-normal text-gray-800 mb-12 md:px-6 mt-10 md:mt-0">Dashboard</h1>
      {/* Add more dashboard content here */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-6">
        {/* MRR & ARR */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">MRR</h3>
            <p className="text-green-500 font-semibold">%</p> {/* Placeholder for percentage change */}
          </div>
          <p className="text-2xl font-bold text-gray-950">{formatNumber(saasInfo?.mrr)}</p>
          <p className="mt-3 text-sm font-semibold text-gray-700">ARR</p>
          <p className="text-2xl font-medium text-gray-950 text-right mt-3 mb-3">
            {formatNumber(saasInfo?.arr)}
          </p>
        </div>

        {/* Subscription Revenue */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-1xl font-semibold text-gray-700 mb-2">
              Subscription Revenue
            </h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-medium text-gray-950 text-right mt-12">
            {formatNumber(saasInfo?.subscriptionRevenue)}
          </p>
        </div>

        {/* SMS Revenue */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-1xl font-semibold text-gray-700 mb-2">
              SMS Revenue
            </h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-medium text-gray-950 text-right mt-12">
            {formatNumber(saasInfo?.smsRevenue)}
          </p>
        </div>

        {/* Current Month Revenue & Average Monthly Revenue */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <div className="mb-3">
              <h3 className="text-sm font-semibold text-gray-700">
                Current Month Revenue
              </h3>
              <p className="text-sm text-gray-700 font-semibold">
                (Subscription + SMS)
              </p>
            </div>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-medium text-gray-950">{formatNumber(saasInfo?.currentMonthRevenue)}</p>
          <div className="mb-4 mt-5">
            <h3 className="text-sm font-semibold text-gray-700">
              Average Monthly Revenue
            </h3>
            <p className="text-sm text-gray-700 font-semibold">(MRR + SMS)</p>
          </div>
          <p className="text-2xl font-medium text-gray-950 text-right mt-3 mb-3">
            {formatNumber(saasInfo?.averageMonthlyRevenue)}
          </p>
        </div>

        {/* Revenue per user */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-1xl font-semibold text-gray-700 mb-2">
              Revenue per user
            </h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-medium text-gray-950 text-right mt-12 mb-5">
            {formatNumber(saasInfo?.revenuePerUser)}
          </p>
        </div>

        {/* SMS Units Used & Purchased */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              SMS Units Used
            </h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-medium text-gray-950">{formatNumber(saasInfo?.smsUnitsUsed)}</p>
          <p className="mt-7 text-sm font-semibold text-gray-700">
            SMS Units Purchased
          </p>
          <p className="text-2xl font-medium text-gray-950 text-right mt-3 mb-3">
            {formatNumber(saasInfo?.smsUnitsPurchased)}
          </p>
        </div>

        {/* Sign Ups & Subscriptions */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">Sign Ups</h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-bold text-gray-950">{formatNumber(saasInfo?.signUps)}</p>
          <p className="mt-7 text-sm font-semibold text-gray-700">
            Subscriptions
          </p>
          <p className="text-2xl font-medium text-gray-950 text-right mt-1">{formatNumber(saasInfo?.subscriptions)}</p>
        </div>

        {/* Tenants (Total) */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-1xl font-semibold text-gray-700 mb-2">Tenants</h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-medium text-gray-950 text-right mt-12">
            {formatNumber(saasInfo?.totalTenants)}
          </p>
        </div>

        {/* Active & In-Active Tenants */}
        <div className="bg-gray-200 p-6 shadow-md rounded-lg hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">
              Active Tenants
            </h3>
            <p className="text-green-500 font-semibold">%</p>
          </div>
          <p className="text-2xl font-bold text-gray-950">{formatNumber(activeAccountsCount)}</p>
          <p className="mt-7 text-sm font-semibold text-gray-700">
            In-Active Tenants
          </p>
          <p className="text-2xl font-medium text-gray-950 text-right mt-1">
            {formatNumber(inactiveAccountsCount)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-30 md:px-6">
        {/* These components will need their own data fetching logic */}
        <Tablecontent />
        <Expirecontent />
      </div>

      <DashboardGraph />
    </div>
  );
};

export default DashboardPage
