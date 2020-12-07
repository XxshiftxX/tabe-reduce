import React, { useState } from 'react';
import './App.css';
import FatInput from './components/FatInput';
import FatInfo from './components/FatInfo';
import Menu from './components/Menu';

function App() {
  const [fat, setFat] = useState(NaN);

  if (!fat) {
    return (
      <div className="App">
        <header className="App-header">
          <FatInput onFatSelected={(fat: number) => setFat(fat)}/>
        </header>
      </div>
    );
  }

  return (
    <div className="main-app">
      <h1>안녕하세요! :)</h1>
      <FatInfo fat={fat} />
      <Menu />
    </div>
  )
}

export default App;
