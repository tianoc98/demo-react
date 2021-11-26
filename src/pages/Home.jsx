import logo from '../logo.svg';
import '../App.css';
function Home(){
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/About"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
      </header>
    )
}

export default Home