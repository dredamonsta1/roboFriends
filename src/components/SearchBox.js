import React from 'react';






const SearchBox =({searchChange}) =>{
    return (
        <div className='search'>
            <input 
            type='search' 
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
    );
}


export default SearchBox;