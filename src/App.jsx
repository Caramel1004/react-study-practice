import logo from './images/logo.svg';
import './App.css';

const getRandomInteger = count => {
  return Math.floor(Math.random() * count);
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

const CoreConcept = props => {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="핵심 UI 빌딩블록"
              image={logo} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
