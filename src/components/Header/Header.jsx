import logo from '../../images/logo.svg';

const getRandomInteger = count => {
    return Math.floor(Math.random() * count);
  }
  
export default function Header(){
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