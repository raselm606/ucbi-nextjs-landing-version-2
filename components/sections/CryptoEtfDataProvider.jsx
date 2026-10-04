'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const CryptoEtfDataContext = createContext({
  data: null,
  error: '',
  loading: true,
});

export function useCryptoEtfData() {
  return useContext(CryptoEtfDataContext);
}

export default function CryptoEtfDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const loadData = async () => {
      try {
        const response = await fetch('/api/cryptoetf/eth', {
          signal: controller.signal,
          cache: 'no-store',
        });
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || 'ETF data is temporarily unavailable.');
        }

        setData(result);
        setError('');
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message || 'ETF data is temporarily unavailable.');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadData();
    const refreshId = window.setInterval(loadData, 5 * 60 * 1000);

    return () => {
      controller.abort();
      window.clearInterval(refreshId);
    };
  }, []);

  return (
    <CryptoEtfDataContext.Provider value={{ data, error, loading }}>
      {children}
    </CryptoEtfDataContext.Provider>
  );
}
