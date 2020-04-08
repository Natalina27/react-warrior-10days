import React from 'react';
import {moviesData} from "../../moviesData";

console.log(moviesData);

class App extends React.Component {

    state = {
        movies: moviesData,
    };

    render() {
        console.log(this);
        return (
            <div>{this.state.movies.map((movie) => <p>{movie.title}</p>)}</div>
        )
    }
}


export default App;
