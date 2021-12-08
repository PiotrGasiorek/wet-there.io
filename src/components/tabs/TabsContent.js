import TabContent from './TabContent';

function TabsContent({ tabs }) {
    return (
        <ul>
            {tabs.map(tab => {
                return (
                    <TabContent 
                        tab={tab}
                        key={tab.id}
                    />
                )
            })}
        </ul>
    );
}
  export default TabsContent;
