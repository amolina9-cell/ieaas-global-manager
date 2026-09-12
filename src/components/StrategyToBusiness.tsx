import React from 'react';

export const StrategyToBusiness: React.FC = () => {
  const phases = [
    {
      number: '01',
      title: 'DIRECCIÓN',
      steps: ['Estrategia', 'Mercado', 'ICP', 'Propuesta de valor'],
    },
    {
      number: '02',
      title: 'ACTIVACIÓN',
      steps: ['Canal', 'Partners / cuentas objetivo', 'Contacto', 'Reunión'],
    },
    {
      number: '03',
      title: 'CONVERSIÓN',
      steps: ['Negociación', 'Pipeline', 'Negocio'],
    },
  ];

  return (
    <section className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
            Llevamos la internacionalización hasta donde empieza la conversación comercial real.
          </h2>
          
          <div className="space-y-3 text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-[1.6]">
            <p>
              No nos detenemos en decirte dónde podrías crecer.
            </p>
            <p className="text-[#042D29] font-medium">
              Trabajamos contigo para convertir una oportunidad de mercado en una oportunidad comercial concreta.
            </p>
          </div>
        </div>

        {/* Sophisticated Business Development Flow: Three Dominant Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 pt-8 border-t border-[#042D29]/15">
          {phases.map((phase) => (
            <div key={phase.number} className="flex flex-col">
              
              {/* Dominant Phase Header */}
              <div className="pb-5 border-b border-[#042D29]/15 mb-6">
                <span className="text-[13px] font-mono font-bold tracking-widest text-[#17665D] block mb-1">
                  {phase.number}
                </span>
                <h3 className="text-[22px] sm:text-[26px] font-heading font-bold text-[#042D29] tracking-tight uppercase">
                  {phase.title}
                </h3>
              </div>

              {/* Secondary Individual Steps */}
              <ul className="space-y-3.5 font-body text-[17px] sm:text-[18px] text-[#172522]/90">
                {phase.steps.map((step) => {
                  const isFinalGoal = step === 'Negocio';
                  return (
                    <li
                      key={step}
                      className={`flex items-center py-1.5 ${
                        isFinalGoal ? 'text-[#042D29] font-bold' : ''
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-3 shrink-0 ${
                          isFinalGoal ? 'bg-[#17665D]' : 'bg-[#042D29]/30'
                        }`}
                      />
                      <span>{step}</span>
                    </li>
                  );
                })}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

