import React from 'react';
import {moviesData} from "../../moviesData";

console.log(moviesData);

class App extends React.Component {

    state = {
        movies: moviesData,
    };
    onDeleteMovie = () => {
        this.state.movies.filter((item) => { item.id !== movies.id})
    };

    render() {
        console.log(this);
        return (
            <div>
                {this.state.movies.map((movie) => {
                            return (
                                <div>
                                    <p>{movie.title}</p>
                                    <button> DELETE MOVIE</button>
                                </div>
                            )})
                }
            </div>
        )
    }
}

export default App;
