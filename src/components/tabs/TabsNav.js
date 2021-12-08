import Tab from './Tab';

function TabsNav({ tabs }) {
    return (
        <ul>
            {tabs.map(tab => {
                return (
                    <Tab
                        key={tab.id}
                        tab={tab}
                    />
                );
            })}
        </ul>
    );
}
  export default TabsNav;
