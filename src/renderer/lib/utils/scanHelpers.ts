export interface RawScanResult {
  ip: string;
  ports: Array<{ port: number; protocol: string; service: string }>;
}

export interface ParsedScanResult {
  ip: string;
  openPorts: string[]; // e.g., ["22/tcp", "80/tcp"]
}

export function parseScanResults(raw: RawScanResult[]): ParsedScanResult[] {
  return raw.map((entry) => ({
    ip: entry.ip,
    openPorts: entry.ports.map(
      (p) => `${p.port}/${p.protocol}`
    ),
  }));
}
