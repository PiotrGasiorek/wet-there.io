import Tabs from './tabs/Tabs';

function Board({searchedLocation}) {
  return (
    <div>
        <Tabs searchedLocation={searchedLocation}/>
    </div>
  );
}

export default Board;