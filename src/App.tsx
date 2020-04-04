import React from 'react';
import './App.css';
import { PetListWithData } from './components';

function App() {
  return (
    <div className="App">
      <PetListWithData petTypeFilter={'Cat'} />
    </div>
  );
}

export default App;
