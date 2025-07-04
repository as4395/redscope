import { ipcMain } from 'electron';
import { runScan } from './scan';
import { getSessionData, saveSessionData } from '../storage/session';

// Entry point to register all IPC handlers
export function setupIpcHandlers() {
  // Scan trigger from renderer
  ipcMain.handle('scan:run', async (_event, args) => {
    return await runScan(args);
  });

  // Session state retrieval
  ipcMain.handle('session:get', async () => {
    return await getSessionData();
  });

  // Session state saving
  ipcMain.handle('session:save', async (_event, data) => {
    return await saveSessionData(data);
  });
}
