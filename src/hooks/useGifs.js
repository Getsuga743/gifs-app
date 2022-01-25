import { useState, useEffect, useContext } from 'react';
import GifsContext from '../context/GifsContext';
import { getGifs } from '../services/getGifs';

const INITIAL_PAGE = 0;

export default function useGif({ keyword } = { keyword: null }) {
  const keywordToUse = keyword || localStorage.getItem('LastKeyword');

  const [loading, setLoading] = useState(true);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword: keywordToUse, page }).then((gifs) => setGifs(gifs));
    setLoading(false);
    localStorage.setItem('LastKeyword', keywordToUse);
  }, [keywordToUse, setGifs]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, page })
      .then((gifs) => setGifs((prevGifs) => prevGifs.concat(gifs)));
    setLoadingNextPage(false);
  }, [page, keywordToUse]);
  return {
    loading, loadingNextPage, gifs, setPage, page,
  };
}
