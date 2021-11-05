import LocationCard from './LocationCard';

function LocationCards({listOfLocations, updateSavedLocations}) {
  return (
    <div>
        {listOfLocations.map(place => {
            return (
                <LocationCard 
                    place={place}
                    key={place.id}
                    updateSavedLocations={updateSavedLocations}
                />
            )
        })}
    </div>
  );
}

export default LocationCards;