import React from 'react';
import {moviesData} from "../../moviesData";

console.log(moviesData);

class App extends React.Component{

  state = {
    movies: moviesData
  };
  render() {
    console.log(this);
    return <div>{moviesData[0].title}</div>;
  }
}


export default App;
