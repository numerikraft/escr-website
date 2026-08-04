import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, ArrowUpRight } from 'lucide-react';
import { NavbarButton } from './Button';
import ShadowBox from './ShadowBox';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ServiceParagraph, ServiceH3 } from './Typography';

import { SERVICES_DATA } from '../data/services';
import { BLOG_POSTS } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileLangOpen, setMobileLangOpen] = useState(false);
    const megaMenuRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const location = useLocation();
    const { scrollY } = useScroll();
    const latestPost = BLOG_POSTS[BLOG_POSTS.length - 1];
    const { language, setLanguage, t } = useLanguage();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 80) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close on route change
    useEffect(() => {
        setServicesOpen(false);
        setIsOpen(false);
    }, [location.pathname]);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setServicesOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setServicesOpen(false);
        }, 250);
    };

    const links = [
        { name: language === 'en' ? 'Home' : 'Accueil', path: '/' },
        { name: language === 'en' ? 'About' : 'À propos', path: '/about' },
        { name: language === 'en' ? 'Services' : 'Services', path: '/services' },
        { name: language === 'en' ? 'Blog' : 'Blog', path: '/blog' },
    ];

    return (
        <motion.nav
            aria-label="Main navigation"
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-[30px] py-[10px] sm:py-0">
                <div className="flex justify-between items-center h-16 sm:h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
                        <img src="/logo-es-cr-primary.svg" alt="ES-CR" className="h-[48px] sm:h-12 w-auto" />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-2">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '');
                            const isServices = link.path === '/services';

                            if (isServices) {
                                return (
                                    <div
                                        key={link.name}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <button
                                            className={`flex items-center gap-1 px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 ${
                                                isActive || servicesOpen
                                                    ? 'bg-[#f9effb] text-[#7f2191]'
                                                    : 'text-[#50298e] hover:bg-gray-50 hover:text-[#7f2191]'
                                            }`}
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                        >
                                            {link.name}
                                            <ChevronDown
                                                size={15}
                                                strokeWidth={2.5}
                                                className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                                            />
                                        </button>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-5 py-2 rounded-full text-[15px] font-medium transition-colors ${
                                        isActive
                                            ? 'bg-[#f9effb] text-[#7f2191]'
                                            : 'text-[#50298e] hover:bg-gray-50 hover:text-[#7f2191]'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right Action Buttons */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="relative group">
                            <button className="flex items-center gap-2 text-[15px] font-medium text-[#50298e] hover:text-[#7f2191] transition-colors py-2">
                                {language === 'en' ? (
                                    <>
                                        <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" alt="English" className="w-5 object-cover rounded-[2px]" />
                                        English
                                    </>
                                ) : (
                                    <>
                                        <img src="https://flagcdn.com/w20/fr.png" srcSet="https://flagcdn.com/w40/fr.png 2x" alt="Français" className="w-5 object-cover rounded-[2px]" />
                                        Français
                                    </>
                                )}
                                <ChevronDown size={14} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-300" />
                            </button>
                            
                            <ShadowBox className="absolute right-0 top-full mt-1 w-[140px] bg-white rounded-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                                <button 
                                    onClick={() => setLanguage('en')}
                                    className={`flex items-center gap-3 w-full px-4 py-3 text-[14px] font-medium transition-colors ${language === 'en' ? 'bg-[#f9effb] text-[#7f2191]' : 'text-[#50298e] hover:bg-[#f9effb] hover:text-[#7f2191]'}`}
                                >
                                    <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" alt="English" className="w-[18px] object-cover rounded-[2px]" />
                                    English
                                </button>
                                <button 
                                    onClick={() => setLanguage('fr')}
                                    className={`flex items-center gap-3 w-full px-4 py-3 text-[14px] font-medium transition-colors border-t border-gray-50 ${language === 'fr' ? 'bg-[#f9effb] text-[#7f2191]' : 'text-[#50298e] hover:bg-[#f9effb] hover:text-[#7f2191]'}`}
                                >
                                    <img src="https://flagcdn.com/w20/fr.png" srcSet="https://flagcdn.com/w40/fr.png 2x" alt="Français" className="w-[18px] object-cover rounded-[2px]" />
                                    Français
                                </button>
                            </ShadowBox>
                        </div>
                        <NavbarButton to="/contact">{language === 'en' ? 'Get Support' : 'Nous Contacter'}</NavbarButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-1 text-[#50298e] hover:text-[#7f2191] transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* ═══════════════════════════════════════════ */}
            {/* MEGA MENU — Full-width horizontal dropdown  */}
            {/* ═══════════════════════════════════════════ */}
            <AnimatePresence>
                {servicesOpen && (
                    <motion.div
                        ref={megaMenuRef}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-[0_30px_60px_-15px_rgba(80,41,142,0.12)] overflow-hidden z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-7xl mx-auto px-[30px] py-10">
                            <div className="hidden lg:grid grid-cols-12 gap-12">

                                {/* LEFT — Intro panel */}
                                <div className="col-span-4 flex flex-col justify-between pr-4">
                                    <div>
                                        <h3 className="text-[1.75rem] font-light text-[#50298e] leading-snug mb-4">
                                            {language === 'en' ? (
                                                <><span className="font-semibold text-[#620f78]">CRO</span> services aligned with your projects</>
                                            ) : (
                                                <>Des services <span className="font-semibold text-[#620f78]">CRO</span> alignés avec vos projets</>
                                            )}
                                        </h3>
                                        <ServiceParagraph className="leading-relaxed mb-10 opacity-80 pt-[18px]">
                                            {language === 'en' 
                                                ? 'Explore our clinical research services designed to support every phase of your project.' 
                                                : 'Découvrez nos services de recherche clinique conçus pour soutenir chaque phase de votre projet.'}
                                        </ServiceParagraph>
                                    </div>
                                    <NavbarButton to="/services" className="w-fit">
                                        {language === 'en' ? 'See our expertise' : 'Voir notre expertise'}
                                    </NavbarButton>
                                </div>

                                {/* MIDDLE — Services list */}
                                <div className="col-span-4 border-l border-[#e2dced] pl-12 flex flex-col">
                                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#7f2191] mb-6 pt-2">Expertise & Solutions</p>
                                    <div className="flex flex-col gap-2">
                                        {SERVICES_DATA.map((service) => (
                                            <Link
                                                key={service.id}
                                                to={service.path}
                                                className="group flex items-center justify-between py-1.5 transition-all duration-300"
                                            >
                                                <span className="text-[14.5px] font-medium text-[#50298e] group-hover:text-[#7f2191] transition-transform duration-300 transform group-hover:translate-x-2">
                                                    {language === 'fr' ? service.titleFr : service.title}
                                                </span>
                                                <ChevronRight size={16} strokeWidth={2} className="text-[#7f2191] opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* RIGHT — Latest Blog Post */}
                                <div className="col-span-4 border-l border-[#e2dced] pl-12 flex flex-col">
                                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#7f2191] mb-6 pt-2">
                                        {language === 'en' ? 'Latest Insight' : 'Dernière Publication'}
                                    </p>
                                    <Link to={`/blog/${latestPost.id}`} className="group flex flex-col transition-all duration-300">
                                        <div className="w-full shrink-0 rounded-[1.5rem] overflow-hidden relative h-[150px] mb-5">
                                            {/* Deep purple overlay that reveals on hover to match main blog cards */}
                                            <div className="absolute top-0 left-0 w-full h-full bg-[#6f1888] z-20 opacity-0 group-hover:opacity-20 transition-opacity duration-700 ease-[0.77,0,0.175,1] mix-blend-multiply pointer-events-none" />
                                            <img 
                                                src={latestPost.img}
                                                alt="Latest blog" 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3 px-2">
                                            <p className="text-[12px] font-medium text-[#712b8b]">{language === 'fr' && latestPost.dateFr ? latestPost.dateFr : latestPost.date}</p>
                                            <ServiceH3 className="text-[16px] !font-bold text-[#392874] leading-snug group-hover:text-[#7f2191] transition-colors duration-300 line-clamp-2 !mb-0">
                                                {language === 'fr' ? latestPost.titleFr : latestPost.title}
                                            </ServiceH3>
                                            <div className="mt-3">
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border border-[#712b8b] text-[#712b8b] group-hover:bg-[#6f1888] group-hover:text-white">
                                                    <ArrowUpRight size={20} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* Bottom accent line */}
                        <div className="h-[2px] bg-gradient-to-r from-[#7f2191] via-[#620f78] to-[#4c005a]" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-50 shadow-[0_30px_60px_-15px_rgba(80,41,142,0.15)] overflow-hidden"
                    >
                        <div className="px-4 sm:px-[30px] pt-4 pb-[30px] sm:pt-6 sm:pb-8 space-y-1">
                            {links.map((link) => {
                                const isActive = location.pathname === link.path || (link.path === '/' && location.pathname === '');
                                const isServices = link.path === '/services';

                                if (isServices) {
                                    return (
                                        <div key={link.name}>
                                            <button
                                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-full text-base font-medium transition-colors ${
                                                    isActive
                                                        ? 'bg-[#f9effb] text-[#7f2191]'
                                                        : 'text-[#50298e] hover:bg-gray-50'
                                                }`}
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    size={16}
                                                    className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                                />
                                            </button>

                                            <AnimatePresence>
                                                {mobileServicesOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 py-3 space-y-1">
                                                            {SERVICES_DATA.map((service) => (
                                                                <Link
                                                                    key={service.id}
                                                                    to={service.path}
                                                                    onClick={() => setIsOpen(false)}
                                                                    className="group flex items-center justify-between px-4 py-1.5 rounded-xl text-[#50298e] hover:bg-[#f9effb] hover:text-[#7f2191] transition-all duration-300"
                                                                >
                                                                    <span className="text-[14px] font-medium group-hover:translate-x-1 transition-transform duration-300">{language === 'fr' ? service.titleFr : service.title}</span>
                                                                    <ChevronRight size={14} strokeWidth={2.5} className="text-[#7f2191] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                                                </Link>
                                                            ))}
                                                            {/* See All Services link */}
                                                            <Link
                                                                to="/services"
                                                                onClick={() => setIsOpen(false)}
                                                                className="flex items-center gap-2 px-4 py-1.5 mt-2 text-[13px] font-bold tracking-wider uppercase text-[#7f2191] hover:text-[#620f78] transition-colors duration-300"
                                                            >
                                                                {language === 'en' ? 'See all services' : 'Voir tous les services'}
                                                                <ArrowUpRight size={14} strokeWidth={2.5} />
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-2.5 rounded-full text-base font-medium transition-colors ${
                                            isActive
                                                ? 'bg-[#f9effb] text-[#7f2191]'
                                                : 'text-[#50298e] hover:bg-gray-50'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-4 border-t border-gray-100 flex flex-col gap-8 items-start">
                                <div className="w-full">
                                    <button 
                                        onClick={() => setMobileLangOpen(!mobileLangOpen)}
                                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-full text-[15px] font-medium text-[#50298e] hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" alt="English" className="w-5 object-cover rounded-[2px]" />
                                            English
                                        </div>
                                        <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-300 ${mobileLangOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {mobileLangOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-6 py-2 flex flex-col gap-1">
                                                    <button className="flex items-center gap-3 px-4 py-2 text-[14px] font-medium text-[#50298e] hover:text-[#7f2191] transition-colors w-full text-left rounded-xl hover:bg-[#f9effb]">
                                                        <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" alt="English" className="w-[18px] object-cover rounded-[2px]" />
                                                        English
                                                    </button>
                                                    <button className="flex items-center gap-3 px-4 py-2 text-[14px] font-medium text-[#50298e] hover:text-[#7f2191] transition-colors w-full text-left rounded-xl hover:bg-[#f9effb]">
                                                        <img src="https://flagcdn.com/w20/fr.png" srcSet="https://flagcdn.com/w40/fr.png 2x" alt="Français" className="w-[18px] object-cover rounded-[2px]" />
                                                        Français
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                                <NavbarButton to="/contact" className="ml-4" height="h-[44px] sm:h-[48px]" fontSize="text-[14px] sm:text-[16px]">Get Support</NavbarButton>
                            </div>
                        </div>
                        {/* Bottom purple bar as requested */}
                        <div className="h-[4px] bg-gradient-to-r from-[#7f2191] via-[#620f78] to-[#4c005a]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
