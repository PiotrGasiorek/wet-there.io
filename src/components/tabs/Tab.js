function Tab({ tab, handleTabClick }) {
  return (
    <li key={tab.id}>
        <button
            onClick={() => handleTabClick(tab.id)}
        >{tab.label}</button>
        {tab.isActive ? '--active' : ''}
        {/* <a 
            onClick={handleTabClick}
            href='#'
        > 
            {tab.label}
        </a> */}
  </li>
  );
}

export default Tab;