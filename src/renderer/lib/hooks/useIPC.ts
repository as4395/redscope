export const useIpc = () => {
  const invoke = async (channel: string, args?: any) => {
    try {
      return await window.electronAPI.invoke(channel, args);
    } catch (err) {
      console.error(`IPC error on channel "${channel}":`, err);
      return null;
    }
  };

  return { invoke };
};
