import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

export interface ScanSession {
  id: string;
  target: string;
  result: string;
  timestamp: string;
}

export function useSession() {
  const [sessions, setSessions] = useState<ScanSession[]>([]);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const data = await window.electron.invoke('session:get');
      setSessions(data || []);
    } catch (err) {
      console.error('Failed to load session data:', err);
    }
  };

  const saveSession = async (session: ScanSession) => {
    try {
      const updated = [...sessions, session];
      setSessions(updated);
      await window.electron.invoke('session:save', updated);
    } catch (err) {
      console.error('Failed to save session:', err);
    }
  };

  return { sessions, saveSession };
}
