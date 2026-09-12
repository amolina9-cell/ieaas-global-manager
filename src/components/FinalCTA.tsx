import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DIAGNOSTIC_URL } from '../config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-[#042D29] text-white py-28 sm:py-36 lg:py-44 relative text-center">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <h2 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-heading font-bold text-white leading-[1.08] tracking-tight max-w-4xl mx-auto mb-8">
          El tamaño de tu empresa no debería limitar el nivel de experiencia con el que puedes internacionalizarte.
        </h2>

        <div className="space-y-3 text-[19px] sm:text-[22px] md:text-[24px] font-body text-white/90 leading-[1.5] max-w-2xl mx-auto mb-12">
          <p>
            Necesitas la experiencia correcta, en el momento correcto y en la medida correcta.
          </p>
          <p className="text-[#A9C8C0] text-[18px] sm:text-[20px]">
            Descubre qué necesita realmente tu empresa para hacerlo.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col items-center">
          <a
            id="final-cta-btn"
            href={DIAGNOSTIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-heading font-bold text-[14px] sm:text-[15px] uppercase tracking-wider px-9 sm:px-12 min-h-[58px] sm:min-h-[62px] rounded-[8px] bg-[#17665D] hover:bg-[#2A8176] text-white transition-all duration-200 shadow-xl hover:shadow-2xl focus:ring-2 focus:ring-[#A9C8C0] focus:outline-none whitespace-nowrap group"
          >
            <span>HAZ EL DIAGNÓSTICO IEaaS™</span>
            <ArrowRight className="ml-3 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          {/* Microcopy */}
          <p className="mt-6 text-[14px] text-white/60 font-body">
            Diagnóstico ejecutivo. Sin compromiso.
          </p>
        </div>

      </div>
    </section>
  );
};

