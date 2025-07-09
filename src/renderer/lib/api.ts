// src/renderer/lib/api.ts

/**
 * Abstraction layer over Electron IPC for clean usage in frontend components.
 */

export const runScan = async (args: { target: string; options?: string[] }) => {
  return await window.electron.invoke('scan:run', args);
};

export const getSession = async () => {
  return await window.electron.invoke('session:get');
};

export const saveSession = async (data: any) => {
  return await window.electron.invoke('session:save', data);
};
