import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          if (!result.data) {
            throw new Error(result.message ?? result);
          }

          setData(result.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
}
