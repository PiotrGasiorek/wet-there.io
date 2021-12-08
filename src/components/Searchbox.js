import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../redux/tabsSwitcher';
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
        dispatch(setActiveTab(1));
    }  
    return (
        <form 
            className='form'
            onSubmit={handleOnSubmit}>
            <input 
                type='text'
                placeholder='Type here...'
                value={searchboxValue}
                onChange={handleOnChange}
                className='input'
            />
            <button className='btn'>Search</button>
        </form>
    )
}

export default Searchbox;