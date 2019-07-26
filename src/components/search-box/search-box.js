import React from 'react';
import './search-box.styles.css';

const SearchBox = (props) => {

    const { searchTerm, handleChange, placeholder } = props;

    return (
        <div className="searchContainer">
            <input className="search" type="search" value={searchTerm} placeholder={placeholder} onChange={handleChange} />
        </div>        
    );
}

export default SearchBox;
