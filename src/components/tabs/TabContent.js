import LocationCards from '../cards/LocationCards';
import TabMesage from './TabMesage';

function TabContent({tab, updateSavedLocations}) {
    const isNoContentAvailable = tab.locations[0] === '' || tab.locations.length === 0;

  return (
    <div className={"tab" + (tab.isActive ? "tab--active" : "")}>
        {isNoContentAvailable ? (
          <TabMesage 
            message={tab.message}
          />
        ) : (
          <LocationCards 
            listOfLocations={tab.locations}
            updateSavedLocations={updateSavedLocations}
          />
        )}
    </div>
  );
}

export default TabContent;