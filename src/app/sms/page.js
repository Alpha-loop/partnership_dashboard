import { Menu } from 'lucide-react';

const SMSPage = ({ openNavbar }) => (
  <div className="p-8">
    <button
      onClick={openNavbar}
      className="lg:hidden fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-full shadow-lg z-50"
      aria-label="Open navigation"
    >
      <Menu className="w-6 h-6" />
    </button>
    <h1 className="text-3xl font-medium text-gray-800 mt-10 md:mt-0">SMS</h1>
    {/* Add more SMS content here */}
    <div className="mb-6 mt-13 sm:flex items-center justify-between">
      <div className="flex items-center justify-between gap-4">
        <button className="bg-blue-800 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          SMS Purchases
        </button>
        <button className="bg-blue-800 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sent Messages
        </button>
      </div>
      <input
        type="text"
        className="border border-gray-300 rounded-lg py-2 px-4 bg-stone-700 text-gray-200 outline-none focus:outline-blue-600 outline mt-3 w-full sm:mt-0 sm:w-auto"
        placeholder="Search name..."
      />
    </div>

    <div className="overflow-x-auto">
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
          {/* Add rows here */}

          {[
            {
              name: "Greater Glory Ministry Int'l",
              amount: "500",
              smsUnit: "250",
              smsBalance: "0",
              purchaseDate: "08/07/2025",
            },
            {
              name: "Zone 3",
              amount: "0",
              smsUnit: "100",
              smsBalance: "0",
              purchaseDate: "08/07/2025",
            },
            {
              name: "Greatwalls Prophetic Ministries Inc",
              amount: "2000",
              smsUnit: "1000",
              smsBalance: "0",
              purchaseDate: "07/07/2025",
            },
            {
              name: "RCCG The Faith City",
              amount: "700",
              smsUnit: "350",
              smsBalance: "0",
              purchaseDate: "07/07/2025",
            },
            {
              name: "Anglican Church of the Nativity",
              amount: "0",
              smsUnit: "100",
              smsBalance: "0",
              purchaseDate: "07/07/2025",
            },
          ].map((sms, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-5 py-4 whitespace-nowrap text-sm text-gray-700">
                {sms.name}
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                {sms.amount}
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                {sms.smsUnit}
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                {sms.smsBalance}
              </td>
              <td className="px-5 py-4 whitespace-nowrap text-sm text-center text-gray-700">
                {sms.purchaseDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SMSPage;
