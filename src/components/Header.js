import Searchbox from './Searchbox';

function Header(props) {
  return (
    <header>
        <h1>Search for weather wherever you are with wet-there.io</h1>
        <Searchbox
            handleApiResponse={props.handleApiResponse} 
        />
    </header>
  );
}

export default Header;