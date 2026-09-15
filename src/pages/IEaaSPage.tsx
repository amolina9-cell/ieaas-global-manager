import React from 'react';
import { Hero } from '../components/Hero';
import { CoreInsight } from '../components/CoreInsight';
import { TheProblem } from '../components/TheProblem';
import { TheCentralIdea } from '../components/TheCentralIdea';
import { TheNewPossibility } from '../components/TheNewPossibility';
import { WhatIsIEaaS } from '../components/WhatIsIEaaS';
import { WhatIEaaSDoes } from '../components/WhatIEaaSDoes';
import { StrategyToBusiness } from '../components/StrategyToBusiness';
import { DiagnosticCTA } from '../components/DiagnosticCTA';
import { DiagnosticDimensions } from '../components/DiagnosticDimensions';
import { DiagnosticReportMockup } from '../components/DiagnosticReportMockup';
import { IEaaSModel } from '../components/IEaaSModel';
import { WhoItIsFor } from '../components/WhoItIsFor';
import { Experience } from '../components/Experience';
import { WhatWeAreNot } from '../components/WhatWeAreNot';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { Contact } from '../components/Contact';

export const IEaaSPage: React.FC = () => {
  return (
    <main id="ieaas-main-content" className="w-full">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: CORE INSIGHT */}
      <CoreInsight />

      {/* SECTION 3: THE PROBLEM */}
      <TheProblem />

      {/* SECTION 4: THE CENTRAL IDEA */}
      <TheCentralIdea />

      {/* SECTION 5: THE NEW POSSIBILITY */}
      <TheNewPossibility />

      {/* SECTION 6: WHAT IS IEaaS */}
      <WhatIsIEaaS />

      {/* SECTION 7: WHAT IEaaS DOES */}
      <WhatIEaaSDoes />

      {/* SECTION 8: STRATEGY TO BUSINESS */}
      <StrategyToBusiness />

      {/* SECTION 9: DIAGNOSTIC CTA */}
      <DiagnosticCTA />

      {/* SECTION 10: WHAT THE DIAGNOSTIC ANALYZES */}
      <DiagnosticDimensions />

      {/* SECTION 11: DIAGNOSTIC REPORT */}
      <DiagnosticReportMockup />

      {/* SECTION 12: THE IEaaS MODEL */}
      <IEaaSModel />

      {/* SECTION 13: WHO IT IS FOR */}
      <WhoItIsFor />

      {/* SECTION 14: EXPERIENCE */}
      <Experience />

      {/* SECTION 15: WHAT WE ARE NOT */}
      <WhatWeAreNot />

      {/* SECTION 16: FAQ */}
      <FAQ />

      {/* SECTION 17: FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
};
