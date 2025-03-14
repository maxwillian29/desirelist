import React from 'react';
import SearchBar from '../ButtonsIcons/SearchBar';
import './Header.css';

function Header () {
    return (
        <header className="header">
            <div className="cointainer">
       
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;
