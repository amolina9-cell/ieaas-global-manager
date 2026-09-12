import React from 'react';

export const WhatIEaaSDoes: React.FC = () => {
  const stages = [
    {
      number: '01',
      title: 'DEFINE DÓNDE COMPETIR',
      description: 'Identificamos mercados, prioridades y condiciones de entrada para concentrar los recursos donde existe una oportunidad real.',
    },
    {
      number: '02',
      title: 'PREPARA LA EMPRESA',
      description: 'Identificamos y cerramos las capacidades que deben estar listas antes de acelerar la expansión.',
    },
    {
      number: '03',
      title: 'ABRE MERCADOS',
      description: 'Convertimos la estrategia en actividad comercial: segmentos objetivo, propuesta de valor, canales, partners, cuentas objetivo y conversaciones.',
    },
    {
      number: '04',
      title: 'CONSTRUYE CAPACIDAD',
      description: 'Creamos procesos, responsabilidades, herramientas y métricas para que la internacionalización pueda seguir funcionando dentro de la empresa.',
    },
  ];

  return (
    <section id="que-obtienes" className="bg-white py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Headline */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight">
            ¿Qué hace realmente IEaaS™ dentro de tu empresa?
          </h2>
        </div>

        {/* Connected Four-Stage System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-8 border-t border-[#042D29]/15">
          {stages.map((stage) => (
            <div key={stage.number} className="flex flex-col">
              <span className="text-[13px] font-mono font-bold tracking-widest text-[#17665D] mb-4">
                {stage.number}
              </span>
              
              <h3 className="text-[17px] sm:text-[18px] font-heading font-bold text-[#042D29] tracking-tight leading-snug mb-3 uppercase">
                {stage.title}
              </h3>

              <p className="text-[16px] sm:text-[17px] font-body text-[#172522]/90 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Closing Statement */}
        <div className="mt-16 sm:mt-24 pt-10 sm:pt-12 border-t border-[#042D29]/15 max-w-3xl">
          <div className="space-y-1.5 text-[18px] sm:text-[20px] md:text-[22px] font-heading leading-[1.4] text-[#60716D]">
            <p>Estrategia sin ejecución no internacionaliza una empresa.</p>
            <p>Ejecución sin dirección tampoco.</p>
            <p className="text-[#042D29] font-bold pt-1">IEaaS™ integra ambas.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

