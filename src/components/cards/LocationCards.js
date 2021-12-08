import LocationCard from './LocationCard';

function LocationCards({listOfLocations}) {
  return (
    <>
        {listOfLocations.map(place => {
            return (
                <LocationCard 
                    place={place}
                    key={place.id}
                />
            )
        })}
    </>
  );
}

export default LocationCards;