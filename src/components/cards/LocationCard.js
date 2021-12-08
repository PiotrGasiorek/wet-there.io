import { useDispatch } from 'react-redux';
import { toggleLocation } from '../../redux/savedLocations';

function LocationCard({ place }) {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(toggleLocation(place));
    return (
      <div>
          <h2>{place.current.temp_c}</h2>
          <h3>{place.location.name}</h3>
          <button onClick={handleClick}>Add to favourites</button>
      </div>
    );
  }
  
  export default LocationCard;