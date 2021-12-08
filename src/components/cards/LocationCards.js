import LocationCard from './LocationCard';

function LocationCards({listOfLocations}) {
  return (
    <div>
        {listOfLocations.map(place => {
            return (
                <LocationCard 
                    place={place}
                    key={place.id}
                />
            )
        })}
    </div>
  );
}

export default LocationCards;