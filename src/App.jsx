import './App.css';
import logo from './images/logo.svg';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/Button/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('기술스택을 선택하세요!');

  function onClickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div className="App">
      <Header />
      {selectedTopic}
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
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <TabButton onClick={() => onClickHandler('Java')}>Java</TabButton>
          <TabButton onClick={() => onClickHandler('Springboot')}>Springboot</TabButton>
          <TabButton onClick={() => onClickHandler('Nodejs')}>Nodejs</TabButton>
          <TabButton onClick={() => onClickHandler('Nestjs')}>Nestjs</TabButton>
        </section>
        {selectedTopic}
      </main>
    </div>
  );
}

export default App;
