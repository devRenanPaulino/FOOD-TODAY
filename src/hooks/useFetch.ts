import React from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, { signal: abortController.signal });
        
        if (!response.ok) throw new Error("Erro ao buscar dados");

        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.name === 'AbortError') {
            console.log('Fetch Abortado');
          } else {
            setError(err.message);
          }
        } else {
          setError("Ocorreu um erro desconhecido");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup: Aborta a requisição se o componente desmontar
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;