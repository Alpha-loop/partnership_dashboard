'use client'

import { useState } from 'react';
import Navbar from '@/component/navbar';
import DashboardPage from './dashboard/page';
import TenantsPage from './tenants/page';
import SMSPage from './sms/page';
import SubscriptionPage from './subscriptions/page';

const App = () => {
  const [activeLink, setActiveLink] = useState('tenants'); // Set initial active link to 'Tenants' as per image

  const renderContent = () => {
    switch (activeLink) {
      case 'dashboard':
        return <DashboardPage />;
      case 'tenants':
        return <TenantsPage />;
      case 'sms':
        return <SMSPage />;
      case 'subscription':
        return <SubscriptionPage />;
      case 'logout':
        return <LogoutPage />;
      default:
        return <TenantsPage />; // Default to Tenants if no match
    }
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Navbar */}
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Main Content Area */}
      <main className="flex-grow bg-gray-100 overflow-auto rounded-l-lg shadow-inner">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;