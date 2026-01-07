
export interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ScanPoint {
  id: number;
  progress: number; // 0 to 1
  label: string;
  content: string;
}
