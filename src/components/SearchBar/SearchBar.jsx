import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './SearchBar.module.css';
import search from '../../images/icons/search.svg';
import itemsData from '../../data/items.json';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isInputVisible, setInputVisible] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      const results = itemsData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      navigate('/search-results', { state: { results } });
    }
  };

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div className={css.searchBar}>
      <button
        className={css.searchButton}
        aria-label="Toggle search input"
        onClick={toggleInputVisibility}
      >
        <img src={search} alt="Search Icon" width="20" height="20" />
      </button>
      {isInputVisible && (
        <input
          type="text"
          placeholder="Search..."
          className={css.searchInput}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchBar;
