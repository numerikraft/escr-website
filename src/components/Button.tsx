import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface BaseButtonProps {
    children: ReactNode;
    to?: string;
    className?: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline' | 'inverse';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    showIcon?: boolean;
    sweepWidth?: string;
    sweepDuration?: string;
    height?: string;
    fontSize?: string;
    textRollHeight?: string;
    iconSize?: number;
    iconContainerSize?: string;
}

function BaseButton({
                         children,
                         to,
                         className = '',
                         onClick,
                         variant = 'primary',
                         type = 'button',
                         disabled = false,
                         showIcon = true,
                         sweepWidth = 'w-[50%]',
                         sweepDuration = 'duration-700',
                         height = 'h-[60px]',
                         fontSize = 'text-[17px]',
                         textRollHeight = 'h-[26px]',
                         iconSize = 16,
                         iconContainerSize = 'w-8 h-8',
                     }: BaseButtonProps) {
    const isOutline = variant === 'outline';
    const isInverse = variant === 'inverse';

    const baseClass = `group relative overflow-hidden inline-flex items-center gap-3 pl-6 ${showIcon ? 'pr-2' : 'pr-6'} ${height} rounded-full transition-colors duration-300 cursor-pointer ${
        isOutline
            ? 'bg-white text-primary border border-primary'
            : isInverse
                ? 'bg-transparent border border-white text-white hover:bg-white hover:text-primary'
                : 'text-white'
    } ${className}`;

    const gradientStyle = (!isOutline && !isInverse)
        ? { background: 'radial-gradient(circle at 0% 0%, rgb(127, 33, 145) 0%, rgb(76, 0, 90) 100%)' } 
        : undefined;

    const content = (
        <>
            {/* LIGHT SWEEP */}
            <span className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        <span className={`absolute top-0 left-[-75%] h-full ${sweepWidth} bg-white/20 skew-x-[-20deg] transition-all ${sweepDuration} group-hover:left-[130%]`} />
      </span>

            {/* TEXT ROLL */}
            <span className={`relative ${textRollHeight} overflow-hidden`}>
        <span className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-1/2">
          <span className={`font-medium ${fontSize} ${textRollHeight} flex items-center`}>
            {children}
          </span>
          <span className={`font-medium ${fontSize} ${textRollHeight} flex items-center`}>
            {children}
          </span>
        </span>
      </span>

            {/* ICON */}
            {showIcon && (
                <div
                    className={`${iconContainerSize} rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOutline 
                            ? 'bg-primary text-white' 
                            : isInverse
                                ? 'bg-white text-primary group-hover:bg-primary group-hover:text-white'
                                : 'bg-white text-primary'
                    }`}
                >
                    <ArrowUpRight size={iconSize} strokeWidth={2.5} />
                </div>
            )}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={baseClass} style={gradientStyle}>
                {content}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={baseClass}
            style={gradientStyle}
        >
            {content}
        </button>
    );
}

// 1. General Button (Standard)
export function GeneralButton(props: BaseButtonProps) {
    const { iconSize = 22, iconContainerSize = 'w-11 h-11', ...rest } = props;
    return <BaseButton iconSize={iconSize} iconContainerSize={iconContainerSize} {...rest} />;
}

// 2. Contact Button (No arrow, special sweep)
export function ContactButton(props: BaseButtonProps) {
    const { showIcon = false, sweepWidth = 'w-[10%]', sweepDuration = 'duration-[1500ms]', ...rest } = props;
    return (
        <BaseButton
            showIcon={showIcon}
            sweepWidth={sweepWidth}
            sweepDuration={sweepDuration}
            {...rest}
        />
    );
}

// 3. Navbar Button (Smaller)
export function NavbarButton(props: BaseButtonProps) {
    const {
        height = 'h-[48px]',
        fontSize = 'text-[16px]',
        textRollHeight = 'h-[20px]',
        iconSize = 18,
        iconContainerSize = 'w-9 h-9',
        sweepWidth = 'w-[20%]',
        sweepDuration = 'duration-1000',
        className = '',
        ...rest
    } = props;

    return (
        <BaseButton
            height={height}
            fontSize={fontSize}
            textRollHeight={textRollHeight}
            iconSize={iconSize}
            iconContainerSize={iconContainerSize}
            sweepWidth={sweepWidth}
            sweepDuration={sweepDuration}
            className={`shadow-md ${className}`}
            {...rest}
        />
    );
}

// Default export for backward compatibility or general use
export default GeneralButton;