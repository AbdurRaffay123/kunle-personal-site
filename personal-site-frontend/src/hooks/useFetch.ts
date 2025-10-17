/**
 * Custom hook for data fetching with loading and error states
 */

"use client";

import { useState, useEffect, useCallback } from "react";

interface UseFetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseFetchOptions {
  skip?: boolean;
}

export function useFetch<T>(
  fetcher: () => Promise<T>,
  options?: UseFetchOptions,
): UseFetchState<T> {
  const [state, setState] = useState<{
    data: T | null;
    loading: boolean;
    error: string | null;
  }>({
    data: null,
    loading: !options?.skip,
    error: null,
  });

  const fetchData = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));
      const result = await fetcher();
      setState({ data: result, loading: false, error: null });
    } catch (err) {
      setState({
        data: null,
        loading: false,
        error: err instanceof Error ? err.message : "Unknown error",
      });
    }
  }, [fetcher]);

  useEffect(() => {
    if (options?.skip) {
      return;
    }

    fetchData();
  }, [options?.skip, fetchData]);

  return { ...state, refetch: fetchData };
}

