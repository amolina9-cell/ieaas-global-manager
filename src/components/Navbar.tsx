import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_URL } from '../config';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Qué obtienes', href: '#que-obtienes' },
    { label: 'Para quién', href: '#para-quien' },
    { label: 'Experiencia', href: '#experiencia' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#042D29]/10 py-3.5 text-[#172522]'
          : 'bg-[#F7F6F1]/90 backdrop-blur-md border-b border-[#042D29]/5 py-4 sm:py-5 text-[#172522]'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <div className="flex items-center space-x-3">
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="group flex items-baseline space-x-2 focus:outline-none"
            aria-label="Global Manager IEaaS Home"
          >
            <span className="font-heading font-extrabold tracking-tight text-[18px] sm:text-[20px] text-[#042D29]">
              GLOBAL MANAGER
            </span>
            <span className="text-[#17665D] font-heading font-semibold text-[13px] tracking-wide">
              / IEaaS™
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-[14px] font-medium tracking-wide transition-colors py-1 text-[#172522]/80 hover:text-[#042D29]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary CTA (Desktop) */}
        <div className="hidden sm:flex items-center">
          <a
            id="nav-cta-desktop"
            href={DIAGNOSTIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-heading font-bold text-[12px] sm:text-[13px] tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-[6px] transition-all duration-200 focus:outline-none focus:ring-2 whitespace-nowrap bg-[#042D29] hover:bg-[#17665D] text-white shadow-sm"
          >
            <span>EVALÚA TU EMPRESA</span>
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile menu and mobile CTA */}
        <div className="flex sm:hidden items-center space-x-2">
          <a
            id="nav-cta-mobile"
            href={DIAGNOSTIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-heading font-bold text-[11px] uppercase tracking-wider px-3 py-2 rounded bg-[#042D29] text-white hover:bg-[#17665D]"
          >
            <span>DIAGNÓSTICO</span>
            <ArrowRight className="ml-1 h-3 w-3" />
          </a>

          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded focus:outline-none text-[#042D29]"
            aria-label="Abrir menú de navegación"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-[#172522] border-b border-[#042D29]/15 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-[#042D29]/10">
              <span className="font-heading font-bold text-[16px] text-[#042D29]">IEaaS™</span>
              <p className="text-[13px] text-[#60716D] mt-0.5">International Expansion as a Service</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-[16px] font-medium text-[#172522] hover:text-[#17665D] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#042D29]/10">
              <a
                href={DIAGNOSTIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center font-heading font-bold text-[13px] uppercase tracking-wider py-3 px-4 rounded bg-[#17665D] text-white hover:bg-[#2A8176]"
              >
                <span>EVALÚA EL POTENCIAL DE TU EMPRESA</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
