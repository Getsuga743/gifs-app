import { css, useTheme } from '@emotion/react'
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'

const Search = ({ params }) => {
    const { keyword } = params
    const theme = useTheme();
    return (
        <div>
            <h2 css={css`
                max-width:1000px;
                margin:auto;
                @media(${theme.breakpoints.md}){
                    max-width: 700px;
                    margin: auto;
                }
            `}>Search results for: {keyword}</h2>
            <ListOfGifs keyword={keyword} />
        </div>
    )
}

export default Search
