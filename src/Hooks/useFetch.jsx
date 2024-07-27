import { useEffect, useState } from "react";

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (api) {
      fetch(api)
        .then((res) => res.json())
        .then((data) => {
          if (data === "Not found") {
            setError("Not Found");
            setLoading(false);
            return;
          }
          console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
      return;
    }
    setError("Please provide api");
    setLoading(false);
  }, [api]);
  return { data, loading, error };
};

export default useFetch;
