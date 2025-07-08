const SMSPage = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">SMS Management</h1>
    <p className="text-gray-600">Send and manage your SMS campaigns here.</p>
    {/* Add more SMS content here */}
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Send New SMS</h3>
      <div className="mb-4">
        <label htmlFor="recipients" className="block text-gray-700 text-sm font-bold mb-2">Recipients:</label>
        <input
          type="text"
          id="recipients"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="e.g., +1234567890, +1987654321"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        <textarea
          id="message"
          rows="5"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type your message here..."
        ></textarea>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Send SMS
      </button>
    </div>
  </div>
);

export default SMSPage;