import TabContent from './TabContent';

function TabsContent({ tabs }) {
    return (
        <div className='tabs__content'>
            {tabs.map(tab => {
                return (
                    <TabContent 
                        tab={tab}
                        key={tab.id}
                    />
                )
            })}
        </div>
    );
}
  export default TabsContent;
