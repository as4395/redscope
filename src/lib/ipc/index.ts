import { ipcRenderer } from 'electron';

// IPC scan trigger
export const runScan = async (args: any) => {
  return await ipcRenderer.invoke('scan:run', args);
};

// IPC session fetch
export const getSession = async () => {
  return await ipcRenderer.invoke('session:get');
};

// IPC session save
export const saveSession = async (data: any) => {
  return await ipcRenderer.invoke('session:save', data);
};
