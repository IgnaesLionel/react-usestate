
import './App.css';
import Compteur from './Compteur';
import Compteur2 from './Compteur2';
import Compteur3 from './Compteur3';
import Compteur4 from './Compteur4';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Use State</h1>
      
        <Compteur2/>
        <Compteur3/>

        <Compteur4/>
      </header>
    </div>
  );
}

export default App;
