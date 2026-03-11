import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Boxes } from './ui';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  
  // Memoize Boxes component to prevent re-renders on scroll
  const MemoizedBoxes = React.useMemo(() => <Boxes />, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const homeSections = [
    { name: 'Overview', id: 'capability' },
    { name: 'Journey & Facilities', id: 'journey' },
    { name: 'Capabilities & Quality', id: 'capabilities-grid' },
    { name: 'Impact', id: 'impact' },
    { name: 'Press Line & Precision', id: 'press-line' },
    { name: 'Leadership', id: 'leadership' },
  ];

  const scrollToHomeSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const headerOffset = 220;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const scrollTop = Math.max(0, targetTop - headerOffset);
    window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    window.history.replaceState(null, '', `/#${sectionId}`);
  };

  const handleSectionNavigate = (sectionId) => {
    setIsOpen(false);

    if (isHomePage) {
      scrollToHomeSection(sectionId);
      return;
    }

    navigate(`/#${sectionId}`);
  };
  
  
  const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
  );

  return (
    <>
      {/* Top Logo Section with Background Boxes - Not sticky */}
      <div className="relative w-full overflow-hidden bg-zinc-900 border-b border-zinc-800 h-[140px]">
        <div className="absolute inset-0 w-full h-full z-10" style={{background: '#18181b'}}>
          {MemoizedBoxes}
        </div>
        {/* Absolutely centered logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/logo.png"
            alt="VSL Manufacturing Logo"
            className="w-48 h-32 object-contain drop-shadow-lg"
            draggable="false"
          />
        </motion.div>
        {/* Paragraph below, in normal flow */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full pointer-events-none flex flex-col items-center justify-end">
          <p className="text-cyan-600 font-bold text-lg text-center mt-2 mb-0.5">
            Precision Engineering Solutions
          </p>
        </div>
        {/* Mobile Hamburger Button */}
        <button
          className="fixed top-4 right-4 z-50 flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Sticky Navigation Bar for desktop only */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled
            ? 'bg-slate-50 dark:bg-zinc-900 backdrop-blur-md shadow-md'
            : 'bg-slate-50 dark:bg-zinc-900 backdrop-blur-sm'
        } border-b border-zinc-50 dark:border-zinc-800`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <div className="flex items-center relative">
              {/* Small Logo for Mobile/Scrolled State */}
              <div className={`flex items-center transition-opacity duration-300 ${
                isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-0'
              }`}>
                <img
                  src="/logo.png"
                  alt="VSL Manufacturing Logo"
                  className="w-8 h-8 object-contain mr-2"
                  draggable="false"
                />
                <span className="font-semibold text-zinc-900 dark:font-semibold dark:text-zinc-200 hidden sm:block">Manufacturing</span>
              </div>

              {/* Navbar Buttons with Contact Form Effect */}
              <div className="absolute left-1/2 -translate-x-1/2 flex gap-4 justify-center">
                <Link
                  to="/"
                  className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  Home
                  <BottomGradient />
                </Link>
                <Link
                  to="/services"
                  className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  Services
                  <BottomGradient />
                </Link>
                <Link
                  to="/contact"
                  className="group/btn shadow-input relative flex h-10 px-6 items-center justify-center rounded-md bg-gray-50 font-medium text-black dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
                >
                  Contact
                  <BottomGradient />
                </Link>
              </div>
            </div>

            <AnimatePresence>
              {isHomePage && isScrolled && (
                <motion.div
                  className="mt-3 overflow-x-auto pb-1"
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <div className="mx-auto flex w-max items-center gap-2 rounded-lg border border-zinc-200/70 bg-white/85 px-2 py-2 shadow-sm dark:border-zinc-700/80 dark:bg-zinc-900/80">
                    {homeSections.map((section) => (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => handleSectionNavigate(section.id)}
                        className="group/btn shadow-input relative flex h-9 items-center justify-center rounded-md bg-gray-50 px-3 text-xs font-semibold text-black transition dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
                      >
                        {section.name}
                        <BottomGradient />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Side Nav (outside logo section) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 flex md:hidden"
          >
            {/* Overlay - no blur, just solid semi-transparent */}
            <div
              className="fixed inset-0"
              onClick={() => setIsOpen(false)}
            />
            {/* Side Nav - fixed at top right, full height */}
            <nav className="fixed top-0 right-0 w-64 max-w-[80vw] h-full bg-zinc-900 shadow-xl flex flex-col p-6 z-50">
              <button
                className="absolute top-4 right-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 transition"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={
                        `text-lg font-semibold text-white transition relative px-3 py-2 rounded-md ` +
                        (isActive 
                          ? 'border-2 border-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]' 
                          : 'hover:text-cyan-400')
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {isHomePage ? (
                  <div className="pt-2">
                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">Explore Home</p>
                    <div className="flex flex-col gap-2">
                      {homeSections.map((section) => (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => handleSectionNavigate(section.id)}
                          className="text-left text-sm font-medium text-zinc-100 transition hover:text-cyan-400 px-3 py-1"
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
export default Header;