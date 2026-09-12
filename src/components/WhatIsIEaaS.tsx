import React from 'react';

export const WhatIsIEaaS: React.FC = () => {
  return (
    <section id="que-es" className="bg-white py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
            La experiencia de un VP. Sin contratarlo a tiempo completo.
          </h2>

          <p className="text-[19px] sm:text-[22px] font-body text-[#172522]/85 leading-[1.6] max-w-3xl">
            IEaaS™ es un servicio de liderazgo ejecutivo internacional para empresas que quieren crecer fuera de Colombia y necesitan más capacidad de la que hoy tienen internamente.
          </p>
        </div>

        {/* Visually prominent integrated capability statement */}
        <div className="py-10 sm:py-12 my-10 sm:my-14 border-y border-[#042D29]/15 max-w-4xl">
          <p className="text-[22px] sm:text-[28px] md:text-[32px] font-heading font-semibold text-[#042D29] leading-[1.3]">
            Integramos <span className="text-[#17665D] font-bold">experiencia senior + estrategia + ejecución</span> dentro de la empresa para liderar el proceso internacional desde la definición de la estrategia hasta la activación de mercados y la construcción de capacidad interna.
          </p>
        </div>

        {/* Subtle, secondary distinction at the bottom */}
        <div className="max-w-3xl pt-2">
          <div className="space-y-3 text-[16px] sm:text-[17px] font-body text-[#60716D] leading-relaxed">
            <p>No somos una consultoría que entrega un informe.</p>
            <p>No somos un agente de exportación que busca clientes.</p>
            <p className="text-[#042D29] font-medium pt-1">Entramos a liderar el proceso contigo.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

