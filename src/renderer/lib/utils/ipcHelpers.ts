import { ipcRenderer } from 'electron';

export async function invokeIPC<T = any>(channel: string, args?: any, timeout = 10000): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`IPC Timeout: ${channel}`)), timeout);

    ipcRenderer
      .invoke(channel, args)
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}
