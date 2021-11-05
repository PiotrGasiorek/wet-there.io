import Tab from './Tab';

function TabsNav({tabs, handleTabClick}) {
    return (
        <ul>
            {tabs.map(tab => {
                return (
                    <Tab
                        key={tab.id}
                        tab={tab}
                        handleTabClick={handleTabClick}
                    />
                );
            })}
        </ul>
    );
}
  export default TabsNav;
