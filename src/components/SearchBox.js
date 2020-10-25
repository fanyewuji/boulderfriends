import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input className='ba b--yellow bg-washed-red' 
            type='search' 
            placeholder='search friends' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;