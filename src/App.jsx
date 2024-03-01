import logo from './logo.svg';
import './App.css';

const getRandomInteger = count => {
  return Math.floor(Math.random() * (count + 1));
} 

const Header = () => {
  const headerDescription = ['리액트 스터디', '리액트 연습', '리린이 등장'];
  const descriptionCount = headerDescription.length;

  const description = headerDescription[getRandomInteger(descriptionCount)];

  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {description}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="App-header"></Header>
    </div>
  );
}

export default App;
