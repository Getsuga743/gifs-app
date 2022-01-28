import React, { useState, useCallback } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useLocation } from 'wouter';
import { SearchBarContainer } from './styles';

const RATINGS = ['g', 'pg', 'pg-13', 'r'];
function Search() {
  const [, pushLocation] = useLocation();
  const [rating, setRating] = useState(RATINGS[0]);
  const [value, setValue] = useState('');

  const onSubmit = useCallback((value) => {
    pushLocation(`/search/${value}/${rating}`);
  }, [pushLocation]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };
  return (
    <SearchBarContainer>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="search">
          <select onChange={handleChangeRating}>
            <option disabled>Rating</option>
            {RATINGS.map((rate) => <option key={rate} value={rate}>{rate}</option>)}
          </select>
          <input
            name="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search a gif here..."
          />
          <button type="submit">
            <AiOutlineSearch />
          </button>
        </label>
      </form>
    </SearchBarContainer>

  );
}

export default React.memo(Search);
