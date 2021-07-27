import React, { useState, useEffect } from 'react'
import { getGifs } from '../../services/getGifs'
import { Gif } from '../Gif'
import { GifsContainer } from './styles'
import Spinner from '../Spinner'
const ListOfGifs = ({ keyword }) => {
    const [gifs, setGifs] = useState({ loading: false, results: [] });
    console.log(gifs)
    useEffect(async () => {
        setGifs({ loading: true, results: [] });
        const actualGifs = await getGifs({ keyword });
        setGifs(() => ({ loading: false, results: actualGifs }));
    }, [keyword])

    return (
        <>
            {gifs.loading && <Spinner />}
            <GifsContainer>
                {gifs.results.map((gif) => { return <Gif title={gif.title} url={gif.url} id={gif.id} key={gif.id} /> })}
            </GifsContainer>
        </>
    )
}

export default ListOfGifs;
