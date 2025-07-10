const LoginPage = () => {
  return (
    <div className="px-4 flex items-center justify-center h-screen bg-blue-100 sm:px-0">
      <div className="w-150">
        <h1 className="text-2xl font-black mb-6 text-gray-950">
          Welcome back!
        </h1>
        <p className="text-gray-950 mb-4">Login to your account to continue</p>
        <form>
          <div className="mb-6 py-1 border border-gray-300 rounded-md bg-slate-400">
            <p className="text-gray-600 text-sm pl-3">Email Address</p>
            <input
              type="email"
              className="w-full px-3 focus:outline-none"
              placeholder="Enter your email"
              color="text-white"
            />
          </div>
          <div className="mb-8 py-1 border border-gray-300 rounded-md bg-slate-400">
            <p className="text-gray-600 text-sm pl-3">Password</p>
            <input
              type="password"
              className="w-full px-3 focus:outline-none"
              placeholder="Enter your password"
              color="text-white"
            />
          </div>
          <button
            type="submit"
            className="w-auto bg-blue-800 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
