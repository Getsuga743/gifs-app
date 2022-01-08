import React from 'react'
import { getGifById } from '../../services/getGifs'

const Detail = ({ params }) => {
    const { id } = params;
    
    const gifsContext = useContext(GifsContext)
    return (
        <div>
            {id}
        </div>
    )
}

export default Detail
