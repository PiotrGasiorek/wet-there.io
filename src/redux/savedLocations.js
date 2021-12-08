import { createSlice, current } from "@reduxjs/toolkit";

export const savedLocationsSlice = createSlice({
    name: 'savedLocations',
    initialState: {
        label: 'Saved locations',
        id: 2,
        message: {
          title: "You don't have any saved locations",
          paragraph: 'Add places which you are interested in so that you can access them easily later'
        },
        locations: []
    },
    reducers: {
        toggleLocation: (state, action) => {
            const clickedLocation = action.payload;
            const isLocationSaved = current(state.locations).indexOf(clickedLocation) !== -1;
            if(isLocationSaved){
                state.locations = current(state.locations).filter( location => location !== clickedLocation)
            } else{
                state.locations = [clickedLocation, ...state.locations]
            }


        },
    }
});

export const { toggleLocation } = savedLocationsSlice.actions;
export default savedLocationsSlice.reducer;