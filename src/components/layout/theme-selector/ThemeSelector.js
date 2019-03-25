import React from 'react';

import './ThemeSelector.scss';
import fun from '../../../img/fun.png';
import serious from '../../../img/serious.png';

function ThemeSelector() {
  return (
    <div className="theme-selector">
      <img src={fun} alt="Fun" />
      <img src={serious} alt="Serious" />
    </div>
  );
}

export default ThemeSelector;
