// Format a timestamp into HH:MM:SS
export function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString();
}

// Truncate long strings in scan results
export function truncate(text: string, maxLength: number = 50): string {
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

// Capitalize first letter of string
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
