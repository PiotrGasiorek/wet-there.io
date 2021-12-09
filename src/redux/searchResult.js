import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const addId = (location) => {
    let locationWithId = location;
    locationWithId.id = Math.random();
    return locationWithId
} 

export const getLocation = createAsyncThunk(
    "search/getLocation",
    async (searchedLocation) => {
        const apiKey = '1d24a209e05a4580954110817213010';
        console.log(searchedLocation.coords);
        
        let location = searchedLocation;
        if(searchedLocation.coords){
            console.log('run');
            location = `${searchedLocation.coords.latitude},${searchedLocation.coords.longitude}`;
        }
        console.log(location);

        let apiLink = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
        console.log(apiLink);
        
        return await axios.get(apiLink)
            .then(response => response.data)
    }
)

export const searchResultSlice = createSlice({
    name: 'searchResult',
    initialState: {
        label: 'Results',
        id: 1,
        message: {
          title: 'No search results available',
          paragraph: 'Find the location you are looking for by using the form above or check weather in your current location'
        },
        locations: []
    },
    extraReducers: {
        [getLocation.pending]: (state) => {
          state.status = "loading";
        },
        [getLocation.fulfilled]: (state, action) => {
          state.status = "success";
          state.locations = [addId(action.payload)];
        },
        [getLocation.rejected]: (state) => {
          state.status = "failed";
        },
    },
});

export default searchResultSlice.reducer;