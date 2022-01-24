/* eslint-disable max-len */
import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import styled from '@emotion/styled';
import SearchBar from '../../components/SearchBar/SearchBar';
import useGif from '../../hooks/useGifs';
import { LayoutContainer } from '../../layout/LayoutContainer';
import { GifsContainer } from '../../components/ListOfGifs/styles';
import Gif from '../../components/Gif';
import { LazyTrending } from '../../components/TrendingSearches';

const ContentContainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  > :nth-of-type(1){
    flex:4;
  }
  > :nth-of-type(2){
    flex:1;
    margin:2rem;
  }
   @media ${(props) => props.theme.breakpoints.lg}{
     flex-direction:column;
     > :nth-of-type(2){
      flex:1;
      margin:0;
    }
   }
`;

function Home() {
  const [, pushLocation] = useLocation();
  const onSubmit = useCallback((value) => {
    pushLocation(`/search/${value}`);
  }, [pushLocation]);

  const { gifs } = useGif();
  return (
    <LayoutContainer>
      <header>
        <h1 style={{ fontSize: '6rem', textAlign: 'center' }}>Giffy</h1>
        <SearchBar onSubmit={onSubmit} />
      </header>
      <h2 style={{ textAlign: 'start', width: '100%', margin: '1rem 0' }}>Your Latest Search</h2>
      <ContentContainer>
        <GifsContainer>
          {gifs && gifs.map((gif) => <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} />)}
        </GifsContainer>
        <LazyTrending />
      </ContentContainer>

    </LayoutContainer>

  );
}

export default Home;
