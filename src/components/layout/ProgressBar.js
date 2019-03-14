import React, { useState, useEffect } from 'react';

import './ProgressBar.scss';

function ProgressBar() {
  const [scrollDepth, setScrollDepth] = useState(0);
  const [scrollClass, setScrollClass] = useState('');

  function getScrollDepth() {
    const scrolled =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollDepth(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', getScrollDepth);
    if (scrollDepth < 500) {
      setScrollClass('first');
    } else if (scrollDepth > 1000 && scrollDepth < 2000) {
      setScrollClass('second');
    } else if (scrollDepth > 2000 && scrollDepth < 3000) {
      setScrollClass('third');
    } else if (scrollDepth > 3000) {
      setScrollClass('fourth');
    }

    return function() {
      window.removeEventListener('scroll', getScrollDepth);
    };
  });

  return (
    <div className="progress-bar">
      <ul className="progress-bar__list">
        <li className={scrollClass === 'first' ? 'active' : null} />
        <li className={scrollClass === 'second' ? 'active' : null} />
        <li className={scrollClass === 'third' ? 'active' : null} />
        <li className={scrollClass === 'fourth' ? 'active' : null} />
      </ul>
    </div>
  );
}

export default ProgressBar;
