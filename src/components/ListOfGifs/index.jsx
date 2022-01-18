import React from 'react';
import PropTypes from 'prop-types';
import { Gif } from '../Gif';
import { GifsContainer } from './styles';
import Spinner from '../Spinner';
import useGif from '../../hooks/useGifs';

function ListOfGifs({ keyword }) {
  const { loading, results: gifs } = useGif({ keyword });
  return (
    <>
      {loading && <Spinner />}
      <GifsContainer>
        {gifs.map((gif) => <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} />)}
      </GifsContainer>
    </>
  );
}

ListOfGifs.propTypes = {
  keyword: PropTypes.string.isRequired,
};

export default ListOfGifs;
