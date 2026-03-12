import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import PowerPressPage from './pages/PowerPressPage';
import LazercuttingPage from './pages/LazercuttingPage';
import { DevelopersPage } from './pages/DevelopersPage';

const AppContent = () => {
  const location = useLocation();
  const isDevelopersPage = location.pathname === '/developers';
  // --- LIFTED STATE ---
  const [introUnlocked, setIntroUnlocked] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    // Keep in sync with Home.jsx logic
    const HOME_INTRO_SEEN_KEY = 'vsl_home_intro_seen';
    let hasProcessedIntroNavigation = false;
    function isReloadNavigation() {
      if (typeof window === 'undefined') return false;
      const navigationEntry = window.performance.getEntriesByType('navigation')[0];
      if (navigationEntry && navigationEntry.type) {
        return navigationEntry.type === 'reload';
      }
      return window.performance.navigation && window.performance.navigation.type === 1;
    }
    if (!hasProcessedIntroNavigation) {
      hasProcessedIntroNavigation = true;
      if (isReloadNavigation()) {
        window.sessionStorage.removeItem(HOME_INTRO_SEEN_KEY);
        return false;
      }
    }
    return window.sessionStorage.getItem(HOME_INTRO_SEEN_KEY) === 'true';
  });

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      {!isDevelopersPage && <Header />}
      <div className="relative isolate min-h-screen">
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <div className="relative">
                  <Home introUnlocked={introUnlocked} setIntroUnlocked={setIntroUnlocked} />
                </div>
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/powerpress" element={<PowerPressPage />} />
            <Route path="/lazercutting" element={<LazercuttingPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
          </Routes>
        </main>
      </div>
      {/* Only show Footer if introUnlocked is true and not on developers page */}
      {!isDevelopersPage && introUnlocked && (
        <div className="relative z-30">
          <Footer />
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
