export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ComparisonTier {
  id: string;
  title: string;
  subtitle?: string;
  points: string[];
  isHighlighted?: boolean;
}

export interface CapabilityArea {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
}

export interface DiagnosticDimension {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface DifferentiatorColumn {
  title: string;
  description: string;
}
