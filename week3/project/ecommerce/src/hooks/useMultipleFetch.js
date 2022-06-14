import { useEffect, useState } from "react";

function useMultipleFetch(url, favoriteIds) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    Promise.all(favoriteIds.map((id) => fetch(`${url}${id}`)))
      .then((responses) => {
        Promise.all(responses.map((response) => response.json())).then((data) =>
          setData(data)
        );
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [favoriteIds]);

  return [data, loading, error];
}

export default useMultipleFetch;
