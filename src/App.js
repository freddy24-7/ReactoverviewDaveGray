import logo from './logo.svg';
import './App.css';

//Return function returns JSX

function App() {

    const handleNameChange = (event) => {
      const names = ['John', 'Jane', 'Joe'];
      const int = Math.floor(Math.random() * 3);
      return names[int];
    }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handleNameChange()}!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
