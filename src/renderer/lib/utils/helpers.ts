// Generic utility to debounce function calls
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Convert boolean to Yes/No
export function boolToYesNo(value: boolean): string {
  return value ? 'Yes' : 'No';
}
