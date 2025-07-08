const TenantsPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Tenants</h1>
    <p className="text-gray-600 mb-6">Manage your tenants here. You can view, add, or remove tenant information.</p>

    {/* Search and Action Bar */}
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <input
          type="text"
          placeholder="Search tenants..."
          className="px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-lg"
        />
        <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors duration-200 rounded-r-lg">
          Search
        </button>
      </div>
      <button className="bg-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200">
        Add New Tenant
      </button>
    </div>

    {/* Tenants Table */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SMS Unit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Example Tenant Data - Replace with dynamic data */}
          {[
            { name: 'Grace of Christ Chapel (World Wide)', email: 'sportsonowotemielaimi@gmail.com', phone: '+233 34 861 1917', plan: 'TRIAL', country: 'Ghana', size: 0, smsUnit: 13, expiry: '22/07/2025' },
            { name: 'LIVING WORD BAPTIST CHURCH', email: 'livingwordbaptistll@gmail.com', phone: '+233 59 888 9196', plan: 'TRIAL', country: 'Ghana', size: 0, smsUnit: 11, expiry: '22/07/2025' },
            { name: 'holy fundation church', email: 'robinsonnonochukwu7@gmail.com', phone: '+234 803 768 8184', plan: 'TRIAL', country: 'Nigeria', size: 0, smsUnit: 9.1, expiry: '22/07/2025' },
            { name: 'Garden of The Remnants Ministry', email: 'uduchibassett84@gmail.com', phone: '+234 806 049 9297', plan: 'TRIAL', country: 'Nigeria', size: 1, smsUnit: 2.55, expiry: '26/07/2025' },
            { name: 'LIVINGSPRING REVIVAL AND TRUTH MINISTRY INTERNATIONAL', email: 'livingtrotter@gmail.com', phone: '+234 903 049 9531', plan: 'TRIAL', country: 'Nigeria', size: 0, smsUnit: 9.1, expiry: '26/07/2025' },
            { name: 'Anglican', email: 'oviadididewmi@gmail.com', phone: '+256 798 948553', plan: 'TRIAL', country: 'Uganda', size: 0, smsUnit: 13, expiry: '26/07/2025' },
            { name: 'CHURCH OF MERCY', email: 'gordonkanisemba@yahoo.com', phone: '+254 720 831399', plan: 'TRIAL', country: 'Kenya', size: 0, smsUnit: 13, expiry: '26/07/2025' },
          ].map((tenant, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{tenant.name}</div>
                <div className="text-sm text-gray-500">{tenant.email}</div>
                <div className="text-sm text-gray-500">{tenant.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  {tenant.plan}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.country}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.size}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.smsUnit}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.expiry}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TenantsPage;