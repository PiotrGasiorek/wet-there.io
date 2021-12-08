import { useSelector } from 'react-redux';
import TabsContent from './TabsContent';
import TabsNav from './TabsNav';

function Tabs() {
  const { searchResult } = useSelector(state => state);
  const { savedLocation } = useSelector(state => state);
  // const { viewedLocations } = useSelector(state => state);
  return (
    <div>
      <TabsNav 
        tabs={[ searchResult, savedLocation]}
      />
      <TabsContent 
        tabs={[ searchResult, savedLocation]}
      />
    </div>
  );
}

export default Tabs;