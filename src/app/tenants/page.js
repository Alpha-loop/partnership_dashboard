import { Menu } from 'lucide-react';

const TenantsPage = ({ openNavbar }) => (
  
  <div className="p-8">
    <button
      onClick={openNavbar} // Call the function to open the navbar
      className="lg:hidden fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-full shadow-lg z-30"
      aria-label="Open navigation"
    >
      <Menu className="w-6 h-6" />
    </button>

    <h1 className="text-3xl font-medium text-gray-800 mb-4 mt-10 md:mt-0">Tenants</h1>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-200 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">Tenants</h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12">
          13,858
        </p>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">
            Active Tenants
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12">
          154
        </p>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">
            In-Active Tenants
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12">
          673
        </p>
      </div>
    </div>

    <div className="flex justify-self-end mt-12 mb-4">
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 bg-stone-700 text-gray-200 outline-none focus:outline-blue-600 outline"
        placeholder="Search name..."
      />
      <button className="bg-blue-800 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
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
          {/* Example Tenant Data - Replace with dynamic data */}
          {[
            {
              name: "Grace of Christ Chapel (World Wide)",
              email: "sportsonowotemielaimi@gmail.com",
              phone: "+233 34 861 1917",
              plan: "TRIAL PLAN",
              country: "Ghana",
              size: 0,
              smsUnit: 13,
              expiry: "22/07/2025",
            },
            {
              name: "LIVING WORD BAPTIST CHURCH",
              email: "livingwordbaptistll@gmail.com",
              phone: "+233 59 888 9196",
              plan: "TRIAL PLAN",
              country: "Ghana",
              size: 0,
              smsUnit: 11,
              expiry: "22/07/2025",
            },
            {
              name: "holy fundation church",
              email: "robinsonnonochukwu7@gmail.com",
              phone: "+234 803 768 8184",
              plan: "TRIAL PLAN",
              country: "Nigeria",
              size: 0,
              smsUnit: 9.1,
              expiry: "22/07/2025",
            },
            {
              name: "Garden of The Remnants Ministry",
              email: "uduchibassett84@gmail.com",
              phone: "+234 806 049 9297",
              plan: "TRIAL PLAN",
              country: "Nigeria",
              size: 1,
              smsUnit: 2.55,
              expiry: "26/07/2025",
            },
            {
              name: "LIVINGSPRING REVIVAL AND TRUTH MINISTRY INTERNATIONAL",
              email: "livingtrotter@gmail.com",
              phone: "+234 903 049 9531",
              plan: "TRIAL PLAN",
              country: "Nigeria",
              size: 0,
              smsUnit: 9.1,
              expiry: "26/07/2025",
            },
            {
              name: "Anglican",
              email: "oviadididewmi@gmail.com",
              phone: "+256 798 948553",
              plan: "TRIAL PLAN",
              country: "Uganda",
              size: 0,
              smsUnit: 13,
              expiry: "26/07/2025",
            },
            {
              name: "CHURCH OF MERCY",
              email: "gordonkanisemba@yahoo.com",
              phone: "+254 720 831399",
              plan: "TRIAL PLAN",
              country: "Kenya",
              size: 0,
              smsUnit: 13,
              expiry: "26/07/2025",
            },
          ].map((tenant, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {tenant.name}
                </div>
                <div className="text-sm text-gray-500">{tenant.email}</div>
                <div className="text-sm text-gray-500">{tenant.phone}</div>
              </td>
              <td className="py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-500">
                  {tenant.plan}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tenant.country}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tenant.size}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tenant.smsUnit}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {tenant.expiry}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-md font-bold text-gray-500 tracking-wider">
                <p>...</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TenantsPage;
