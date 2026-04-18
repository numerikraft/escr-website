import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function ScrollNav() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const { pathname } = useLocation();

  const isLegalPage = ['/terms-of-use', '/privacy-policy', '/legal-notice'].includes(pathname);

  useEffect(() => {
    if (isLegalPage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Define boundaries for "Header" and "Footer"
      // Header: top 600px
      // Footer: bottom 250px
      const isInHeader = scrollY < 600;
      const isInFooter = scrollY + windowHeight > fullHeight - 250;

      if (isInHeader || isInFooter) {
        setShowScrollTop(false);
        setShowScrollBottom(false);
      } else {
        setShowScrollTop(true);
        setShowScrollBottom(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLegalPage]);

  if (isLegalPage) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  const springTransition = {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8
  };

  return (
    <div className="fixed bottom-8 left-8 z-[9999] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, x: -30, backgroundColor: '#7f2191' }}
            animate={{ opacity: 1, scale: 1, x: 0, backgroundColor: '#7f2191' }}
            exit={{ opacity: 0, scale: 0.5, x: -30, transition: { duration: 0.2 } }}
            transition={springTransition}
            whileHover={{ 
              backgroundColor: '#50298e',
              transition: { duration: 0.05 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group pointer-events-auto w-11 h-11 rounded-[0.8rem] border-2 border-white text-white flex items-center justify-center shadow-md transition-shadow active:shadow-none"
            aria-label="Scroll to top"
          >
            <ArrowUpRight 
              size={20} 
              strokeWidth={2.5} 
              className="-rotate-45 transition-transform duration-300 group-hover:-translate-y-[2px]" 
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, x: -30, backgroundColor: '#7f2191' }}
            animate={{ opacity: 1, scale: 1, x: 0, backgroundColor: '#7f2191' }}
            exit={{ opacity: 0, scale: 0.5, x: -30, transition: { duration: 0.2 } }}
            transition={springTransition}
            whileHover={{ 
              backgroundColor: '#50298e',
              transition: { duration: 0.05 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToBottom}
            className="group pointer-events-auto w-11 h-11 rounded-[0.8rem] border-2 border-white text-white flex items-center justify-center shadow-md transition-shadow active:shadow-none"
            aria-label="Scroll to bottom"
          >
            <ArrowUpRight 
              size={20} 
              strokeWidth={2.5} 
              className="rotate-[135deg] transition-transform duration-300 group-hover:translate-y-[2px]" 
            />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
