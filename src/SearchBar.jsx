import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form className="SearchBar" onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

export default SearchBar;
