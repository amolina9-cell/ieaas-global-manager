import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  theme?: 'light' | 'dark' | 'warm';
  className?: string;
  titleClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  theme = 'light',
  className = '',
  titleClassName = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-[11px] sm:text-[12px] font-heading font-bold tracking-[0.2em] uppercase mb-4 ${
            isDark ? 'text-[#A9C8C0]' : 'text-[#17665D]'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-heading font-bold leading-[1.12] tracking-tight ${
          isDark ? 'text-white' : 'text-[#042D29]'
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-[16px] sm:text-[18px] md:text-[20px] font-body leading-[1.6] ${
            isDark ? 'text-white/80' : 'text-[#60716D]'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
