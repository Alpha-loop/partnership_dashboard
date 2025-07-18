import { getPlanSummary } from '../services/dashboard'
import React, { useState, useEffect } from 'react';

const Tablecontent = () => {

  
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const tData = async () => {
      try {
        const response = await getPlanSummary();
        setTableData(response.data)
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError(err);
      }
    }

    tData()
  }, [])

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
          {
            tableData.map((data, index) => (
              <tbody key={index} className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {data.plan}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {data.price.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-green-600 font-medium">
                    {data.active.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-red-600 font-medium">
                    {data.inActive.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 font-medium">
                    {data.revenue.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            ))
          }
        </table>
      </div>
    </div>
  );
};

export default Tablecontent;