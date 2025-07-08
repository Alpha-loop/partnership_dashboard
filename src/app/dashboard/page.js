const DashboardPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
    <p className="text-gray-600">Welcome to your dashboard! Here you'll find an overview of your activities.</p>
    {/* Add more dashboard content here */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Users</h3>
        <p className="text-4xl font-bold text-blue-600">12,345</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Sessions</h3>
        <p className="text-4xl font-bold text-green-600">890</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Recent Activity</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>User John Doe logged in.</li>
          <li>New tenant added: Jane Smith.</li>
          <li>SMS campaign sent.</li>
        </ul>
      </div>
    </div>
  </div>
);

export default DashboardPage