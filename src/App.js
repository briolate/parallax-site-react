import React from 'react';
import './App.scss';

import Header from './components/layout/header/Header';
import ContextBoxes from './components/content-boxes/ContentBoxes';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <ContextBoxes />
      </div>
    </div>
  );
}

export default App;
