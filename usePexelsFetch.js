import { useState, useEffect } from 'react';

const PEXELS_API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

function usePexelsFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!PEXELS_API_KEY) {
        setError(
          'Pexels API key is missing. Please add it to your .env file as REACT_APP_PEXELS_API_KEY.'
        );
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.photos);
      } catch (e) {
        setError(e.message);
        console.error('Error fetching data from Pexels:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-run the effect if the URL changes

  return { data, loading, error };
}

export default usePexelsFetch;