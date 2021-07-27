import React, { useState, useEffect } from 'react'
import { getGifs } from '../services/getGifs'
import { Gif } from './Gif'

const ListOfGifs = ( {params }) => {
    const {keyword} = params
    const [gifs, setGifs] = useState([])
    useEffect(async () => {
        const gifsData = await getGifs({ keyword });
        if (gifsData) {
            setGifs(gifsData);
        } else {
            setGifs([keyword]);
        }

    }, [keyword])
    return (
        <div>
            {
                gifs.map((gif) => { return <Gif title={gif.title} url={gif.url} key={gif.id} /> })
            }
        </div>
    )
}

export default ListOfGifs;
