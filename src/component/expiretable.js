const Expirecontent = () => {
  return (
    <div className="border mt-6 p-6 bg-gray-100 shadow-md rounded-lg">
      {/* Header with toggle buttons */}
      <div className="sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="flex space-x-4 overflow-x-auto pb-2 w-full sm:w-auto">
          <button className="text-gray-950 text-xl sm:text-2xl font-semibold whitespace-nowrap focus:underline hover:underline">
            Expiring Accounts
          </button>
          <button className="text-gray-950 text-xl sm:text-2xl font-semibold whitespace-nowrap focus:underline hover:underline">
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
            {[
              {
                name: "DOMINION CITY JABI",
                email: "dcjabichurch@gmail.com",
                phone: "+234 901 067 5928",
                plan: "STARTER PLAN",
                expiryDate: "08/07/2025",
              },
              {
                name: "Grace Cathedral",
                email: "gracecathedraldhmm@gmail.com",
                phone: "+233 20 591 1275",
                plan: "BASIC PLAN",
                expiryDate: "10/07/2025",
              },
              {
                name: "REDEEMED CHRISTIAN CHURCH OF GOD COVENANT CHAPEL IBOGUN",
                email: "rccgcovenantchapelibogun@gmail.com",
                phone: "+234 803 435 7623",
                plan: "STARTER PLAN",
                expiryDate: "10/07/2025",
              },
              {
                name: "The Glory of Liberty int' Ministry",
                email: "pstfreedomodine2018@gmail.com",
                phone: "+234 805 492 0935",
                plan: "GROWTH PLAN",
                expiryDate: "10/07/2025",
              },
              {
                name: "Gospel Mission Ministries Swakopmund",
                email: "gospelmission9@gmail.com",
                phone: "+264 81 605 9462",
                plan: "BASIC PLAN",
                expiryDate: "12/07/2025",
              },
              {
                name: "New Realms Christian Centre",
                email: "newrealmschristiancentre@gmail.com",
                phone: "08185418764",
                plan: "STARTER PLAN",
                expiryDate: "12/07/2025",
              },
            ].map((table, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <div className="text-sm font-medium text-gray-900">{table.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{table.email}</div>
                  <div className="text-sm text-gray-500">{table.phone}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    {table.plan}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {table.expiryDate}
                  </div>
                  <div className="text-xs text-red-600 font-medium mt-1">
                    {(() => {
                      const expiryDate = new Date(table.expiryDate.split('/').reverse().join('-'));
                      const today = new Date();
                      const diffTime = expiryDate - today;
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                      
                      if (diffDays < 0) return 'Expired';
                      if (diffDays === 0) return 'Expires today';
                      if (diffDays === 1) return 'Expires tomorrow';
                      return `Expires in ${diffDays} days`;
                    })()}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expirecontent;