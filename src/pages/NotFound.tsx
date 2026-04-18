import React from 'react';
import { motion } from 'framer-motion';
import { NavbarButton } from '../components/Button';
import SEO from '../components/SEO';
import { ServiceParagraph, ServiceH2 } from '../components/Typography';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

export default function NotFound() {
  return (
    <div className="min-h-[60vh] sm:min-h-[85vh] flex items-center justify-center bg-white px-6 pt-12 sm:pt-24 pb-8 sm:pb-12 overflow-hidden relative">
      <SEO 
        title="404 - Page Not Found"
        description="The page you are looking for does not exist."
      />
      
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Animated 404 Number - More subtle and lowered */}
        <motion.div 
          {...fadeUp(0.1)}
          className="relative"
        >
          <span className="text-[120px] sm:text-[150px] md:text-[280px] font-bold leading-none tracking-tighter text-[#50298e]/5 select-none block">
            404
          </span>
        </motion.div>
        
        {/* Content Box - Reduced negative margin and increased spacing */}
        <div className="-mt-8 sm:-mt-14 md:-mt-24">
          <motion.div {...fadeUp(0.3)}>
            <ServiceH2 className="!text-[28px] sm:!text-[32px] md:!text-[64px] !text-[#7f2191] mb-4 sm:mb-10 max-w-5xl mx-auto">
              Page Not Found
            </ServiceH2>
          </motion.div>
          
          <motion.div {...fadeUp(0.4)} className="mb-6 sm:mb-12 max-w-xl mx-auto text-center">
            <ServiceParagraph className="text-[15px] sm:text-[17px] md:text-[19px] leading-relaxed">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </ServiceParagraph>
          </motion.div>
          
          <motion.div {...fadeUp(0.5)} className="flex justify-center">
            <NavbarButton to="/">
              Return to Homepage
            </NavbarButton>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements - Refined Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-[#7f2191]/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#50298e]/5 blur-[120px]" />
      </div>
    </div>
  );
}
