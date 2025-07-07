import { useState, useEffect } from 'react';
import { api } from '../ipc';

interface SessionData {
  id: string;
  timestamp: string;
  target: string;
  results: any;
}

export function useSession() {
  const [sessionData, setSessionData] = useState<SessionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await api.getSession();
      setSessionData(data || []);
      setLoading(false);
    })();
  }, []);

  const saveSession = async (data: SessionData) => {
    await api.saveSession(data);
    setSessionData((prev) => [...prev, data]);
  };

  return {
    sessionData,
    saveSession,
    loading,
  };
}
