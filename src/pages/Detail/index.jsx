import React from 'react'
import { getGifById } from '../../services/getGifs'

const Detail = ({ params }) => {
    const { id } = params;
    
    console.log(getGifById({ id }))
    return (
        <div>
            {id}
        </div>
    )
}

export default Detail
