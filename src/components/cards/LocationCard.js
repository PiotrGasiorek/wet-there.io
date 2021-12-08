import { useDispatch, useSelector } from 'react-redux';
import { toggleLocation } from '../../redux/savedLocations';
import { Bookmark } from 'react-feather';

function LocationCard({ place }) {
    const dispatch = useDispatch();
    const { savedLocations } = useSelector(store => store);
    const isLocationSaved = savedLocations.locations.includes(place);
    console.log(isLocationSaved);
    const handleClick = () => dispatch(toggleLocation(place));
    return (
      <div className='card'>
          <h3 className='card__subtitle'>{place.location.name}</h3>
          <h2 className='card__title'>{place.current.temp_c} &#8451;</h2>
          <button 
            className={'card__saveBtn ' + (isLocationSaved ? 'card__saveBtn--saved' : '')}
            onClick={handleClick}><Bookmark /></button>
      </div>
    );
  }
  
  export default LocationCard;