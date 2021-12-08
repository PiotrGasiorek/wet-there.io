import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocation } from '../redux/searchResult';

function Searchbox() {
    const [searchboxValue, setSearchboxValue] = useState('');
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setSearchboxValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getLocation(searchboxValue));
    }  

    return (
        <form onSubmit={handleOnSubmit}>
            <input 
                type='text'
                value={searchboxValue}
                onChange={handleOnChange}
            />
            <button>Search</button>
        </form>
    )
}

export default Searchbox;