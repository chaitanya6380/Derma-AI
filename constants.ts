
import { Milestone, ScanPoint } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: "2024",
    title: "Inception + Seed",
    description: "Founded with a vision to revolutionize dermatological diagnostics through advanced AI technology.",
    imageUrl: "https://picsum.photos/400/300?random=4"
  },
  {
    id: 2,
    year: "2025",
    title: "Model Testing and External Validation",
    description: "Comprehensive testing and validation of our diagnostic models with external partners and clinical trials.",
    imageUrl: "https://picsum.photos/400/300?random=5"
  },
  {
    id: 3,
    year: "2025",
    title: "LLC Enterprise Launch",
    description: "Official launch of our enterprise platform, bringing advanced dermatological AI diagnostics to businesses worldwide.",
    imageUrl: "https://picsum.photos/400/300?random=6"
  }
];

export const SCAN_POINTS: ScanPoint[] = [
  {
    id: 1,
    progress: 0.2,
    label: "Neural Mapping",
    content: "Extracting 5,000+ unique facial landmarks for volumetric depth analysis."
  },
  {
    id: 2,
    progress: 0.45,
    label: "Epidermal Analysis",
    content: "Multispectral assessment of pigment distribution and hydration levels."
  },
  {
    id: 3,
    progress: 0.7,
    label: "Vascular Integrity",
    content: "Real-time blood flow simulation to identify sub-surface anomalies."
  },
  {
    id: 4,
    progress: 0.9,
    label: "Diagnostic Synthesis",
    content: "Aggregating data points through our proprietary Bio-Logic inference engine."
  }
];

export const COLORS = {
  primary: '#0d9488', // Teal 600
  secondary: '#0891b2', // Cyan 600
  accent: '#2dd4bf', // Teal 400
  background: '#f8fafc',
  text: '#0f172a'
};
