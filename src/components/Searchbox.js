import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveTab } from '../redux/tabsSwitcher';
import { getLocation } from '../redux/searchResult';
import { Crosshair } from 'react-feather';

function Searchbox() {
    const [searchboxValue, setSearchboxValue] = useState('');
    const dispatch = useDispatch();
    const handleOnChange = (e) => {
        setSearchboxValue(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        sendData();
    }  

    const sendData = (userLocation) => {
        if(userLocation){
            dispatch(getLocation(userLocation));
        } else{
            dispatch(getLocation(searchboxValue));
            console.log('hey');
        }
        dispatch(setActiveTab(1));
    }

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(sendData);
    }

    return (
        <form 
            className='form'
            onSubmit={handleOnSubmit}
        >
            <div className='form__searchbox'>
                <input 
                    type='text'
                    placeholder='Type here...'
                    value={searchboxValue}
                    onChange={handleOnChange}
                    className='form__searchbox__input'
                />
                <button className='form__searchbox__btn'>Search</button>
            </div>
            <button 
                className='form__btn' 
                type="button" 
                onClick={getUserLocation}
            >
                <Crosshair/>
                <span className='form__btn__txt'>Get my location</span>
            </button>
        </form>
    )
}

export default Searchbox;