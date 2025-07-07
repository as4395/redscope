// Centralized TypeScript types used across the renderer

export interface ScanOptions {
  ports?: string;
  aggressive?: boolean;
  osDetection?: boolean;
}

export interface ScanResult {
  ip: string;
  port: number;
  protocol: string;
  service: string;
  status: string;
  reason?: string;
}

export interface SessionData {
  id: string;
  timestamp: number;
  target: string;
  results: ScanResult[];
}

export type ThemeMode = 'light' | 'dark';
