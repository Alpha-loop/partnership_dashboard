import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

// --- Reusable Area Chart Component ---
const AreaChartCard = ({ title, data, dataKey, xAxisKey, strokeColor, fillColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="h-64"> {/* Fixed height for the chart container */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey={xAxisKey} tickLine={false} axisLine={{ stroke: '#ccc' }} />
            <YAxis tickLine={false} axisLine={{ stroke: '#ccc' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              labelStyle={{ fontWeight: 'bold', color: '#333' }}
              itemStyle={{ color: '#555' }}
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={strokeColor}
              fill={fillColor}
              strokeWidth={2}
              activeDot={{ r: 6, stroke: strokeColor, fill: '#fff', strokeWidth: 2 }}
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px', fontSize: '14px' }}
              iconType="circle"
              formatter={(value) => <span className="text-gray-600">{value}</span>}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Reusable Bar Chart Component ---
const BarChartCard = ({ title, data, dataKey, xAxisKey, barColor }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="h-64"> {/* Fixed height for the chart container */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
            <XAxis dataKey={xAxisKey} tickLine={false} axisLine={{ stroke: '#ccc' }} />
            <YAxis tickLine={false} axisLine={{ stroke: '#ccc' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              labelStyle={{ fontWeight: 'bold', color: '#333' }}
              itemStyle={{ color: '#555' }}
            />
            <Bar
              dataKey={dataKey}
              fill={barColor}
            //   radius={[10, 10, 0, 0]} // Rounded corners for bars
              maxBarSize={70} // Max width of bars
            />
            <Legend
              wrapperStyle={{ paddingTop: '20px', fontSize: '14px' }}
              iconType="circle"
              formatter={(value) => <span className="text-gray-600">{value}</span>}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


// --- Main App Component to demonstrate usage ---
const DashboardGraph = () => {
  // Sample Data for Subscription Trend & Revenue
  const subscriptionData = [
    { name: '2025-01', 'Subscription Trend': 22, 'Revenue Trend': 15.0 },
    { name: '2025-02', 'Subscription Trend': 20, 'Revenue Trend': 14.5 },
    { name: '2025-03', 'Subscription Trend': 25, 'Revenue Trend': 17.0 },
    { name: '2025-04', 'Subscription Trend': 30, 'Revenue Trend': 20.0 },
    { name: '2025-05', 'Subscription Trend': 40, 'Revenue Trend': 25.0 },
    { name: '2025-06', 'Subscription Trend': 50, 'Revenue Trend': 30.0 },
    { name: '2025-07', 'Subscription Trend': 20, 'Revenue Trend': 15.0 },
  ];

  // Sample Data for SMS Purchase Trend & SMS Usage
  const smsData = [
    { name: '2025-01', 'SMS Purchase Trend': 750 },
    { name: '2025-02', 'SMS Purchase Trend': 50 },
    { name: '2025-03', 'SMS Purchase Trend': 300 },
    { name: '2025-04', 'SMS Purchase Trend': 350 },
    { name: '2025-05', 'SMS Purchase Trend': 100 },
    { name: '2025-06', 'SMS Purchase Trend': 80 },
    { name: '2025-07', 'SMS Purchase Trend': 250 },
  ];

  const smsUsageData = [
    { name: '2025-02', 'SMS Usage Trend': 450 },
    { name: '2025-03', 'SMS Usage Trend': 600 },
    { name: '2025-04', 'SMS Usage Trend': 650 },
    { name: '2025-05', 'SMS Usage Trend': 200 },
    { name: '2025-06', 'SMS Usage Trend': 150 },
    { name: '2025-07', 'SMS Usage Trend': 400 },
  ];


  return (
    <div className="p-8 bg-white min-h-screen font-sans pb-0">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>

      <div className="h-16 border-gray-300 w-full border-2 border-gray-400 mb-8 py-4 px-5 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Visual Analytics</h1>
      </div>
      {/* <hr className="mb-8 border-gray-300" /> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subscription Trend Chart */}
        <AreaChartCard
          title="Subscription Trend"
          data={subscriptionData}
          dataKey="Subscription Trend"
          xAxisKey="name"
          strokeColor="#6366f1" // Indigo-500
          fillColor="url(#colorSubscription)"
        />

        {/* SMS Purchase Trend Chart */}
        <BarChartCard
          title="SMS Purchase Trend"
          data={smsData}
          dataKey="SMS Purchase Trend"
          xAxisKey="name"
          barColor="#4f46e5" // Indigo-600
        />

        {/* Subscription Revenue Chart */}
        <AreaChartCard
          title="Subscription Revenue"
          data={subscriptionData}
          dataKey="Revenue Trend"
          xAxisKey="name"
          strokeColor="#6366f1" // Cyan-500
          fillColor="url(#colorRevenue)"
        />

        {/* SMS Usage Chart */}
        <BarChartCard
          title="SMS Usage"
          data={smsUsageData}
          dataKey="SMS Usage Trend"
          xAxisKey="name"
          barColor="#6366f1" // Emerald-500
        />
      </div>

      {/* Define SVG Gradients for Area Charts - Recharts requires these inside the SVG context */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="colorSubscription" x1="0" y1="0" x2="0" y2="1">
            <stop offset="100%" stopColor="#6366f1" stopOpacity={4}/>
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="100%" stopColor="#6366f1" stopOpacity={1}/>
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default DashboardGraph;