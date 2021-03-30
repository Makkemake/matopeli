
import './App.css';
import SnakeBoard from './SnakeBoard.js';
import Points from "./Points";

function App() {
  return (
    <div className="App">
      <header className="App-header">Matopeli</header>
      <Points points={3} />
      <SnakeBoard />
    </div>
  );
}

export default App;
