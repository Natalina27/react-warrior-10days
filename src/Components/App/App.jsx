import React from 'react';
import {moviesData} from "../../moviesData";
import MovieItem from "../MovieItem/MovieItem";

console.log('moviesData: ', moviesData);

class App extends React.Component {

    state = {
        movies: moviesData,
    };


    onDeleteMovie = (id) => {
        let newArray = this.state.movies.filter(
            (item) => item.id !== id);
        this.setState({movies: newArray});
    };

    render() {
        console.log('this: ', this);

        const { movies } = this.state;

        console.log('movies: ', movies);


        return (
            <div>
                {movies.map(movie => {
                    return  <MovieItem key={movie.id}
                                       movie={movie}
                                       onDeleteMovie={this.onDeleteMovie}
                    />
                })}
            </div>

        )
    }
}

export default App;
