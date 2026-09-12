import React from 'react';
import { DIAGNOSTIC_URL } from '../config';

export const DiagnosticCTA: React.FC = () => {
  return (
    <section id="diagnostico" className="bg-[#042D29] text-white py-24 sm:py-32 lg:py-36">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <span className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#A9C8C0] block mb-5">
          IEaaS™ DIAGNÓSTICO EJECUTIVO
        </span>

        {/* Headline */}
        <h2 className="text-[34px] sm:text-[44px] md:text-[52px] font-heading font-bold text-white leading-[1.1] tracking-tight max-w-3xl mb-8">
          No necesitas otro score. Necesitas saber qué hacer primero.
        </h2>

        {/* Supporting text */}
        <div className="space-y-4 text-[18px] sm:text-[20px] font-body text-white/85 leading-[1.6] max-w-3xl mb-12 sm:mb-14">
          <p className="text-white font-medium text-[20px] sm:text-[22px]">
            Antes de internacionalizarte, descubre qué tan preparada está tu empresa.
          </p>
          <p>
            No todas las empresas necesitan lo mismo para crecer internacionalmente. Algunas necesitan definir mejor dónde competir. Otras necesitan fortalecer capacidades internas. Otras necesitan convertir una oportunidad existente en actividad comercial.
          </p>
          <p>
            El diagnóstico identifica qué está frenando hoy tu internacionalización, qué capacidades ya tienes y qué debería suceder primero.
          </p>
        </div>

        {/* Single Dominant Primary CTA */}
        <div className="pt-2 max-w-2xl">
          <a
            id="diagnostic-primary-cta"
            href={DIAGNOSTIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-heading font-bold text-[14px] sm:text-[15px] uppercase tracking-wider px-6 sm:px-10 py-3.5 sm:py-0 min-h-[54px] sm:min-h-[58px] rounded-[6px] bg-[#17665D] hover:bg-[#1E7F73] text-white transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-[#A9C8C0] focus:outline-none whitespace-normal sm:whitespace-nowrap text-center leading-snug"
          >
            HAZ EL DIAGNÓSTICO IEaaS™ →
          </a>

          <p className="mt-4 text-[14px] font-body text-white/70 leading-relaxed">
            Responde unas preguntas sobre tu empresa y recibe una lectura ejecutiva de tu nivel de preparación, principales restricciones y prioridades.
          </p>
        </div>

      </div>
    </section>
  );
};

