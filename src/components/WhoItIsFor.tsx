import React from 'react';

export const WhoItIsFor: React.FC = () => {
  const tieneSentidoPoints = [
    'Tu negocio ya está probado en Colombia.',
    'Ves oportunidades en otros mercados, pero no tienes todavía la estructura para desarrollarlas.',
    'La dirección quiere internacionalizarse sin crear un departamento nuevo desde el principio.',
    'Necesitas experiencia senior para tomar decisiones críticas.',
    'Estás dispuesto a involucrar a tu equipo y tomar decisiones internamente.',
    'Quieres que la capacidad construida permanezca en la empresa.',
  ];

  const noEsParaTiPoints = [
    'Todavía estás validando tu negocio en Colombia.',
    'Solo necesitas un estudio de mercado.',
    'Solo buscas un distribuidor o agente comercial.',
    'Quieres que un tercero haga absolutamente todo por tu empresa.',
    'Ya tienes un equipo internacional consolidado que puede liderar el proceso.',
  ];

  return (
    <section id="para-quien" className="bg-white py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-6">
            IEaaS™ está diseñado para empresas que ya tienen algo que llevar al mundo.
          </h2>
          
          <div className="space-y-1 text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-[1.6]">
            <p>No partimos de una idea.</p>
            <p className="text-[#042D29] font-medium">Partimos de un negocio que ya funciona.</p>
          </div>
        </div>

        {/* Two Balanced Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-[#042D29]/15">
          
          {/* Positive Group */}
          <div>
            <h3 className="text-[17px] sm:text-[18px] font-heading font-bold text-[#042D29] tracking-wider uppercase mb-8 pb-4 border-b border-[#042D29]/15">
              IEaaS™ TIENE SENTIDO SI:
            </h3>

            <ul className="space-y-4 sm:space-y-4.5 text-[17px] sm:text-[18px] font-body text-[#172522]/90 leading-relaxed">
              {tieneSentidoPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="text-[#17665D] font-bold mr-3 shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Negative Group */}
          <div>
            <h3 className="text-[17px] sm:text-[18px] font-heading font-bold text-[#172522]/70 tracking-wider uppercase mb-8 pb-4 border-b border-[#042D29]/15">
              IEaaS™ NO ES PARA TI SI:
            </h3>

            <ul className="space-y-4 sm:space-y-4.5 text-[17px] sm:text-[18px] font-body text-[#172522]/75 leading-relaxed">
              {noEsParaTiPoints.map((point) => (
                <li key={point} className="flex items-start">
                  <span className="text-[#042D29]/40 font-bold mr-3 shrink-0">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

