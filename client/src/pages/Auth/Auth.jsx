// HomePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("accessToken")){
      navigate("/");
    }
  },[navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-opacity-90 bg-gray-800 shadow-lg">
        <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
          Admin Panel
        </h1>
        <button
          onClick={()=>navigate("/login")}
          className="px-5 py-2 bg-blue-600 cursor-pointer rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-md"
        >
          Sign In
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-300">
            Welcome!
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          This is your modern control panel. Manage all functions with ease.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700">
            <h3 className="text-2xl font-semibold text-blue-400 mb-3">Users</h3>
            <p className="text-gray-300 mb-4">User management and analysis</p>
            <button
              onClick={() => navigate('/login')}
              className="w-full cursor-pointer py-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-300"
            >
              Open
            </button>
          </div>

          {/* Card 2 */}
          <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">Settings</h3>
            <p className="text-gray-300 mb-4">System tuning and optimization</p>
            <button
              onClick={() => navigate('/login')}
              className="w-full cursor-pointer py-2 bg-indigo-600 rounded-lg group-hover:bg-indigo-700 transition-colors duration-300"
            >
              Open
            </button>
          </div>

          {/* Card 3 */}
          <div className="group bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700">
            <h3 className="text-2xl font-semibold text-purple-400 mb-3">Reports</h3>
            <p className="text-gray-300 mb-4">Analytics and statistics</p>
            <button
              onClick={() => navigate('/login')}
              className="w-full cursor-pointer py-2 bg-purple-600 rounded-lg group-hover:bg-purple-700 transition-colors duration-300"
            >
              Open
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;