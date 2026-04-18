import React, { ReactNode } from 'react';

interface ShadowBoxProps {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export default React.memo(function ShadowBox({ children, className = '', style }: ShadowBoxProps) {
    return (
        <div
            className={`shadow-[0_0_25px_rgba(80,41,142,0.18)] ${className}`}
            style={style}
        >
            {children}
        </div>
    );
});
