import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBarContainer } from './styles';

function Search({ onSubmit }) {
  const [value, setValue] = useState('');
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <SearchBarContainer>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="search">
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
