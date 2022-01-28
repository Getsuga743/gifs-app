import { useState, useEffect } from 'react';
import { getSingleGif } from '../services/getSingleGif';
import useGifs from './useGifs';

export default function useSingleGif({ id }) {
  const { gifs } = useGifs();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const gifFromCache = gifs.find((singleGif) => singleGif.id === id) || null;

  const [gif, setGif] = useState(gifFromCache);

  useEffect(() => {
    if (gifFromCache) {
      setLoading(true);
      setGif(gifFromCache);
      setLoading(false);
    } else if (!gif) {
      getSingleGif({ id }).then((gif) => {
        setGif(gif);
        setError(false);
        setLoading(false);
      }).catch(() => {
        setError(true);
        setLoading(false);
      });
    }
  }, [gif, id]);

  return { gif, loading, error };
}
