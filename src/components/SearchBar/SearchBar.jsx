import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function Search({ handleSubmit }) {
  const [value, setValue] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search">
        <input
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </label>
    </form>
  );
}

export default Search;
