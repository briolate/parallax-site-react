import React, { useEffect } from 'react';

import ProgressBar from '../progress-bar/ProgressBar';
import ThemeSelector from '../theme-selector/ThemeSelector';

import './Header.scss';

function Header() {
  // const [shadowValues, setShadowValues] = useState(0);

  useEffect(() => {
    let shadow = document.querySelector('#title');
    let shadowStyles = window.getComputedStyle(shadow);
    let shadowValue = shadowStyles.getPropertyValue('text-shadow');
    console.log(shadowValue);
  });

  return (
    <div className="header">
      <h1 id="title">Welcome</h1>
      <ProgressBar />
      <ThemeSelector />
      <div className="scroll">
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 167 299">
          <polygon className="fill-1" points="167,73 83.5,298.9 0,73 " />
          <polygon className="fill-2" points="137.4,0 83.5,145.9 29.6,0 " />
        </svg>
      </div>
    </div>
  );
}

export default Header;
