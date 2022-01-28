import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  return (
    <header style={{ width: '100%' }}>
      <h1 style={{ fontSize: '6rem', textAlign: 'center' }}>Giffy</h1>
      <SearchBar />
    </header>
  );
}
