import React from 'react';

export const TheCentralIdea: React.FC = () => {
  return (
    <section className="bg-[#042D29] text-white py-28 sm:py-36 lg:py-44">
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large White Headline */}
        <h2 className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[64px] font-heading font-bold text-white leading-[1.08] tracking-tight mb-10 sm:mb-14">
          No compras tiempo ejecutivo. Compras capacidad internacional.
        </h2>

        {/* Text */}
        <p className="text-[20px] sm:text-[24px] md:text-[26px] font-body text-white/85 leading-[1.55] max-w-3xl mb-12 sm:mb-16">
          El recurso que necesitas no se mide en horas. Se mide en la calidad de las decisiones que puedes tomar, la velocidad con la que puedes ejecutarlas y la capacidad de convertir una oportunidad internacional en un negocio real.
        </p>

        {/* Closing Statement */}
        <div className="pt-10 sm:pt-12 border-t border-white/15 max-w-3xl">
          <p className="text-[22px] sm:text-[26px] md:text-[28px] font-heading font-medium text-[#A9C8C0] leading-[1.4]">
            La experiencia que una empresa grande puede tener dentro de su estructura también puede estar disponible para una empresa mediana.
          </p>
        </div>

      </div>
    </section>
  );
};

