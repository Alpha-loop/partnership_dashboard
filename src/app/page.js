'use client'

import { useState } from 'react';
import Navbar from '@/component/navbar'; 
import DashboardPage from './dashboard/page';
import TenantsPage from './tenants/page';
import SMSPage from './sms/page';
import SubscriptionPage from './subscriptions/page';
import LoginPage from './login/page'
// import LogoutPage from './logout/page'; // Assuming you have a logout page now

const App = () => {
  const [activeLink, setActiveLink] = useState('login'); // Default to login
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsNavbarOpen(false);
  }

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setActiveLink('dashboard'); // Set default page to dashboard after successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setActiveLink('login'); // Set active link to login
    // Clear authentication data (replace with your actual logic)
    document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'; // Example: Clear auth cookie
  };

  const openNavbar = () => setIsNavbarOpen(true);

  const renderContent = () => {
    const pageProps = { openNavbar };

    if (!isLoggedIn) {
      return <LoginPage onLoginSuccess={handleLoginSuccess} />;
    }

    switch (activeLink) {
      case 'dashboard':
        return <DashboardPage {...pageProps} />;
      case 'tenants':
        return <TenantsPage {...pageProps} />;
      case 'sms':
        return <SMSPage {...pageProps} />;
      case 'subscription':
        return <SubscriptionPage {...pageProps} />;
      default:
        return <DashboardPage {...pageProps} />;
    }
  };
  

  return (
    <div className="flex lg:flex-row h-screen font-sans relative">
      {isLoggedIn && (
        <Navbar
          activeLink={activeLink}
          setActiveLink={handleNavLinkClick}
          isNavbarOpen={isNavbarOpen}
          closeNavbar={() => setIsNavbarOpen(false)}
          onLogout={handleLogout}
        />
      )}

      {isLoggedIn && isNavbarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsNavbarOpen(false)}
        ></div>
      )}

      <main className="flex-grow w-full bg-white overflow-auto rounded-l-lg shadow-inner">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
