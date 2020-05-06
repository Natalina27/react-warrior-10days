import React from 'react';
import {moviesData} from "../../moviesData";
import MovieItem from "../MovieItem/MovieItem";
import 'bootstrap/dist/css/bootstrap.css';

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
        const { movies } = this.state;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="row">
                        {movies.map(movie => {
                            return (
                                <div className="col-6 mb-4" key={movie.id}>
                                    <MovieItem movie={movie}
                                               onDeleteMovie={this.onDeleteMovie}
                                    />
                                </div>
                            );
                        })}
                    </div>
                 </div>
                    <div className="col-3">
                        <p>Will Watch: 0</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
