/* eslint-disable @next/next/no-sync-scripts */

import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import {
  getSMSUsageTrend,
  getSMSPurchaseTrend,
  getSubscriptionRevenueTrend,
  getSubscriptionTrend
} from '../services/trends'
import { useState, useEffect } from 'react'

// --- Reusable Area Chart Component ---
const AreaChartCard = ({ title, data, dataKey, xAxisKey, strokeColor, fillColor, legendText }) => {
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
              formatter={() => <span className="text-gray-600">{legendText}</span>}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Reusable Bar Chart Component ---
const BarChartCard = ({ title, data, dataKey, xAxisKey, barColor, legendText}) => {
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
              formatter={() => <span className="text-gray-600">{legendText}</span>}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


// --- Main App Component to demonstrate usage ---
const DashboardGraph = () => {
  const [ smsUsage, setSmsUsage ] = useState([]);
  const [ smsPurchase, setSmsPurchase ] = useState([]);
  const [ subscription, setSubscription ] = useState([]);
  const [ subscriptionsRevenue, setSubscriptionsRevenue ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const smsUsageData = await getSMSUsageTrend();
        setSmsUsage(smsUsageData.data);
        console.log('this is sms usage: ', smsUsageData)

        const smsPurchaseData = await getSMSPurchaseTrend();
        setSmsPurchase(smsPurchaseData.data);
        console.log('this is sms purchase: ', smsPurchaseData)

        const subscriptionData = await getSubscriptionTrend();
        setSubscription(subscriptionData.data);
        console.log('this is subscription: ', subscriptionData)

        const subscriptionsRevenueData = await getSubscriptionRevenueTrend();
        setSubscriptionsRevenue(subscriptionsRevenueData.data)
        console.log('this is subscription revenue: ', subscriptionsRevenueData)

      } catch(err) {
        console.error('Error fetching dashboard data: ', err);
        setError(err);
      }
    }

    fetchData()
  }, [])


  return (
    <div className="p-8 bg-white min-h-screen font-sans pb-0">

      <div className="h-16 border-gray-300 w-full border-2 border-gray-400 mb-8 py-4 px-5 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-900">Visual Analytics</h1>
      </div>
      {/* <hr className="mb-8 border-gray-300" /> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Subscription Trend Chart */}
        <AreaChartCard
          title="Subscription Trend"
          data={subscription}
          dataKey="value"
          xAxisKey="yearMonth"
          strokeColor="#6366f1" // Indigo-500
          fillColor="url(#colorSubscription)"
          legendText="Subscription Trend"
        />

        {/* SMS Purchase Trend Chart */}
        <BarChartCard
          title="SMS Purchase Trend"
          data={smsPurchase}
          dataKey="value"
          xAxisKey="yearMonth"
          barColor="#4f46e5" // Indigo-600
          legendText="SMS Purchase Trend"
        />

        {/* Subscription Revenue Chart */}
        <AreaChartCard
          title="Subscription Revenue"
          data={subscriptionsRevenue}
          dataKey="value"
          xAxisKey="yearMonth"
          strokeColor="#6366f1" // Cyan-500
          fillColor="url(#colorRevenue)"
          legendText="Subscription Revenue"
        />

        {/* SMS Usage Chart */}
        <BarChartCard
          title="SMS Usage"
          data={smsUsage}
          dataKey="value"
          xAxisKey="yearMonth"
          barColor="#6366f1" // Emerald-500
          legendText="SMS Usage"
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