import React, { useEffect, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';
import ListOfGifs from '../../components/ListOfGifs';
import { LayoutContainer } from '../../layout/LayoutContainer';
import { useNearScreen } from '../../hooks/useNearScreen';
import useGif from '../../hooks/useGifs';

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGif({ keyword });
  const showRef = useRef();
  const { show } = useNearScreen({ externalRef: loading ? null : showRef, once: false });

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage((prevPage) => prevPage + 1),
    500,
  ), [setPage]);

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [show, setPage]);
  return (
    <LayoutContainer>
      <h2 style={{ textTransform: 'capitalize' }}>
        Search results for:
        {` ${decodeURI(keyword)}`}
      </h2>
      <ListOfGifs gifs={gifs} />
      <div style={{ display: 'block', height: '1rem', width: '100%' }} ref={showRef} />
    </LayoutContainer>
  );
}

export default SearchResults;
