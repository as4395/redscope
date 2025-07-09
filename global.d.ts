export {};

declare global {
  interface Window {
    electron: {
      invoke: <T = any>(channel: string, ...args: any[]) => Promise<T>;
      on: (channel: string, callback: (...args: any[]) => void) => void;
      off: (channel: string, callback: (...args: any[]) => void) => void;
    };
  }
}
