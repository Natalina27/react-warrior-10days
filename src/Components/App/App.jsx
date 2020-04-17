import React from 'react';
import {moviesData} from "../../moviesData";

console.log(moviesData);

class App extends React.Component {

    state = {
        movies: moviesData,
    };


    onDeleteMovie = (movie) => {
        let newArray = [...this.state.movies];
        console.log(newArray);

        newArray.filter(
            (item) => item.id !== movie);
        this.setState(newArray);
        console.log(newArray);
    };

    render() {
        console.log(this);


        const { movies } = this.state;

        console.log(movies);


        return (
            <div>
                { movies.map((movie) => {
                            return (
                                <div>
                                    <p>{movie.title}</p>
                                    <button onClick={()=>this.onDeleteMovie(movie.id)}> DELETE MOVIE</button>
                                </div>
                            )})
                }
            </div>
        )
    }
}

export default App;
