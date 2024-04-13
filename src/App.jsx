import './App.css';
import logo from './images/logo.svg';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';

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
