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

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-300">
      {!isDevelopersPage && <Header />}
      <div className="relative isolate min-h-screen">
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={
              <>
                <div className="relative">
                
                  <Home />
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
      {!isDevelopersPage && <div className="relative z-30">
        <Footer />
      </div>}
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
