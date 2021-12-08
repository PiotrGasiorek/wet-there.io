import { createSlice } from "@reduxjs/toolkit";

export const savedLocationSlice = createSlice({
    name: 'savedLocation',
    initialState: {
        label: 'Saved locations',
        id: 2,
        message: {
          title: 'You dont have any saved locations',
          paragraph: 'Add places which you are interested in so that you can access them easily later'
        },
        locations: []
    },
    reducers: {
        toggleLocation: (state, action) => {
            const clickedLocation = action.payload;
            const isLocationSaved = state.locations.includes(clickedLocation)
            if(isLocationSaved){
                state.locations = state.locations.filter( location => location !== clickedLocation);
            } else{
                state.locations = [clickedLocation, ...state.locations];
            }
        },
    }
});

export const { toggleLocation } = savedLocationSlice.actions;
export default savedLocationSlice.reducer;