import { useState, useEffect } from 'react';
import { getGifs } from '../services/getGifs';

export default function useGif({ keyword } = { keyword: null }) {
  const [gifs, setGifs] = useState({ loading: false, results: [] });
  const { loading, results } = gifs;
  const keywordToUse = keyword || localStorage.getItem('LastKeyword');
  useEffect(() => {
    async function getData() {
      setGifs({ loading: true, results: [] });
      const actualGifs = await getGifs({ keyword: keywordToUse });
      setGifs(() => ({ loading: false, results: actualGifs }));
      localStorage.setItem('LastKeyword', keyword);
    }
    getData();
  }, [keyword]);
  return { loading, results };
}
