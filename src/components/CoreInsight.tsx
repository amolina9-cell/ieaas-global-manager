import React from 'react';

export const CoreInsight: React.FC = () => {
  return (
    <section className="bg-white py-24 sm:py-32 lg:py-40 border-b border-[#042D29]/5">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large Editorial Headline */}
        <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] font-heading font-bold text-[#042D29] leading-[1.14] tracking-tight max-w-4xl mx-auto">
          El tamaño de tu empresa ya no determina el nivel de experiencia internacional al que puedes acceder.
        </h2>

        {/* Supporting text */}
        <p className="mt-8 sm:mt-10 text-[19px] sm:text-[22px] md:text-[24px] font-body text-[#60716D] leading-[1.55] max-w-3xl mx-auto">
          IEaaS™ hace accesible capacidad ejecutiva internacional a empresas que todavía no necesitan, o no pueden justificar, una posición ejecutiva full time.
        </p>
      </div>
    </section>
  );
};

