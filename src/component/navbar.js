'use client'; // Important for client-side interactivity

import React from 'react';
import { Home, Users, MessageSquare, CreditCard, LogOut, X } from 'lucide-react'; // Added X for close icon

// Navbar Component
const Navbar = ({ activeLink, setActiveLink, isNavbarOpen, closeNavbar }) => {
  const navLinks = [
    { name: 'Dashboard', icon: Home, path: 'dashboard' },
    { name: 'Tenants', icon: Users, path: 'tenants' },
    { name: 'SMS', icon: MessageSquare, path: 'sms' },
    { name: 'Subscription', icon: CreditCard, path: 'subscription' },
  ];

  return (
    <div
      className={`
        w-76 md:w-96 bg-blue-700 h-screen p-4 flex flex-col shadow-lg
        transition-transform duration-300 ease-in-out z-50 // Smooth animation and high z-index

        // Mobile styles: fixed, initially off-screen, no right border radius
        fixed top-0 left-0
        ${isNavbarOpen ? 'translate-x-0 rounded-r-lg' : '-translate-x-full rounded-r-none'}

        // Desktop styles: block, relative, always visible, rounded right corners
        lg:block lg:relative lg:translate-x-0 lg:rounded-r-lg
      `}
    >
      {/* Close button for mobile view - only visible on small screens when navbar is open */}
      <button
        onClick={closeNavbar}
        className="lg:hidden absolute top-4 right-4 p-2 text-white bg-blue-600 rounded-full shadow-md"
        aria-label="Close navigation"
      >
        <X className="w-5 h-5" />
      </button>

      {/* User Info Section */}
      {/* Added mt-10 for mobile to avoid overlap with close button */}
      <div className="mb-8 p-4 bg-blue-800 rounded-lg flex items-center gap-3 mt-5">
        <div className="w-12 h-12 rounded-full border-2 border-white"></div>
        <div>
          <p className="text-white text-sm font-semibold">Hello,</p>
          <p className="text-blue-200 text-xs truncate">thesiepeter@churchplus.co</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow mt-10">
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
      <div className="mt-50">
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



// import React, { useState } from 'react';
// import { Home, Users, MessageSquare, CreditCard, LogOut, Menu } from 'lucide-react';

// const Navbar = ({ activeLink, setActiveLink, isMobileOpen, toggleMobileNav }) => {
//   const navLinks = [
//     { name: 'Dashboard', icon: Home, path: 'dashboard' },
//     { name: 'Tenants', icon: Users, path: 'tenants' },
//     { name: 'SMS', icon: MessageSquare, path: 'sms' },
//     { name: 'Subscription', icon: CreditCard, path: 'subscription' },
//   ];

//   return (
//     <div className={`fixed lg:relative z-50 w-80 bg-blue-800 h-screen flex flex-col rounded-r-lg shadow-lg text-white transition-all duration-300
//       ${isMobileOpen ? 'left-0' : '-left-64'} lg:left-0`}>
//       {/* Mobile close button (only visible on mobile) */}
//       {/* <button 
//         onClick={toggleMobileNav}
//         className="lg:hidden absolute right-4 top-4 p-2 rounded-full hover:bg-blue-700"
//       >
//         <Menu className="w-6 h-6" />
//       </button> */}

//       {/* User Info Section */}
//       <div className="mb-8 p-4 bg-blue-800 rounded-lg flex items-center gap-3 mt-5">
//         <div className="w-12 h-12 rounded-full border-2 border-white"></div>
//         <div>
//           <p className="text-white text-sm font-semibold">Hello,</p>
//           <p className="text-blue-200 text-xs truncate">thesiepeter@churchplus.co</p>
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-grow">
//         <ul>
//           {navLinks.map((link) => (
//             <li key={link.name} className="mb-2 px-7">
//               <button
//                 onClick={() => setActiveLink(link.path)}
//                 className={`flex items-center w-full p-3 rounded-4xl text-left transition-all duration-200
//                   ${activeLink === link.path ? 'bg-blue-600 text-white shadow-inner font-bold' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
//               >
//                 <link.icon className="w-5 h-5 mr-5" />
//                 <span className="font-medium">{link.name}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Logout Link */}
//       <div className="mt-10">
//         <button
//           onClick={() => setActiveLink('logout')}
//           className={`flex items-center w-full p-3 rounded-lg text-left transition-all duration-200
//             ${activeLink === 'logout' ? 'bg-blue-600 text-white shadow-inner' : 'text-blue-200 hover:bg-blue-600 hover:text-white'}`}
//         >
//           <LogOut className="w-5 h-5 mr-3" />
//           <span className="font-medium">Logout</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;