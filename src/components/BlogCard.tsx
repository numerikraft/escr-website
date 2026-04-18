import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ServiceH3, ServiceParagraph } from './Typography';

interface BlogCardProps {
  key?: React.Key;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
  className?: string;
  variant?: 'default' | 'outline';
}

export default function BlogCard({ 
  date, 
  title, 
  description, 
  image, 
  link, 
  delay = 0,
  className = "",
  variant = 'default'
}: BlogCardProps) {
  
  // Animation variants
  const curtainReveal = (d = 0) => ({
    initial: { height: "100%" },
    whileInView: { height: "0%" },
    viewport: { once: true },
    transition: { duration: 1, ease: [0.77, 0, 0.175, 1], delay: d }
  });

  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay: d, ease: "easeOut" }
  });

  const isOutline = variant === 'outline';

  return (
    <motion.div 
      {...fadeUp(delay)} 
      className={`h-full ${className}`}
    >
      <div className={`flex flex-col sm:flex-row rounded-[1.5rem] group sm:h-[380px] ${
        isOutline ? 'bg-transparent' : 'overflow-hidden bg-white border border-transparent'
      }`}>
        {/* Image Container */}
        <div className={`w-full sm:w-[50%] h-[220px] sm:h-auto shrink-0 rounded-t-[1.5rem] sm:rounded-t-none sm:rounded-l-[1.5rem] sm:rounded-r-none overflow-hidden relative ${
          isOutline ? 'sm:my-3 mx-0 border-[4px] border-white sm:rounded-[1.5rem]' : ''
        }`}>
          <motion.div
            {...curtainReveal(delay + 0.2)}
            className="absolute top-0 left-0 w-full bg-[#6f1888] z-20 origin-top"
          />
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#6f1888]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className={`flex flex-col justify-between px-5 sm:px-8 pt-6 sm:pt-10 pb-5 sm:pb-7 flex-1 ${isOutline ? 'text-white' : ''}`}>
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className={`text-sm font-medium ${isOutline ? 'text-white/80' : 'text-[#712b8b]'}`}>{date}</p>

            <ServiceH3 className={isOutline ? 'text-white' : ''}>
              <Link
                to={link}
                className={`transition-all duration-300 ${
                  isOutline ? 'hover:text-white/80' : 'hover:text-[#7f2191]'
                }`}
              >
                {title}
              </Link>
            </ServiceH3>

            <ServiceParagraph className={`line-clamp-3 sm:line-clamp-none ${isOutline ? 'text-white/90' : ''}`}>
              {description}
            </ServiceParagraph>
          </div>

          {/* Action Button */}
          <Link
            to={link}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 border mt-4 sm:mt-0 ${
              isOutline 
                ? 'border-white text-white hover:bg-white hover:text-[#7f2191]' 
                : 'border-[#712b8b] text-[#712b8b] hover:bg-[#6f1888] hover:text-white'
            }`}
          >
            <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
