import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Link } from 'react-router-dom';

// Animation variants (re-used from layout logic)
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }
});

interface CheckListItem {
  name: string;
  path?: string;
}

interface CheckListProps {
  items: (string | CheckListItem)[];
  className?: string;
  itemClassName?: string;
  delayOffset?: number;
}

export const CheckList: React.FC<CheckListProps> = ({ 
  items, 
  className = "space-y-4", 
  itemClassName = "",
  delayOffset = 0.4
}) => {
  return (
    <div className={className}>
      {items.map((item, idx) => {
        const isString = typeof item === 'string';
        const name = isString ? item : (item as CheckListItem).name;
        const path = isString ? undefined : (item as CheckListItem).path;

        const Content = () => (
          <>
            <Check size={22} strokeWidth={3} className="text-[#2eb872] shrink-0" />
            <span className="text-[#50298e] group-hover:text-[#7f2191] font-medium text-[15px] transition-colors duration-300">
              {name}
            </span>
          </>
        );

        return (
          <motion.div 
            key={idx} 
            {...fadeUp(delayOffset + idx * 0.1)} 
            className={`flex items-center gap-3 group ${itemClassName}`}
          >
            {path ? (
              <Link to={path} className="flex items-center gap-3 group-hover:text-[#7f2191] group-hover:translate-x-1.5 transition-all duration-300">
                <Content />
              </Link>
            ) : (
              <Content />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
