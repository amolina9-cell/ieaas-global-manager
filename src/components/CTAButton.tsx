import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_URL } from '../config';

interface CTAButtonProps {
  id?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'sage';
  size?: 'md' | 'lg';
  children?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  isExternal?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  id,
  href = DIAGNOSTIC_URL,
  variant = 'primary',
  size = 'lg',
  children = 'EVALÚA EL POTENCIAL INTERNACIONAL DE TU EMPRESA',
  showArrow = true,
  className = '',
  onClick,
  isExternal = true,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-heading font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap cursor-pointer select-none';

  const sizeClasses = {
    md: 'min-h-[44px] h-[46px] px-6 text-[13px] rounded-[6px]',
    lg: 'min-h-[48px] h-[52px] px-7 sm:px-8 text-[13px] sm:text-[14px] rounded-[8px]',
  };

  const variantClasses = {
    primary:
      'bg-[#17665D] hover:bg-[#2A8176] text-white border border-[#17665D] hover:border-[#2A8176] shadow-sm hover:shadow active:scale-[0.99] focus:ring-[#A9C8C0]',
    secondary:
      'bg-transparent hover:bg-[#E8F0ED] text-[#042D29] border border-[#042D29]/20 hover:border-[#042D29]/40 active:scale-[0.99] focus:ring-[#17665D]',
    dark:
      'bg-[#042D29] hover:bg-[#172522] text-white border border-[#042D29] active:scale-[0.99] focus:ring-[#A9C8C0]',
    outline:
      'bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white/60 active:scale-[0.99] focus:ring-white',
    sage:
      'bg-[#A9C8C0] hover:bg-[#b8d4cd] text-[#042D29] border border-[#A9C8C0] font-bold shadow-sm active:scale-[0.99] focus:ring-[#042D29]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    const isAnchor = href.startsWith('#');
    return (
      <a
        id={id}
        href={href}
        onClick={onClick}
        target={isExternal && !isAnchor ? '_blank' : undefined}
        rel={isExternal && !isAnchor ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
      >
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2.5 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={combinedClasses}>
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2.5 h-4 w-4 shrink-0" />}
    </button>
  );
};
