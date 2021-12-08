import { createSlice } from "@reduxjs/toolkit";

export const viewedLocationsSlice = createSlice({
    name: 'viewedLocations',
    initialState: {
        label: 'Recently viewed locations',
        id: 3,
        message: {
            title: 'There are no locations in your history',
            paragraph: 'Every place you search for will be saved here'
        },
        locations: []
    },
    reducers: {
        addLocation: (state, action) => {
            const newLocation = action.payload;
            const isLocationSaved = state.locations.includes(newLocation)
            if(isLocationSaved){ return }
            state.locations = [newLocation];

            // if(state.locations !== undefined){
            //     state.locations = [newLocation, ...state.locations];
            // } else{
            // }
            
        },
    }
});

export const { addLocation } = viewedLocationsSlice.actions;
export default viewedLocationsSlice.reducer;