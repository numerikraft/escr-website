import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const ServiceParagraph: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const hasColor = /(?:^|\s)(?:[a-z0-9]+:)?text-(\[#|white|black|primary|secondary)/.test(className);
  const hasSize = /(?:^|\s)(?:[a-z0-9]+:)?text-(sm|base|lg|xl|\[\d*\.?\d+)/.test(className);
  return (
    <p className={`${!hasColor ? 'text-[#50298e]' : ''} ${!hasSize ? 'text-[16.5px]' : ''} leading-[1.5] font-normal ${className}`}>
      {children}
    </p>
  );
};

export const ServiceH2: React.FC<TypographyProps> = ({ children, className = "" }) => {
    const hasColor = /(?:^|\s)(?:[a-z0-9]+:)?text-(\[#|white|black|primary|secondary)/.test(className);
    const hasSize = /(?:^|\s)(?:[a-z0-9]+:)?text-(sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|\[\d+)/.test(className);
    return (
        <h2 className={`${!hasColor ? 'text-[#7f2191]' : ''} ${!hasSize ? 'text-[28px] md:text-[42px]' : ''} font-normal leading-[1.15] tracking-tight ${className}`}>
            {children}
        </h2>
    );
};

export const ServiceH3: React.FC<TypographyProps> = ({ children, className = "" }) => {
  const hasColor = /(?:^|\s)(?:[a-z0-9]+:)?text-(\[#|white|black|primary|secondary)/.test(className);
  const hasSize = /(?:^|\s)(?:[a-z0-9]+:)?text-(sm|base|lg|xl|2xl|\[\d+)/.test(className);
  return (
    <h3 className={`${!hasColor ? 'text-[#50298e]' : ''} ${!hasSize ? 'text-[18px]' : ''} font-semibold mb-3 leading-snug ${className}`}>
      {children}
    </h3>
  );
};
