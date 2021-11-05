import React, { useState, useEffect } from 'react';
import TabsContent from './TabsContent';
import TabsNav from './TabsNav';

function Tabs({searchedLocation}) {
  let tabsData = [
    {
      label: 'Results',
      id: Math.random(),
      isActive: true,
      message: {
        title: 'Nothing in here',
        paragraph: 'Try to find the location you are looking for by using the form above or find your place'
      },
      locations: [searchedLocation]
    },
    {
      label: 'Saved locations',
      id: Math.random(),
      isActive: false,
      message: {
        title: 'You dont have any saved locations',
        paragraph: 'Add places which you are interested in so that you can access them easily later'
      },
      locations: []
    },
    {
      label: 'Recently viewed',
      id: Math.random(),
      isActive: false,
      message: {
        title: 'There are no locations in your history',
        paragraph: 'Every place you search for will be saved here'
      },
      locations: []
    }
  ];
  const [tabs, setTabs] = useState(tabsData);
  useEffect(() => {
    tabsData[0].locations[0] = searchedLocation;
    setTabs(tabsData);
  }, [searchedLocation]);

  const handleTabClick = (id) => {
    let updatedTabs = tabs.map(tab => {
      if(tab.id === id){
        tab.isActive = true;
      } else{
        tab.isActive = false;
      }
      return tab
    })
    setTabs(updatedTabs);
  }

  const updateSavedLocations = (id) => {
    console.log('Id of location', id);
  }

  return (
    <div>
      <TabsNav 
        tabs={tabs}
        handleTabClick={handleTabClick}
      />
      <TabsContent 
        tabs={tabs}
        updateSavedLocations={updateSavedLocations}
      />
    </div>
  );
}

export default Tabs;