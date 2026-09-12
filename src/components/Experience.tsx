import React from 'react';
import portraitPath from '../assets/images/portrait_andres_molina_1789243310171.jpg';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Executive Portrait (Large portrait area) */}
          <div className="lg:col-span-5">
            <div className="rounded-[8px] overflow-hidden border border-[#042D29]/15 shadow-md bg-[#172522]">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={portraitPath}
                  alt="Andrés Molina - Liderazgo Ejecutivo Internacional IEaaS™"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-heading font-bold text-[18px] text-[#042D29]">
                Andrés Molina
              </h3>
              <p className="text-[14px] font-body text-[#172522]/70">
                Liderazgo Ejecutivo · IEaaS™
              </p>
            </div>
          </div>

          {/* Executive Biography (Strong typography, high whitespace) */}
          <div className="lg:col-span-7 pt-2">
            <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
              Experiencia internacional que normalmente no está al alcance de una empresa mediana.
            </h2>

            <div className="space-y-6 text-[18px] sm:text-[19px] font-body text-[#172522]/85 leading-[1.65]">
              <p>
                IEaaS™ está liderado por <strong className="font-semibold text-[#042D29]">Andrés Molina</strong>, ejecutivo internacional con más de 25 años de experiencia en negocios, operaciones, talento y expansión internacional.
              </p>
              <p>
                Ha ocupado posiciones ejecutivas como Vicepresidente de Operaciones Globales, Country Manager, Dirección de Negocios Internacionales y Global Head of Talent, trabajando con empresas y equipos en América Latina, Europa y Estados Unidos.
              </p>
              <p className="text-[#042D29] font-medium">
                Su experiencia combina estrategia internacional, desarrollo de mercados, liderazgo multicultural, negociación y construcción de capacidades.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

