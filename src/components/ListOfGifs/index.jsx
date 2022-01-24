import React from 'react';
import Gif from '../Gif';
import { GifsContainer } from './styles';
import Spinner from '../Spinner';

function ListOfGifs({ gifs, loading }) {
  return (
    <>
      {loading && <Spinner />}
      <GifsContainer>
        {gifs.map((gif) => <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} />)}
      </GifsContainer>
    </>
  );
}

export default ListOfGifs;
