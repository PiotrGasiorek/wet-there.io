function LocationCard({place, updateSavedLocations}) {
    const handleClick = () => updateSavedLocations(place.id);
    return (
      <div>
          <h2>{place.current.temp_c}</h2>
          <h3>{place.location.name}</h3>
          <button onClick={handleClick}>Add to favourites</button>
      </div>
    );
  }
  
  export default LocationCard;