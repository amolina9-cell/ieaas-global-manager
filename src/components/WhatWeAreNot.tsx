import React from 'react';

export const WhatWeAreNot: React.FC = () => {
  const points = [
    'No es una consultoría que entrega recomendaciones.',
    'No es una agencia de exportación.',
    'No es simplemente un empleado externo.',
    'No es un proyecto aislado.',
  ];

  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl">
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
            IEaaS™ no es una consultoría tradicional.
          </h2>

          <div className="space-y-4 text-[18px] sm:text-[20px] font-body text-[#172522]/70 leading-relaxed mb-10">
            {points.map((point) => (
              <p key={point} className="flex items-center">
                <span className="text-[#042D29]/30 mr-3 font-mono text-[18px]">—</span>
                <span>{point}</span>
              </p>
            ))}
          </div>

          <div className="pt-8 border-t border-[#042D29]/15">
            <p className="text-[22px] sm:text-[26px] md:text-[30px] font-heading font-bold text-[#042D29] leading-snug">
              Es capacidad ejecutiva internacional integrada a tu empresa.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

