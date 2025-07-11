const Tablecontent = () => {
  return (
    <div className="border mt-6 p-4 bg-gray-100 shadow-md rounded-lg overflow-x-auto">
      <h1 className="font-sans text-2xl md:text-3xl text-gray-950 font-medium mb-4">
        Plan Summary
      </h1>
      
      <div className="min-w-full overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Plan
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Active
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inactive
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
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
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {table.plan}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {table.price.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600 font-medium">
                  {table.active.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600 font-medium">
                  {table.inactive.toLocaleString()}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">
                  {table.revenue.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tablecontent;