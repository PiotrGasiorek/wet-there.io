import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from './tabs';
import searchResultReducer from './searchResult';
import savedLocationsReducer from './savedLocations';
// import viewedLocationsReducer from './viewedLocations';
import tabsSwitcherReducer from './tabsSwitcher';

export default configureStore({
    reducer: {
        tabs: tabsReducer,
        searchResult: searchResultReducer,
        savedLocations: savedLocationsReducer,
        // viewedLocations: viewedLocationsReducer,
        tabsSwitcher: tabsSwitcherReducer,
    }
});