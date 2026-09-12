import React from 'react';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';
import { BRAND_CONFIG, DIAGNOSTIC_URL } from '../config';

interface PlaceholderPageProps {
  title: string;
  category: string;
  onNavigateToIEaaS: () => void;
}

export const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  category,
  onNavigateToIEaaS,
}) => {
  return (
    <div className="min-h-screen bg-[#F7F6F1] flex flex-col justify-between pt-32 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center my-auto">
        <span className="text-[11px] font-heading font-bold uppercase tracking-[0.2em] text-[#17665D] mb-4 inline-block">
          GLOBAL MANAGER · {category}
        </span>
        <h1 className="text-[36px] sm:text-[44px] font-heading font-bold text-[#042D29] tracking-tight mb-6">
          {title}
        </h1>
        <p className="text-[17px] font-body text-[#60716D] leading-relaxed mb-8">
          Esta sección está en estructuración para complementar nuestro servicio emblemático de expansión internacional.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onNavigateToIEaaS}
            className="inline-flex items-center justify-center font-heading font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-[8px] bg-[#17665D] hover:bg-[#2A8176] text-white transition-all shadow-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>CONOCE IEaaS™ (SERVICIO PRINCIPAL)</span>
          </button>

          <a
            href={DIAGNOSTIC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-heading font-bold text-[13px] uppercase tracking-wider px-6 py-3.5 rounded-[8px] bg-white border border-[#042D29]/20 text-[#042D29] hover:bg-[#E8F0ED] transition-all"
          >
            <span>EVALÚA TU EMPRESA</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="text-center text-[13px] text-[#60716D] font-mono">
        © {BRAND_CONFIG.copyrightYear} {BRAND_CONFIG.name} · IEaaS™ Flagship Service
      </div>
    </div>
  );
};
