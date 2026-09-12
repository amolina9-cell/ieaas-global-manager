import React from 'react';

export const DiagnosticReportMockup: React.FC = () => {
  const outputs = [
    {
      step: '01',
      title: 'Principal Restricción',
      description: 'Identifica con exactitud qué factor o cuello de botella está limitando hoy la expansión de tu empresa.',
    },
    {
      step: '02',
      title: 'Por Qué Importa',
      description: 'Explica la implicación estratégica y económica de actuar antes de resolver dicha limitación.',
    },
    {
      step: '03',
      title: 'Qué Debería Suceder Primero',
      description: 'Determina la condición previa indispensable que debe quedar resuelta antes de acelerar o comprometer capital.',
    },
    {
      step: '04',
      title: 'Secuencia a 12 Meses',
      description: 'Establece una hoja de ruta ordenada con prioridades claras para guiar la ejecución de tu equipo.',
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Editorial Section */}
          <div className="lg:col-span-6">
            <span className="text-[12px] font-heading font-bold uppercase tracking-[0.2em] text-[#17665D] block mb-4">
              ENTREGABLE ESTRATÉGICO
            </span>

            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight mb-8">
              Una respuesta que puedas utilizar para decidir.
            </h2>

            <div className="space-y-4 text-[18px] sm:text-[20px] font-body text-[#172522]/80 leading-[1.6]">
              <p className="text-[#042D29] font-medium text-[20px] sm:text-[22px]">
                El diagnóstico no termina con una puntuación.
              </p>
              <p>
                Identifica la principal restricción, explica por qué importa, determina qué debería suceder primero y establece una secuencia de prioridades para los próximos 12 meses.
              </p>
            </div>
          </div>

          {/* Right Editorial Deliverable Schematic */}
          <div className="lg:col-span-6 bg-[#F7F6F1] p-8 sm:p-10 rounded-[8px] border border-[#042D29]/15">
            <div className="pb-5 border-b border-[#042D29]/15 mb-6 flex items-center justify-between">
              <span className="text-[12px] font-heading font-bold uppercase tracking-wider text-[#042D29]">
                ESTRUCTURA DE LA LECTURA EJECUTIVA
              </span>
              <span className="text-[11px] font-mono text-[#17665D] uppercase tracking-wider">
                DOCUMENTO DE DECISIÓN
              </span>
            </div>

            <div className="space-y-6">
              {outputs.map((item) => (
                <div key={item.step} className="pb-6 border-b border-[#042D29]/10 last:border-b-0 last:pb-0">
                  <div className="flex items-baseline space-x-3 mb-1.5">
                    <span className="text-[12px] font-mono font-bold text-[#17665D]">
                      {item.step}
                    </span>
                    <h3 className="text-[17px] sm:text-[18px] font-heading font-bold text-[#042D29]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[15px] sm:text-[16px] font-body text-[#172522]/85 leading-relaxed pl-7">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

