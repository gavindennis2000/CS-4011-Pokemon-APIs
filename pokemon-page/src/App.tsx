import React from 'react';
import './App.css';
import { PokemonView, PokemonController } from './Components/PokemonCard/index';

function App() {

  return (
    <div className="App">
      <div className="Header">
        <img src="header.png" style={{width: '1000px', height: 'auto'}}/>
      </div>
      <PokemonController/>
    </div>
  );
}

export default App;
