import React from 'react';

export const DiagnosticDimensions: React.FC = () => {
  const dimensions = [
    {
      number: '01',
      title: 'AMBICIÓN',
      description: 'Qué quieres conseguir realmente con la internacionalización.',
    },
    {
      number: '02',
      title: 'OPORTUNIDAD',
      description: 'Qué tan clara y concreta es la oportunidad internacional que estás persiguiendo.',
    },
    {
      number: '03',
      title: 'CAPACIDAD',
      description: 'Qué tan preparada está hoy tu empresa para ejecutar una estrategia internacional.',
    },
    {
      number: '04',
      title: 'ACTIVACIÓN',
      description: 'Qué tan cerca estás de convertir la estrategia en actividad comercial real.',
    },
    {
      number: '05',
      title: 'TENSIÓN',
      description: 'Qué podría limitar o poner bajo presión el negocio si aceleras la internacionalización.',
    },
  ];

  const resolutionFlow = [
    { step: '01', label: 'SITUACIÓN ACTUAL' },
    { step: '02', label: 'RESTRICCIÓN PRINCIPAL' },
    { step: '03', label: 'PRIORIDAD' },
    { step: '04', label: 'PRÓXIMO PASO' },
  ];

  return (
    <section className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#17665D] block mb-4">
            MODELO DIAGNÓSTICO
          </span>
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight">
            El diagnóstico mira cinco dimensiones que determinan tu capacidad para internacionalizarte.
          </h2>
        </div>

        {/* Coherent Diagnostic Model: Five Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pt-8 border-t border-[#042D29]/15">
          {dimensions.map((dim) => (
            <div key={dim.number} className="flex flex-col">
              <span className="text-[13px] font-mono font-bold tracking-widest text-[#17665D] mb-4">
                {dim.number}
              </span>
              <h3 className="text-[18px] sm:text-[19px] font-heading font-bold text-[#042D29] tracking-tight mb-3">
                {dim.title}
              </h3>
              <p className="text-[16px] sm:text-[17px] font-body text-[#172522]/90 leading-relaxed">
                {dim.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Progression: SITUACIÓN ACTUAL → RESTRICCIÓN PRINCIPAL → PRIORIDAD → PRÓXIMO PASO */}
        <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-[#042D29]/15">
          <span className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#17665D] block mb-8">
            PROCESAMIENTO HACIA LA DECISIÓN
          </span>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {resolutionFlow.map((item, index) => {
              const isLast = index === resolutionFlow.length - 1;
              return (
                <div
                  key={item.label}
                  className="flex flex-col justify-between pt-5 border-t-2 border-[#042D29]/20"
                >
                  <span className="text-[12px] font-mono font-bold text-[#17665D] mb-2">
                    ETAPA {item.step}
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="text-[16px] sm:text-[17px] font-heading font-bold text-[#042D29] tracking-tight">
                      {item.label}
                    </span>
                    {!isLast && (
                      <span className="text-[#17665D] font-bold text-[18px] hidden lg:inline">
                        →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

