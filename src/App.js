import './App.css';
import logo from './pictures/NightShiftLogo.png';

function App() {
  return (
    <div className="App">
      <header>
        <h1>You have been Jäynä'd</h1>
        <p>By the International and Masters students of Aalto University</p>
        <p>Sinut on Jäynätty Aalto yliopiston kansainvälisten- ja maisteriopiskelijoiden toimesta</p>
        <a href="https://www.jayna.fi/en" target="_blank" rel="noopener noreferrer">
          More info here
        </a>
      </header>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ marginTop: '2rem', maxWidth: '120px', width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default App;
