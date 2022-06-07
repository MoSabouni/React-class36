import { useEffect, useState } from "react";

function useFetch(url, setFunction) {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFunction(data))
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, error };
}

export default useFetch;
