const SubscriptionPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">Subscription</h1>
    <p className="text-gray-600">Manage your subscription plans and billing information.</p>
    {/* Add more Subscription content here */}
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Current Plan</h3>
        <p className="text-gray-600 mb-2">You are currently on the <span className="font-bold text-blue-600">Premium Plan</span>.</p>
        <p className="text-gray-600 mb-4">Next billing date: <span className="font-bold">August 15, 2025</span></p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Change Plan
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h3>
        <p className="text-gray-600 mb-2">Card ending in: **** **** **** 1234</p>
        <p className="text-gray-600 mb-4">Expires: 12/27</p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Update Payment
        </button>
      </div>
    </div>
  </div>
);

export default SubscriptionPage;