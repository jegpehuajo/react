import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton></MyButton>
      </header>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function handleClic() {
    setCount(count + 1);
  }
  return (
    <button className="btn" onClick={handleClic}>
      Hiciste clic en {count} veces
    </button>
  )
}

export default App;
