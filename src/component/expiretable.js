import React, { useState, useEffect } from 'react';
import { getExpiredAccounts, getExpiringAccounts } from '../services/dashboard';

const Expirecontent = () => {
  const [expiredAcct, setExpiredAcct] = useState([]);
  const [expiringAcct, setExpiringAcct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('expiring');

  useEffect(() => {
    const fetchData = async () => { 
      try {
        setLoading(true); 
        setError(null);

        const expiredRes = await getExpiredAccounts();
        console.log('Expired Accounts Raw Response:', expiredRes);
        if (Array.isArray(expiredRes.data)) {
          setExpiredAcct(expiredRes.data);
        } else {
          console.warn('Expired Accounts data is not an array:', expiredRes.data);
          if (expiredRes.data && Array.isArray(expiredRes.data.data)) {
            setExpiredAcct(expiredRes.data.data);
          } else {
             setError(prev => prev ? prev + "\n" + "Invalid Expired Accounts data format." : "Invalid Expired Accounts data format.");
          }
        }


        const expiringRes = await getExpiringAccounts();
        console.log('Expiring Accounts Raw Response:', expiringRes);
        if (Array.isArray(expiringRes.data)) {
          setExpiringAcct(expiringRes.data);
        } else {
          console.warn('Expiring Accounts data is not an array:', expiringRes.data);
          if (expiringRes.data && Array.isArray(expiringRes.data.data)) {
            setExpiringAcct(expiringRes.data.data);
          } else {
             setError(prev => prev ? prev + "\n" + "Invalid Expiring Accounts data format." : "Invalid Expiring Accounts data format.");
          }
        }

      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err.message || 'Failed to fetch account data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  console.log('Expired Accounts State:', expiredAcct);
  console.log('Expiring Accounts State:', expiringAcct);

  const currentTableData = activeTab === 'expiring' ? expiringAcct : expiredAcct;

  
  const getExpiryStatus = (expiryDateString) => {
    if (!expiryDateString) return 'N/A';
    
    const [day, month, year] = expiryDateString.split('/');
    const expiryDate = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    
    expiryDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Expired';
    if (diffDays === 0) return 'Expires today';
    if (diffDays === 1) return 'Expires tomorrow';
    return `Expires in ${diffDays} days`;
  };

  if (loading) {
    return (
      <div className="border mt-6 p-4 bg-gray-100 shadow-md rounded-lg flex justify-center items-center h-40">
        <p>Loading account data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border mt-6 p-4 bg-red-100 text-red-700 shadow-md rounded-lg h-40 flex justify-center items-center">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="border mt-6 p-6 bg-gray-100 shadow-md rounded-lg">
      {/* Header with toggle buttons */}
      <div className="sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('expiring')}
            className={`text-xl sm:text-2xl font-semibold whitespace-nowrap focus:underline hover:underline ${
              activeTab === 'expiring' ? 'text-blue-700 underline' : 'text-gray-950'
            }`}
          >
            Expiring Accounts
          </button>
          <button
            onClick={() => setActiveTab('expired')}
            className={`text-xl sm:text-2xl font-semibold whitespace-nowrap focus:underline hover:underline ${
              activeTab === 'expired' ? 'text-blue-700 underline' : 'text-gray-950'
            }`}
          >
            Expired Accounts
          </button>
        </div>

        {/* Filter dropdown */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <p className="text-gray-950 whitespace-nowrap">Expiring day</p>
          <select
            className="border border-gray-300 rounded-md py-2 px-3 bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-auto"
          >
            <option value="">This Week</option>
            <option value="">Next Week</option>
            <option value="">This Month</option>
            <option value="">Next Month</option>
            <option value="">3 Months</option>
          </select>
        </div>
      </div>

      {/* Responsive table container */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Expiry Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentTableData.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-4 py-3 text-center text-sm text-gray-500">
                  {activeTab === 'expiring' ? 'No expiring accounts found.' : 'No expired accounts found.'}
                </td>
              </tr>
            ) : (
              currentTableData.map((account, index) => (
                <tr key={account.id || index} className="hover:bg-gray-50"> {/* Use a unique 'id' from your data if available, otherwise index */}
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium text-gray-900">{account.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{account.email}</div>
                    <div className="text-sm text-gray-500">{account.phone}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {account.plan}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {account.expiryDate}
                    </div>
                    <div className={`text-xs font-medium mt-1 ${getExpiryStatus(account.expiryDate).includes('Expired') ? 'text-red-600' : 'text-green-600'}`}>
                      {getExpiryStatus(account.expiryDate)}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expirecontent;