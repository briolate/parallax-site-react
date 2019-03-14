import React from 'react';
import './App.scss';

import ProgressBar from './components/layout/ProgressBar';

function App() {
  return (
    <div className="App">
      <div className="header">
        <svg
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path
            d="M-314,127 C105,364 400,-100 812,279"
            fill="none"
            strokeWidth="120"
            strokeLinecap="round"
          />
        </svg>
        <svg
          id="svg2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-300 0 950 270"
        >
          <path
            d="M-314,427 C305,-364 400,-100 812,279"
            fill="none"
            strokeWidth="120"
            strokeLinecap="round"
          />
        </svg>
        <ProgressBar />
        <h1>Welcome</h1>
      </div>
    </div>
  );
}

export default App;
