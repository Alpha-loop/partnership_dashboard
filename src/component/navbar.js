import React, { useState } from 'react';
import { Home, Users, MessageSquare, CreditCard, LogOut } from 'lucide-react'; // Using lucide-react for icons

// Navbar Component
const Navbar = ({ activeLink, setActiveLink }) => {
  const navLinks = [
    { name: 'Dashboard', icon: Home, path: 'dashboard' },
    { name: 'Tenants', icon: Users, path: 'tenants' },
    { name: 'SMS', icon: MessageSquare, path: 'sms' },
    { name: 'Subscription', icon: CreditCard, path: 'subscription' },
  ];

  return (
    <div className="w-90 bg-blue-800 h-screen p-4 flex flex-col rounded-r-lg shadow-lg">
      {/* User Info Section */}
      <div className="mb-8 p-4 bg-blue-800 rounded-lg shadow-md">
        <p className="text-white text-sm font-semibold">Hello,</p>
        <p className="text-blue-200 text-xs truncate">thesiepeter@churchplus.co</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name} className="mb-2">
              <button
                onClick={() => setActiveLink(link.path)}
                className={`flex items-center w-full p-3 rounded-lg text-left transition-all duration-200
                  ${activeLink === link.path ? 'bg-blue-600 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
              >
                <link.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{link.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Link */}
      <div className="mt-auto">
        <button
          onClick={() => setActiveLink('logout')}
          className={`flex items-center w-full p-3 rounded-lg text-left transition-all duration-200
            ${activeLink === 'logout' ? 'bg-blue-600 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
        >
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;