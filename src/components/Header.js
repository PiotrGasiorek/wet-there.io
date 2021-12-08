import Searchbox from './Searchbox';

function Header(props) {
  return (
    <header className='header'>
        <h1 className='header__title'>Search for weather wherever you are <br/> with wet-there.io</h1>
        <Searchbox
            handleApiResponse={props.handleApiResponse} 
        />
    </header>
  );
}

export default Header;