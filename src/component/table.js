const Tablecontent = () => {
  return (
    <div className="border mt-6 pl-4 pb-15 pt-3 w-106 pr-4 bg-gray-100 shadow-md rounded-lg">
      <h1 className="font-sans text-3xl text-gray-950 font-medium">
        Plan Summary
      </h1>
      {/* Static header shown only once */}
      <table className=" divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="py-4 px-2 w-1/5 text-left text-sm font-semibold text-gray-600">
              Plan
            </th>
            <th className="py-4 px-2 text-left text-sm font-semibold text-gray-600 w-1/10">
              Price
            </th>
            <th className="py-4 px-2 text-left text-sm font-semibold text-gray-600 w-1/10">
              Active
            </th>
            <th className="py-4 px-2 text-left text-sm font-semibold text-gray-600 w-1/10">
              Inactive
            </th>
            <th className="py-4 px-2 text-left text-sm font-semibold text-gray-600 w-1/10">
              Revenue
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[
            {
              plan: "FREE PLAN",
              price: 0,
              active: 10638,
              inactive: 1914,
              revenue: 0,
            },
            {
              plan: "BASIC PLAN",
              price: 6000,
              active: 45,
              inactive: 253,
              revenue: 270000,
            },
            {
              plan: "PRO PLAN",
              price: 25000,
              active: 9,
              inactive: 32,
              revenue: 225000,
            },
            {
              plan: "ENTERPRISE PLAN",
              price: 45000,
              active: 2,
              inactive: 5,
              revenue: 90000,
            },
            {
              plan: "TRIAL PLAN",
              price: 10,
              active: 194,
              inactive: 0,
              revenue: 1940,
            },
            {
              plan: "BASIC PLUS PLAN",
              price: 12000,
              active: 7,
              inactive: 72,
              revenue: 84000,
            },
            {
              plan: "GROWTH PLAN",
              price: 15000,
              active: 13,
              inactive: 83,
              revenue: 195000,
            },
            {
              plan: "STARTER PLAN",
              price: 3000,
              active: 76,
              inactive: 223,
              revenue: 228000,
            },
            {
              plan: "UNLIMITED PLAN",
              price: 100000,
              active: 1,
              inactive: 4,
              revenue: 100000,
            },
          ].map((table, index) => (
            <tr key={index}>
              <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-gray-700">
                {table.plan}
              </td>
              <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-left text-gray-700">
                {table.price.toLocaleString()}
              </td>
              <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-left text-green-600">
                {table.active.toLocaleString()}
              </td>
              <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-left text-red-600">
                {table.inactive.toLocaleString()}
              </td>
              <td className="py-4 px-2 whitespace-nowrap text-sm font-semibold text-left text-gray-700">
                {table.revenue.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablecontent;

// <div className="flex justify-between items-center mt-10">
//   <h5 className="text-gray-950 font-medium w-2/5">Plan</h5>
//   <div className="flex items-center justify-between w-3/5">
//     <h5 className="text-gray-950 font-medium">Price</h5>
//     <h5 className="text-gray-950 font-medium">Active</h5>
//     <h5 className="text-gray-950 font-medium">Inactive</h5>
//     <h5 className="text-gray-950 font-medium">Revenue</h5>
//   </div>
// </div>
// <div className="border border-gray-300 mt-2 mb-4" />

// {/* Data rows */}
// {TableData.map((user) => (
//   <div key={user.id} className="mb-4">
//     <div className="flex justify-between items-center">
//       <h5 className="text-gray-950 font-medium w-1.5/5">{user.plan}</h5>
//       <div className="flex items-center justify-between pl-2 pr-2 w-3/5">
//         <h5 className="text-gray-950 font-medium">
//           {user.price.toLocaleString()}
//         </h5>
//         <h5 className="text-gray-950 font-medium text-green-500">
//           {user.active}
//         </h5>
//         <h5 className="text-gray-950 font-medium text-red-500">
//           {user.inactive}
//         </h5>
//         <h5 className="text-gray-950 font-bold">
//           {user.revenue.toLocaleString()}
//         </h5>
//       </div>
//     </div>
//     <div className="border border-gray-300 mt-2" />
//   </div>
// ))}
