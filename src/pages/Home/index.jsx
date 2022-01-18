/* eslint-disable max-len */
import React, { useState } from 'react';
import { useLocation } from 'wouter';
import SearchBar from '../../components/SearchBar/SearchBar';
import useGif from '../../hooks/useGifs';
import { LayoutContainer } from '../../layout/LayoutContainer';
import { GifsContainer } from '../../components/ListOfGifs/styles';
import { Gif } from '../../components/Gif';
import TrendingSearches from '../../components/TrendingSearches/TrendingSearches';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [, pushLocation] = useLocation();
  const handleSubmit = (value) => {
    setKeyword(value);
    pushLocation(`/search/${value}`);
  };

  const { loading, results: gifs } = useGif({ keyword });
  return (
    <LayoutContainer>
      <SearchBar handleSubmit={handleSubmit} />
      <h1>Your Latest Search</h1>
      <GifsContainer>
        {gifs && gifs.map((gif) => <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} />)}
      </GifsContainer>
      <div>
        <TrendingSearches />
      </div>
    </LayoutContainer>
  );
}

export default Home;
