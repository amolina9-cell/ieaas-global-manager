import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { IEaaSPage } from './pages/IEaaSPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname;
  });

  useEffect(() => {
    // Gracefully handle /ieaas™ or /ieaas%E2%84%A2 redirect to /ieaas
    const rawPath = window.location.pathname;
    const decodedPath = decodeURIComponent(rawPath);

    if (decodedPath === '/ieaas™' || rawPath.toLowerCase().includes('ieaas%e2%84%a2')) {
      window.history.replaceState(null, '', '/ieaas');
      setCurrentPath('/ieaas');
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Determine which page to render based on route
  const renderContent = () => {
    const cleanPath = decodeURIComponent(currentPath).toLowerCase().replace(/\/+$/, '') || '/';

    if (cleanPath === '/consulting') {
      return (
        <PlaceholderPage
          title="Consultoría Estratégica Internacional"
          category="CONSULTING"
          onNavigateToIEaaS={() => navigateTo('/ieaas')}
        />
      );
    }

    if (cleanPath === '/podcast') {
      return (
        <PlaceholderPage
          title="Negocios Internacionales & Liderazgo"
          category="PODCAST"
          onNavigateToIEaaS={() => navigateTo('/ieaas')}
        />
      );
    }

    if (cleanPath === '/about') {
      return (
        <PlaceholderPage
          title="Sobre Global Manager"
          category="NOSOTROS"
          onNavigateToIEaaS={() => navigateTo('/ieaas')}
        />
      );
    }

    // Default primary flagship page: /ieaas or / or /ieaas™
    return <IEaaSPage />;
  };

  return (
    <div className="min-h-screen bg-[#F7F6F1] text-[#172522] selection:bg-[#17665D] selection:text-white flex flex-col antialiased">
      {/* Sticky Executive Navigation Bar */}
      <Navbar currentPath={currentPath} />

      {/* Main Page View */}
      <div className="flex-grow w-full">
        {renderContent()}
      </div>
    </div>
  );
}
