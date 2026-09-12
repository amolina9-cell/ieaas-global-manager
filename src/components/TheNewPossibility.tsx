import React from 'react';

export const TheNewPossibility: React.FC = () => {
  return (
    <section className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
            Liderazgo internacional senior, dimensionado para tu empresa.
          </h2>
          
          <div className="space-y-4 text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-[1.6]">
            <p>
              IEaaS™ te permite acceder a experiencia ejecutiva internacional sin asumir el costo ni la dedicación de una posición full time.
            </p>
            <p>
              No se trata de contratar menos experiencia.
            </p>
            <p className="text-[#042D29] font-medium">
              Se trata de acceder a la experiencia que necesitas durante el tiempo que realmente necesitas.
            </p>
          </div>
        </div>

        {/* Editorial Visual Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-10 border-t border-[#042D29]/15">
          
          {/* WITHOUT IEaaS™ */}
          <div className="flex flex-col">
            <span className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#8A3B34] mb-4">
              WITHOUT IEaaS™
            </span>
            <blockquote className="text-[22px] sm:text-[26px] md:text-[30px] font-heading font-medium text-[#60716D] leading-snug">
              “No podemos permitirnos un ejecutivo internacional senior.”
            </blockquote>
          </div>

          {/* WITH IEaaS™ */}
          <div className="flex flex-col">
            <span className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#17665D] mb-4">
              WITH IEaaS™
            </span>
            <blockquote className="text-[22px] sm:text-[26px] md:text-[30px] font-heading font-bold text-[#042D29] leading-snug">
              “Podemos acceder al nivel de experiencia que necesitamos sin tener que incorporarlo full time.”
            </blockquote>
          </div>

        </div>

      </div>
    </section>
  );
};

