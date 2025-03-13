import React from 'react';
import { TbBasketSearch } from 'react-icons/tb';
import './SearchBar.css';

function SearchBar() {
  return ( 
    <form className="search-bar">
      <input 
        type="search"
        placeholder="Buscar produtos"
        className="search-input"
        required
      />
      <button
        type="submit"
        className="seach_button">
        <TbBasketSearch />
      </button>
    </form>

  );
}

export default SearchBar;
