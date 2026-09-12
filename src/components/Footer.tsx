import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#032320] text-white py-12 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <span className="font-heading font-bold text-[18px] tracking-tight text-white block">
            Global Manager
          </span>
          <span className="text-[13px] font-mono text-[#A9C8C0] tracking-wider uppercase mt-0.5 block">
            IEaaS™ | International Expansion as a Service
          </span>
        </div>

        <p className="text-[13px] font-body text-white/50">
          © {new Date().getFullYear()} Global Manager. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

