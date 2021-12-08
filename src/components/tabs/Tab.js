import { setActiveTab } from '../../redux/tabsSwitcher';
import { useDispatch, useSelector } from 'react-redux';

function Tab({ tab }) {
  const dispatch = useDispatch();
  const activeTabId = useSelector(state => state.tabsSwitcher.activeTabId);
  const handleTabClick = (id) => {
    dispatch(setActiveTab(id));
  }
  return (
    <li key={tab.id} className={(tab.id !== activeTabId ? "tab-btn--unactive" : "")}>
        <button
            onClick={() => handleTabClick(tab.id)}
        >{tab.label}</button>
    </li>
  );
}

export default Tab;