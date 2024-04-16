import React from 'react';
import './YearNavigation.css';

function YearNavigation() {
  return (
    <div className="YearNavigationContainer">
      <div className="YearNavigation">
        <button>Now</button>
        <button>2020</button>
        <button>2010</button>
        <button>2000</button>
        <button>1980</button>
        <button>1970</button>
        <button>1960</button>
        <button>1950</button>
        <button>1940</button>
        <button>1930</button>
      </div>
    </div>
  );
}

export default YearNavigation;
