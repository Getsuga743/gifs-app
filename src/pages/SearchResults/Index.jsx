import React from 'react';
import propTypes from 'prop-types';
import ListOfGifs from '../../components/ListOfGifs';
import { LayoutContainer } from '../../layout/LayoutContainer';

function SearchResults({ params }) {
    console.log(params)
  const { keyword } = params;
  return (
    <LayoutContainer>
      <h2>
        Search results for:
        {keyword}
      </h2>
      <ListOfGifs keyword={keyword} />
    </LayoutContainer>
  );
}

export default SearchResults;
