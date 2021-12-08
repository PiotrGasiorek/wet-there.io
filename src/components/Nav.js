import logo from '../logo.svg';

function Nav() {
  return (
    <nav className='nav'>
      <div className='nav__wrapper'>
        <img className='nav__wrapper__logo' width='180px' src={logo} alt='wet-there.io app for searching weather wherever you are'/>
      </div>
    </nav>
  );
}

export default Nav;