import { createSlice } from "@reduxjs/toolkit";

export const tabsSwitcherSlice = createSlice({
    name: 'tabsSwitcher',
    initialState: {
        // Todo - get searchResult id by default
        activeTabId: 1
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTabId = action.payload
        },
    }
});

export const { setActiveTab } = tabsSwitcherSlice.actions;
export default tabsSwitcherSlice.reducer;