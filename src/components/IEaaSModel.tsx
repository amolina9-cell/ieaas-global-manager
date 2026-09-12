import React from 'react';

export const IEaaSModel: React.FC = () => {
  const stages = [
    {
      number: '01',
      title: 'EVALUAR',
      description: 'Entender la situación actual, identificar restricciones y determinar qué debería suceder primero.',
    },
    {
      number: '02',
      title: 'CONSTRUIR',
      description: 'Cerrar las capacidades, procesos y decisiones necesarias para comenzar a operar internacionalmente.',
    },
    {
      number: '03',
      title: 'OPERAR',
      description: 'Llevar la estrategia al mercado y acompañar la ejecución comercial.',
    },
    {
      number: '04',
      title: 'ESCALAR',
      description: 'Convertir lo que funciona en un sistema repetible y ampliar la operación internacional.',
    },
    {
      number: '05',
      title: 'TRANSFERIR',
      description: 'Dejar capacidades, procesos y responsabilidades instalados dentro de la empresa.',
      isTransfer: true,
    },
  ];

  return (
    <section id="como-funciona" className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
            No llegamos para quedarnos para siempre. Llegamos para construir capacidad.
          </h2>
          <p className="text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-[1.6]">
            IEaaS™ acompaña a la empresa durante el proceso que necesita para pasar de la intención internacional a una capacidad que pueda gestionar internamente.
          </p>
        </div>

        {/* Continuous Progression: Five Connected Stages */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10 pt-8 border-t border-[#042D29]/15">
          {stages.map((stage) => {
            const isTransfer = stage.isTransfer;
            return (
              <div key={stage.number} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[13px] font-mono font-bold tracking-widest ${
                        isTransfer ? 'text-[#17665D]' : 'text-[#042D29]/60'
                      }`}
                    >
                      {stage.number}
                    </span>
                    {isTransfer && (
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#17665D]/10 text-[#17665D]">
                        Autonomía
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-[18px] sm:text-[20px] font-heading font-bold text-[#042D29] tracking-tight uppercase mb-3">
                    {stage.title}
                  </h3>
                  
                  <p className="text-[15px] sm:text-[16px] font-body text-[#172522]/90 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement on Independence */}
        <div className="mt-20 sm:mt-24 pt-12 border-t border-[#042D29]/15 max-w-3xl">
          <p className="text-[20px] sm:text-[24px] font-heading font-bold text-[#042D29] leading-snug">
            Nuestro objetivo final no es que dependas de IEaaS™.
          </p>
          <p className="mt-2 text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-relaxed">
            Es que tu empresa llegue a tener la capacidad internacional para gestionarlo por sí misma.
          </p>
        </div>

      </div>
    </section>
  );
};

