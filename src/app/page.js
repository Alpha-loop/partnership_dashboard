'use client'

import { useState } from 'react';
import Navbar from '@/component/navbar'; 
import DashboardPage from './dashboard/page';
import TenantsPage from './tenants/page';
import SMSPage from './sms/page';
import SubscriptionPage from './subscriptions/page';
// import LogoutPage from './logout/page'; // Assuming you have a logout page now

const App = () => {
  const [activeLink, setActiveLink] = useState('dashboard');
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);


  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    setIsNavbarOpen(false);
  }

  const openNavbar = () => setIsNavbarOpen(true);

  const renderContent = () => {
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
        return <LogoutPage {...pageProps} />;
      default:
        return <TenantsPage {...pageProps} />;
    }
  };

  return (
    <div className="flex lg:flex-row h-screen font-sans relative">

      <Navbar
        activeLink={activeLink}
        setActiveLink={handleNavLinkClick}
        isNavbarOpen={isNavbarOpen}
        closeNavbar={() => setIsNavbarOpen(false)}
      />

      {isNavbarOpen && (
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
