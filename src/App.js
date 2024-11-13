import './App.css';
import { MenuList } from './components/MenuList/MenuList';
import { DisplayDifficulty } from './components/DisplayDifficulty/DisplayDifficulty'
import { useState } from 'react';

function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updateDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }
  return (
    <div className="App">
      <MenuList 
      onItemClick={updateDifficulty}
      difficulty={currentDifficulty}
      />
      {<DisplayDifficulty difficulty={currentDifficulty}/>}
    </div>
  );
}

export default App;
