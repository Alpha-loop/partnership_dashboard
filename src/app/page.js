'use client'

import { useState } from 'react';
import Navbar from '@/component/navbar'; // Assuming this path is correct
import DashboardPage from './dashboard/page';
import TenantsPage from './tenants/page';
import SMSPage from './sms/page';
import SubscriptionPage from './subscriptions/page';
// import LogoutPage from './logout/page'; // Assuming you have a logout page now

const App = () => {
  const [activeLink, setActiveLink] = useState('dashboard'); // Set initial active link
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // State to control navbar visibility

  // Function to close navbar and set active link
  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsNavbarOpen(false); // Close navbar on link click (important for mobile)
  };

  // Function to open navbar (passed to page components)
  const openNavbar = () => setIsNavbarOpen(true);

  const renderContent = () => {
    // Pass the openNavbar function to each page component
    const pageProps = { openNavbar: openNavbar };

    switch (activeLink) {
      case 'dashboard':
        return <DashboardPage {...pageProps} />;
      case 'tenants':
        return <TenantsPage {...pageProps} />;
      case 'sms':
        return <SMSPage {...pageProps} />;
      case 'subscription':
        return <SubscriptionPage {...pageProps} />;
      case 'logout':
        return <LogoutPage {...pageProps} />; // Ensure LogoutPage also receives openNavbar if needed
      default:
        return <TenantsPage {...pageProps} />; // Default to Tenants if no match
    }
  };

  return (
    // The main container. On desktop (lg), it's a flex container.
    // On mobile, the main content takes full width, and navbar is an overlay.
    <div className="flex lg:flex-row h-screen font-sans relative">
      {/* Tailwind CSS CDN - Remove this if you have Tailwind setup properly in Next.js */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Navbar - Hidden by default on mobile, slides in when toggled */}
      <Navbar
        activeLink={activeLink}
        setActiveLink={handleNavLinkClick}
        isNavbarOpen={isNavbarOpen}
        closeNavbar={() => setIsNavbarOpen(false)}
      />

      {/* Overlay for mobile view when navbar is open */}
      {isNavbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsNavbarOpen(false)} // Close navbar when clicking overlay
        ></div>
      )}

      {/* Main Content Area */}
      {/* On desktop (lg), it takes remaining space. On mobile, it takes full width. */}
      <main className="flex-grow w-full bg-white overflow-auto rounded-l-lg shadow-inner">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
