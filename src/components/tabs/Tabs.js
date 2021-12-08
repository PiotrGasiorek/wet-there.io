import { useSelector } from 'react-redux';
import TabsContent from './TabsContent';
import TabsNav from './TabsNav';

function Tabs() {
  const { searchResult } = useSelector(state => state);
  const { savedLocations } = useSelector(state => state);
  // const { viewedLocations } = useSelector(state => state);
  return (
    <div className='tabs'>
      <TabsNav 
        tabs={[ searchResult, savedLocations]}
      />
      <TabsContent 
        tabs={[ searchResult, savedLocations]}
      />
    </div>
  );
}

export default Tabs;