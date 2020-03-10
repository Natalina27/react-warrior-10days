import React from 'react';
import { moviesData } from '/Users/natalyamyunster/Desktop/REACT_REDUX/react-warrior-10days/src/moviesData.js';

console.log(moviesData);

class App extends React.Component{
  render() {
    console.log(this);
    return <div>{moviesData[0].title}</div>;
  }
}


export default App;
