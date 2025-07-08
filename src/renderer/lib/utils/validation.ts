export function isValidIPAddress(ip: string): boolean {
  const ipv4Regex =
    /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
  return ipv4Regex.test(ip);
}

export function isValidPortRange(range: string): boolean {
  return /^(\d{1,5})(-(\d{1,5}))?$/.test(range);
}

export function isNonEmpty(input: string): boolean {
  return input.trim().length > 0;
}
