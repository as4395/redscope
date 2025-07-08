export const STATUS = {
  PENDING: 'pending',
  RUNNING: 'running',
  COMPLETED: 'completed',
  FAILED: 'failed',
} as const;

export type ScanStatus = (typeof STATUS)[keyof typeof STATUS];

export function getStatusLabel(status: ScanStatus): string {
  switch (status) {
    case STATUS.PENDING:
      return 'Pending';
    case STATUS.RUNNING:
      return 'Running';
    case STATUS.COMPLETED:
      return 'Completed';
    case STATUS.FAILED:
      return 'Failed';
    default:
      return 'Unknown';
  }
}
