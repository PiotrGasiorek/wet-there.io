import { createSlice } from "@reduxjs/toolkit";

export const tabsSlice = createSlice({
    name: 'tabs',
    initialState: {
        tabs: {
            searchResults: {
                label: 'Results',
                id: 1,
                message: {
                  title: 'Nothing in here',
                  paragraph: 'Try to find the location you are looking for by using the form above or find your place'
                },
                locations: []
            },

            savedLocations: {
                label: 'Saved locations',
                id: 2,
                message: {
                  title: 'You dont have any saved locations',
                  paragraph: 'Add places which you are interested in so that you can access them easily later'
                },
                locations: []
            },

            recentlyViewed: {
                label: 'Recently viewed',
                id: 3,
                message: {
                  title: 'There are no locations in your history',
                  paragraph: 'Every place you search for will be saved here'
                },
                locations: []
            }
        },
        activeTabId: 1
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTabId = action.payload;
        },
    }
});

export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;