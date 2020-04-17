import React from 'react';
import {moviesData} from "../../moviesData";

console.log(moviesData);

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
        console.log(this);


        const { movies } = this.state;

        console.log(movies);


        return (
            <div>
                { movies.map((movie) => {
                            return (
                                <div>
                                    <p>{movie.title}</p>
                                    <button onClick={this.onDeleteMovie}> DELETE MOVIE</button>
                                    {/*<button onClick={()=> console.log(movie.id)}> DELETE MOVIE</button>*/}
                                </div>
                            )})
                }
            </div>
        )
    }
}

export default App;
