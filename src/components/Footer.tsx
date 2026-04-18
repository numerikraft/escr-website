import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  // Variant for the "Rising" effect
  const riseUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, delay, ease: "easeOut" }
  });

  return (
      <footer className="pt-10 sm:pt-12 pb-[14px] overflow-hidden">
        {/* FIX: 10px outer gap to perfectly align with the Hero & "Why Choose Us" containers */}
        <div className="max-w-7xl mx-auto px-3 sm:px-[10px] font-sans flex flex-col gap-3">

          {/* --- Top Main Block --- */}
          <motion.div
              {...riseUp(0)}
              className="rounded-[1.5rem] sm:rounded-[2.5rem] relative overflow-hidden flex flex-col lg:flex-row items-stretch justify-start gap-x-2 px-5 sm:px-[30px] py-8 sm:py-16 shadow-md"
              style={{
                background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
              }}
          >
            {/* FOOTER PATTERN — Static opacity, moves with parent trigger */}
            <div
                className="absolute right-0 top-0 h-full pointer-events-none select-none z-0 overflow-hidden opacity-45 hidden sm:block"
            >
              <img
                  src="/escr-footer-pattern.png"
                  alt=""
                  className="h-full w-auto object-contain object-right-top"
              />
            </div>
 
            {/* Col 1: Left Column - Logo & Address */}
            <motion.div {...riseUp(0.2)} className="relative z-10 w-full lg:w-1/3 flex flex-col justify-between h-auto self-stretch">
              <div>
                <div>
                  <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
                    <img
                        src="/footer-logo.svg"
                        alt="ES Clinical Research — Contract Research Organization logo"
                        className="h-14 sm:h-16 w-auto object-contain object-left"
                    />
                  </Link>
                </div>
                <div className="mt-6 sm:mt-8">
                  <p className="text-white/90 text-[14px] sm:text-[15px] leading-relaxed">
                    76, Coop Mina Benhaddadi Dar Diaf<br />
                    Cheraga, Algiers
                  </p>
                </div>
              </div>

              {/* Follow Us Section - Pushed to bottom with mt-auto */}
              <div className="mt-5 lg:mt-auto flex items-center gap-4 pt-1 pb-0">
                <span className="text-white/90 text-[15px] sm:text-[16px] font-medium">Follow us on</span>
                <a href="http://linkedin.com/company/es-clinical-research" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="hover:scale-105 transition-transform duration-300 flex items-center -ml-1">
                  <img src="/linkedin-footer.svg" alt="" aria-hidden="true" className="h-[22px] w-auto" />
                </a>
              </div>
            </motion.div>

            {/* Col 2: Center Column - White Card */}
            <motion.div {...riseUp(0.3)} className="relative z-10 w-full lg:w-[35%] flex justify-start lg:-ml-10 mt-5 lg:mt-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-[#50298e] w-full lg:max-w-[340px] shadow-lg flex flex-col justify-between h-full group transition-all duration-500 hover:shadow-xl">
                <p className="text-[15px] sm:text-[17px] mb-8 sm:mb-12 leading-relaxed font-medium">
                  Expert research support, easily scheduled at your convenience
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <a href="tel:+21320339120" aria-label="Call us at +213 20 33 91 20" className="flex items-center gap-3 text-[15px] sm:text-[17.5px] tracking-wide font-medium hover:text-[#7f2191] transition-colors">
                    <Phone size={20} className="text-[#7f2191] shrink-0" aria-hidden="true" />
                    +213 20 33 91 20
                  </a>
                  <a href="mailto:contact@esclinical.com" aria-label="Email us at contact@esclinical.com" className="flex items-center gap-3 text-[14px] sm:text-[17.5px] tracking-wide font-medium hover:text-[#7f2191] transition-colors break-all sm:break-normal">
                    <Mail size={20} className="text-[#7f2191] shrink-0" aria-hidden="true" />
                    contact@esclinical.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div {...riseUp(0.4)} className="relative z-10 w-full lg:w-[30%] lg:pl-0 mt-5 lg:mt-0">
              <div className="flex flex-row gap-x-12 sm:gap-x-12">
                {/* Column 3.1: Navigate */}
                <div>
                  <h3 className="text-white/80 text-[16px] sm:text-[17px] mb-6 sm:mb-8 font-medium">Explore</h3>
                  <div className="flex flex-col space-y-4 sm:space-y-5">
                    {[
                      { label: 'Home', path: '/' },
                      { label: 'About', path: '/about' },
                      { label: 'Services', path: '/services' },
                      { label: 'Blog', path: '/blog' },
                      { label: 'Contact', path: '/contact' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="text-white font-medium text-[14px] sm:text-[15px] hover:text-white/60 transition-all hover:translate-x-1 duration-300 inline-block"
                        >
                          {item.label}
                        </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3.2: Compliance */}
                <div>
                  <h3 className="text-white/80 text-[16px] sm:text-[17px] mb-6 sm:mb-8 font-medium">Legal</h3>
                  <div className="flex flex-col space-y-4 sm:space-y-5">
                    {[
                      { label: 'Terms of Use', path: '/terms-of-use' },
                      { label: 'Privacy Policy', path: '/privacy-policy' },
                      { label: 'Legal Notice', path: '/legal-notice' }
                    ].map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="text-white font-medium text-[14px] sm:text-[15px] hover:text-white/60 transition-all hover:translate-x-1 duration-300 inline-block"
                        >
                          {item.label}
                        </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- Bottom Bar Block --- */}
          <motion.div
              {...riseUp(0)}
              className="rounded-[1.2rem] sm:rounded-[1.5rem] px-5 sm:px-[30px] py-5 sm:py-7 flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-[13px] sm:text-[14px] shadow-sm gap-5 sm:gap-0"
              style={{
                background: 'radial-gradient(circle at 0% 0%, #7f2191 0%, #4c005a 100%)'
              }}
          >
            <p className="text-white/90">
              © 2026. ES Clinical Research. All rights reserved.
            </p>
            <div className="flex items-center gap-2.5 text-white/90">
              <span className="text-[13px] sm:text-[14px]">Designed & Developed by</span>
              <a href="https://numerikraft.com/" target="_blank" rel="noopener noreferrer" aria-label="Designed & Developed by Numerikraft" className="hover:scale-105 transition-transform duration-300 flex items-center -mt-[5px]">
                <img
                    src="/Logo-NK-White.svg"
                    alt="Numerikraft digital agency logo"
                    className="h-[18px] sm:h-5 w-auto object-contain"
                />
              </a>
            </div>
          </motion.div>

        </div>
      </footer>
  );
}