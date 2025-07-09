const Expirecontent = () => {
  return (
    <div className="border mt-6 pl-6  pt-3 w-100 pr-6 bg-gray-100 shadow-md rounded-lg">
      <div className="px-10 flex justify-between items-center">
        <button className="text-gray-950 text-2xl mt-2 mr-4 font-semibold leading-5 focus:underline ">
          Expiring Accounts
        </button>
        <button className="text-gray-950 text-2xl mt-2 font-semibold leading-5 focus:underline">
          Expired Accounts
        </button>
      </div>

      <div className="flex justify-between items-center w-60 mt-6">
        <p className="text-gray-950">Expiring day</p>
        <select
          name="This Week"
          className="border border-gray-300 rounded-md py-2 px-2 bg-stone-700 text-gray-950 font-semibold outline-none focus:outline-blue-600 outline"
        >
          <option value="" className="hover:bg-blue-400">
            This Week
          </option>
          <option value="" className="hover:bg-red-400">
            Next Week
          </option>
          <option value="" className="hover:bg-blue-400">
            This Month
          </option>
          <option value="" className="hover:bg-blue-400">
            Next Month
          </option>
          <option value="" className="hover:bg-blue-400">
            3 Months
          </option>
        </select>
      </div>

      <div className="overflow-x-auto overflow-y-auto h-132">
        <table className=" divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="ppy-4 px-2 w-1/5 text-left text-sm font-semibold text-gray-600">
                Name
              </th>
              <th className="py-4 px-2 w-1/5 text-left text-sm font-semibold text-gray-600">
                Plan
              </th>
              <th className="py-4 px-2 w-1/5 text-left text-sm font-semibold text-gray-600">
                Expiry Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
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
                name: "The Glory of Liberty int’l Ministry",
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
              <tr key={index}>
                <td className="py-4 px-2 text-sm font-semibold text-gray-700 text-left">
                  <div className="text-sm font-medium text-gray-900 leading-5">
                    {table.name}
                  </div>
                  <div className="text-sm text-gray-500">{table.email}</div>
                  <div className="text-sm text-gray-500">{table.phone}</div>
                </td>
                <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-gray-700 text-left">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-gray-700">
                    {table.plan}
                  </span>
                </td>
                <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-gray-700 text-left">
                  {table.expiryDate}
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
