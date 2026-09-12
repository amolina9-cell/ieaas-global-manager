import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿IEaaS™ es un VP fractional?',
      answer:
        'IEaaS™ puede incluir una dedicación ejecutiva parcial, pero no se limita a prestar tiempo de un ejecutivo. El objetivo es aportar capacidad para definir, liderar y ejecutar la internacionalización, mientras se construye capacidad dentro de la empresa.',
    },
    {
      question: '¿Cuánto tiempo trabaja IEaaS™ con mi empresa?',
      answer:
        'Depende del punto de partida y de los objetivos. El modelo está diseñado para acompañar el proceso desde la evaluación inicial hasta que la empresa desarrolla la capacidad necesaria para gestionar la internacionalización internamente.',
    },
    {
      question: '¿Qué parte ejecuta IEaaS™ y qué parte ejecuta la empresa?',
      answer:
        'IEaaS™ lidera las decisiones, estructura el proceso y acompaña la ejecución. La empresa mantiene las decisiones que requieren conocimiento interno, recursos, inversión y compromiso de la dirección. El modelo está diseñado para construir capacidad, no dependencia.',
    },
    {
      question: '¿Necesito tener un equipo internacional?',
      answer:
        'No. Precisamente una de las razones para trabajar con IEaaS™ es poder comenzar a desarrollar capacidad internacional antes de crear una estructura internacional completa.',
    },
    {
      question: '¿Qué pasa cuando mi empresa ya puede gestionar la internacionalización internamente?',
      answer:
        'Ese es el objetivo. IEaaS™ puede reducir progresivamente su intervención a medida que las capacidades, procesos y responsabilidades quedan instalados dentro de la empresa.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F7F6F1] py-24 sm:py-32 lg:py-36 border-b border-[#042D29]/5">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-14 sm:mb-16">
          <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-heading font-bold text-[#042D29] leading-[1.12] tracking-tight">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Clean Accordion (no cards around every question) */}
        <div className="border-t border-[#042D29]/15">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-[#042D29]/15 transition-colors"
              >
                <button
                  id={`faq-btn-${index}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-[18px] sm:text-[20px] font-heading font-bold text-[#042D29] pr-6 leading-snug group-hover:text-[#17665D] transition-colors">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-[#042D29]/70 group-hover:text-[#17665D] transition-transform duration-200">
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#17665D]' : ''
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-ans-${index}`}
                    className="pb-7 pr-8 text-[16px] sm:text-[17px] font-body text-[#172522]/80 leading-relaxed"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

