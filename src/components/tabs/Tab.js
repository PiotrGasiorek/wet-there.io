import { setActiveTab } from '../../redux/tabsSwitcher';
import { useDispatch, useSelector } from 'react-redux';

function Tab({ tab }) {
  const dispatch = useDispatch();
  const { tabsSwitcher } = useSelector(state => state);
  const handleTabClick = (id) => {
    dispatch(setActiveTab(id));
  }
  return (
    <li 
      key={tab.id} 
      className={(tab.id === tabsSwitcher.activeTabId ? "tabs__nav__tab--active tabs__nav__tab" : "tabs__nav__tab")}>
        <button 
          className='tabs__nav__tab__btn'
          onClick={() => handleTabClick(tab.id)}
        >{tab.label}</button>
    </li>
  );
}

export default Tab;