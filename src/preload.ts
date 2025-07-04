import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  runScan: (options: any) => ipcRenderer.invoke('run-scan', options),
  getSessionData: () => ipcRenderer.invoke('get-session-data'),
  saveConfig: (config: any) => ipcRenderer.invoke('save-config', config),
});
