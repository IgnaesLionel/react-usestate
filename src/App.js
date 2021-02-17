
import './App.css';
import Compteur from './Compteur';
import Compteur2 from './Compteur2';
import Compteur3 from './Compteur3';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Use State</h1>
      <h5>Compteur avec Hook personnalisé</h5>
    
        <Compteur3/>
      </header>
    </div>
  );
}

export default App;
