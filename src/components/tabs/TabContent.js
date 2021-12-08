import { useSelector } from 'react-redux';

import LocationCards from '../cards/LocationCards';
import TabMesage from './TabMesage';

function TabContent({ tab  }) {
  const activeTabId = useSelector(state => state.tabsSwitcher.activeTabId);
  const isContentAvailable = tab.locations[0] === '' || tab.locations.length === 0 || tab.locations[0] === undefined;
  const didErrorOccurred = tab.label === 'Results' && tab.locations.error
  if(didErrorOccurred){
    console.log(tab.locations.error);
  }

  return (
    <div className={"tabs__content__wrapper " + (tab.id === activeTabId ? "tabs__content__wrapper--active" : "")}>
        {!isContentAvailable ? (
          <LocationCards 
            listOfLocations={tab.locations}
          />) : (
          <TabMesage 
            message={tab.message}
          />)
        }
    </div>
  );
}

export default TabContent;