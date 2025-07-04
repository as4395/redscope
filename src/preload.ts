import { contextBridge, ipcRenderer } from 'electron';

// Expose secure, limited API to renderer via contextBridge
contextBridge.exposeInMainWorld('electronAPI', {
  runScan: (args: any) => ipcRenderer.invoke('scan:run', args),
  getSessionData: () => ipcRenderer.invoke('session:get'),
  saveSessionData: (data: any) => ipcRenderer.invoke('session:save', data),
  onScanProgress: (callback: (event: any, data: any) => void) =>
    ipcRenderer.on('scan:progress', callback),
});
