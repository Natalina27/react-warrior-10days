import React from 'react';
import { moviesData } from '/Users/natalyamyunster/Desktop/REACT_REDUX/react-warrior-10days/src/moviesData.js';



// import './App.module.css';
// import classnames from 'classnames';

console.log(moviesData);

function App() {
  return <div>{moviesData[0].title}</div>;
}

export default App;
