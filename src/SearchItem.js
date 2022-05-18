import React from 'react';

// (5) receive props from parent component
// (6) set value and onchange

const SearchItem = ({search, setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(event => event.preventDefault())}>
            <label htmlFor="search">Search</label>
            <input
                id="search"
                type="text"
                role="searchbox"
                placeholder="search Items"
                value={search}
                onChange={(event => setSearch(event.target.value))}
            />
            
        </form>
    );
};

export default SearchItem;