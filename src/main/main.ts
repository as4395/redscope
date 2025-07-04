import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { setupIpcHandlers } from './ipc';

const createWindow = async () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: path.join(__dirname, '../../public/icon.png'),
    title: 'RedScope',
  });

  if (process.env.NODE_ENV === 'development') {
    await win.loadURL('http://localhost:5173'); // Vite development server
    win.webContents.openDevTools();
  } else {
    await win.loadFile(path.join(__dirname, '../../dist/index.html'));
  }
};

// Handle app lifecycle
app.whenReady().then(() => {
  createWindow();
  setupIpcHandlers(); // Register IPC channels

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
