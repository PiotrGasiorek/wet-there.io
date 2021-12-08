import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from './tabs';
import searchResultReducer from './searchResult';
import savedLocationReducer from './savedLocations';
// import viewedLocationsReducer from './viewedLocations';
import tabsSwitcherReducer from './tabsSwitcher';

export default configureStore({
    reducer: {
        tabs: tabsReducer,
        searchResult: searchResultReducer,
        savedLocation: savedLocationReducer,
        // viewedLocations: viewedLocationsReducer,
        tabsSwitcher: tabsSwitcherReducer,
    }
});