import React from 'react';
import { DIAGNOSTIC_URL } from '../config';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-[#F7F6F1] text-[#042D29] pt-36 sm:pt-44 md:pt-48 lg:pt-52 pb-24 sm:pb-32 lg:pb-36"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Eyebrow */}
            <p className="text-[12px] sm:text-[13px] font-heading font-bold uppercase tracking-[0.2em] text-[#17665D] mb-6 sm:mb-8">
              INTERNATIONAL EXPANSION AS A SERVICE
            </p>

            {/* Large, premium and editorial H1 */}
            <h1 className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[66px] font-heading font-bold text-[#042D29] leading-[1.08] tracking-tight mb-8 sm:mb-10">
              No necesitas un VP de Internacionalización a tiempo completo. Necesitas su experiencia.
            </h1>

            {/* Subheadline */}
            <p className="text-[19px] sm:text-[22px] md:text-[24px] font-body text-[#172522]/85 leading-[1.5] max-w-3xl mb-10 sm:mb-12">
              IEaaS™ pone liderazgo ejecutivo internacional dentro de tu empresa para definir la estrategia, abrir mercados y construir la capacidad que necesitas para crecer fuera de Colombia.
            </p>

            {/* Primary CTA and Microcopy */}
            <div className="flex flex-col items-start">
              <a
                id="hero-cta-primary"
                href={DIAGNOSTIC_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-heading font-bold text-[14px] sm:text-[15px] uppercase tracking-wider px-6 sm:px-10 py-4 sm:py-0 min-h-[54px] sm:min-h-[58px] rounded-[6px] bg-[#042D29] hover:bg-[#17665D] text-white transition-colors duration-200 shadow-sm focus:ring-2 focus:ring-[#042D29] focus:outline-none whitespace-normal sm:whitespace-nowrap text-center leading-snug"
              >
                <span>EVALÚA EL POTENCIAL INTERNACIONAL DE TU EMPRESA →</span>
              </a>
              <p className="mt-4 text-[13px] sm:text-[14px] font-body text-[#60716D]">
                Diagnóstico ejecutivo. Sin compromiso.
              </p>
            </div>
          </div>

          {/* Abstract Editorial Visual Progression Element */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col justify-center">
            <div className="border border-[#042D29]/15 rounded-[8px] p-8 bg-white/70 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#042D29]/10">
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#17665D] uppercase">
                  SISTEMA DE IMPACTO
                </span>
                <span className="text-[11px] font-mono text-[#60716D]">
                  IEaaS™
                </span>
              </div>

              {/* Step 1: Senior Experience */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#17665D] uppercase tracking-wider">
                  01
                </span>
                <p className="text-[17px] font-heading font-bold text-[#042D29] tracking-tight uppercase">
                  SENIOR EXPERIENCE
                </p>
                <p className="text-[13px] font-body text-[#172522]/70 leading-relaxed">
                  Criterio ejecutivo de alto nivel y dirección estratégica
                </p>
              </div>

              {/* Visual Divider / Arrow */}
              <div className="flex items-center justify-start pl-1 text-[#17665D] text-[16px] font-mono leading-none">
                ↓
              </div>

              {/* Step 2: International Capability */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#17665D] uppercase tracking-wider">
                  02
                </span>
                <p className="text-[17px] font-heading font-bold text-[#042D29] tracking-tight uppercase">
                  INTERNATIONAL CAPABILITY
                </p>
                <p className="text-[13px] font-body text-[#172522]/70 leading-relaxed">
                  Procesos y capacidades instaladas en tu equipo
                </p>
              </div>

              {/* Visual Divider / Arrow */}
              <div className="flex items-center justify-start pl-1 text-[#17665D] text-[16px] font-mono leading-none">
                ↓
              </div>

              {/* Step 3: Market */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold text-[#17665D] uppercase tracking-wider">
                  03
                </span>
                <p className="text-[17px] font-heading font-bold text-[#042D29] tracking-tight uppercase">
                  MARKET
                </p>
                <p className="text-[13px] font-body text-[#172522]/70 leading-relaxed">
                  Apertura y tracción comercial en nuevos mercados
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


