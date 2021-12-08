import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;