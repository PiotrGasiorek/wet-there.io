import React, { useState } from 'react';

const apiKey = '1d24a209e05a4580954110817213010';

function Searchbox(props) {
    const [location, setLocation] = useState('');

    const handleOnChange = (e) => {
        setLocation(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        getDataFromApi();
    }    

    const handleApiResponse = (response) => {
        response.error ? handleApiError(response) : applyIdToLocation(response);
    }

    const handleApiError = (error) => {
        console.log('Its error boy', error);
    }

    const applyIdToLocation = (location) => {
        let locationWithId = location;
        locationWithId.id = Math.random();
        console.log(locationWithId);
        props.handleApiResponse(locationWithId);
    }

    const getDataFromApi = () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
        fetch(url)
            .then(response => response.json())
            .then(data => handleApiResponse(data))
            .catch(error => {
                handleApiError(error);
            });
    }


  return (
    <form onSubmit={handleOnSubmit}>
        <input 
            type='text'
            value={location}
            onChange={handleOnChange}
        />
        <button>Search</button>
    </form>
  );
}

export default Searchbox;