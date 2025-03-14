import React, { useState } from 'react';
import { TbBasketSearch } from 'react-icons/tb';

import './SearchBar.css';

function SearchBar() {

    const [searchValue, setSearcheValue] = useState ('');

    return ( 
        <form className="search-bar">
            <input 
                type="search"
                placeholder="Buscar produtos"
                className="search-input"
                required
            />
            searchValue
            <button type="submit" className="search-button">
                <TbBasketSearch />
            </button>
        </form>
    );
}

export default SearchBar;
