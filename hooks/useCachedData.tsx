import { useState, useEffect } from 'react';
import { useQueryClient } from 'react-query';

export function useCachedData<T>(key: string) {
  const [cachedData, setCachedData] = useState<T>();

  const queryClient = useQueryClient();

  useEffect(() => {
    setCachedData(queryClient.getQueryData(key));
  }, [key, queryClient]);

  return cachedData;
}
