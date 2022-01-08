import { useTheme } from '@emotion/react'
import React from 'react'
import ListOfGifs from '../../components/ListOfGifs'
import { LayoutContainer } from '../../layout/LayoutContainer';

const SearchResults = ({ params }) => {
    const { keyword } = params
    const theme = useTheme();
    return (
        <LayoutContainer>
            <h2>Search results for: {keyword}</h2>
            <ListOfGifs keyword={keyword} />
        </LayoutContainer>
    )
}

export default SearchResults;
