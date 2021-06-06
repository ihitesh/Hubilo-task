import { useEffect, useState, useCallback } from "react";
import { get } from "../api/api";

const useAsyncFetch = (url, onSuccess, shouldRefetch) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await get(url);
      onSuccess(response.data);
    } catch (e) {
      setError("Error! please try again.");
    }
    setIsLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // to fetch data on load
  useEffect(() => {
    if (shouldRefetch) {
      fetchPosts();
    }
  }, [fetchPosts, shouldRefetch]);

  return [isLoading, error];
};
export default useAsyncFetch;
