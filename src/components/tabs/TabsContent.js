import TabContent from './TabContent';

function TabsContent({tabs, updateSavedLocations}) {
    return (
        <ul>
            {tabs.map(tab => {
                return (
                    <TabContent 
                        tab={tab}
                        key={tab.id}
                        updateSavedLocations={updateSavedLocations}
                    />
                )
            })}
        </ul>
    );
}
  export default TabsContent;
