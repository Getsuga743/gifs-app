import React from 'react'
import { getGifs } from '../../services/getGifs'
import { Gif } from '../Gif'
import { GifsContainer } from './styles'
import Spinner from '../Spinner'
import { useGif } from '../../hooks/useGifs';
const ListOfGifs = ({ keyword }) => {
  const  {loading,results:gifs} = useGif({keyword})
    return (
        <>
            {loading && <Spinner />}
            <GifsContainer>
                {gifs.map((gif) => { return <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} /> })}
            </GifsContainer>
        </>
    )
}

export default ListOfGifs;
