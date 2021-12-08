import Tab from './Tab';

function TabsNav({ tabs }) {
    return (
        <ul className='tabs__nav'>
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
