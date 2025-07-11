import Tablecontent from "@/component/table";
import Expirecontent from "@/component/expiretable";
import DashboardGraph from "@/component/graph";
import { Menu } from 'lucide-react';

const DashboardPage = ({ openNavbar }) => (
  <div className="p-8">
    <button
      onClick={openNavbar}
      className="lg:hidden fixed top-4 left-4 p-2 bg-blue-600 text-white rounded-full shadow-lg z-50"
      aria-label="Open navigation"
    >
      <Menu className="w-6 h-6" />
    </button>
    <h1 className="text-2xl font-normal text-gray-800 mb-12 md:px-6 mt-10 md:mt-0">Dashboard</h1>
    {/* Add more dashboard content here */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-6">
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">MRR</h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-bold text-gray-950">1,183,000</p>
        <p className="mt-3 text-sm font-semibold text-gray-700">ARR</p>
        <p className="text-2xl font-medium text-gray-950 text-right mt-3 mb-3">
          14,196,000
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">
            Subscription Revenue
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12">
          144,000
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">
            SMS Revenue
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12">
          2,598,102
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <div className="mb-3">
            <h3 className="text-sm font-semibold text-gray-700">
              Current Month Revenue
            </h3>
            <p className="text-sm text-gray-700 font-semibold">
              (Subscription + SMS)
            </p>
          </div>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950">2,742,102</p>
        <div className="mb-4 mt-5">
          <h3 className="text-sm font-semibold text-gray-700">
            Average Monthly Revenue
          </h3>
          <p className="text-sm text-gray-700 font-semibold">(MRR + SMS)</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-3 mb-3">
          3,781,102
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">
            Revenue per user
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12 mb-5">
          8,962
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            SMS Units Used
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950">1,348,611</p>
        <p className="mt-7 text-sm font-semibold text-gray-700">
          SMS Units Purchased
        </p>
        <p className="text-2xl font-medium text-gray-950 text-right mt-3 mb-3">
          1,298,450
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Sign Ups</h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-bold text-gray-950">58</p>
        <p className="mt-7 text-sm font-semibold text-gray-700">
          Subscriptions
        </p>
        <p className="text-2xl font-medium text-gray-950 text-right mt-1">18</p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-1xl font-semibold text-gray-700 mb-2">Tenants</h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-medium text-gray-950 text-right mt-12">
          13,857
        </p>
      </div>
      <div className="bg-gray-200 p-6 shadow-md hover:scale-105 transition-transform duration-300">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Active Tenants
          </h3>
          <p className="text-green-500 font-semibold">%</p>
        </div>
        <p className="text-2xl font-bold text-gray-950">154</p>
        <p className="mt-7 text-sm font-semibold text-gray-700">
          In-Active Tenants
        </p>
        <p className="text-2xl font-medium text-gray-950 text-right mt-1">
          673
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-30 md:px-6">
      <Tablecontent />
      <Expirecontent />
    </div>

    <DashboardGraph />
  </div>
);

export default DashboardPage;
