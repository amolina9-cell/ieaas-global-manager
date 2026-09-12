import React from 'react';

export const TheProblem: React.FC = () => {
  return (
    <section id="problema" className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
            El talento que necesitas puede estar fuera de tu presupuesto.
          </h2>
          
          <div className="space-y-4 text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-[1.6]">
            <p>
              Una empresa mediana puede tener un producto competitivo y una oportunidad real en otros mercados, pero todavía no necesita una estructura internacional completa.
            </p>
            <p>
              El problema aparece cuando necesita experiencia senior para tomar decisiones críticas, pero contratar esa experiencia a tiempo completo resulta desproporcionado para el tamaño actual del negocio.
            </p>
          </div>
        </div>

        {/* Refined Editorial Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-8 border-t border-[#042D29]/15">
          
          {/* Option 1 */}
          <div className="flex flex-col">
            <h3 className="text-[20px] sm:text-[22px] font-heading font-bold text-[#042D29] mb-6">
              Ejecutivo senior full time
            </h3>
            <ul className="space-y-3.5 font-body text-[16px] sm:text-[17px] text-[#172522]/80 leading-relaxed">
              <li>Máxima experiencia.</li>
              <li>Máxima dedicación.</li>
              <li className="text-[#8A3B34]">Costo difícil de justificar.</li>
            </ul>
          </div>

          {/* Option 2 */}
          <div className="flex flex-col">
            <h3 className="text-[20px] sm:text-[22px] font-heading font-bold text-[#042D29] mb-6">
              Perfil junior full time
            </h3>
            <ul className="space-y-3.5 font-body text-[16px] sm:text-[17px] text-[#172522]/80 leading-relaxed">
              <li>Costo más accesible.</li>
              <li>Mayor disponibilidad.</li>
              <li className="text-[#8A3B34]">Menor capacidad para decisiones críticas.</li>
            </ul>
          </div>

          {/* Option 3 */}
          <div className="flex flex-col">
            <h3 className="text-[20px] sm:text-[22px] font-heading font-bold text-[#042D29] mb-6">
              IEaaS™
            </h3>
            <ul className="space-y-3.5 font-body text-[16px] sm:text-[17px] text-[#042D29] font-medium leading-relaxed">
              <li>Experiencia ejecutiva senior.</li>
              <li>Dedicación dimensionada.</li>
              <li>Capacidad para decidir y ejecutar.</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

