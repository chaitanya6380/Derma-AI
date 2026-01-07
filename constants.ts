
import { Milestone, ScanPoint } from './types';

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    year: "2021",
    title: "Inception & Seed",
    description: "Founded by MIT researchers focusing on neural-net visual diagnostics.",
    imageUrl: "https://picsum.photos/400/300?random=1"
  },
  {
    id: 2,
    year: "2022",
    title: "Clinical Trials Phase I",
    description: "Successfully validated 99.2% accuracy across 10,000 diverse skin types.",
    imageUrl: "https://picsum.photos/400/300?random=2"
  },
  {
    id: 3,
    year: "2023",
    title: "FDA Breakthrough Status",
    description: "Granted priority review for our novel diagnostic AI software.",
    imageUrl: "https://picsum.photos/400/300?random=3"
  },
  {
    id: 4,
    year: "2024",
    title: "Global Enterprise Launch",
    description: "Deployment across 150+ medical centers in 12 countries.",
    imageUrl: "https://picsum.photos/400/300?random=4"
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
