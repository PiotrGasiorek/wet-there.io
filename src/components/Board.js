import Tabs from './tabs/Tabs';

function Board({searchedLocation}) {
  return (
    <>
        <Tabs searchedLocation={searchedLocation}/>
    </>
  );
}

export default Board;