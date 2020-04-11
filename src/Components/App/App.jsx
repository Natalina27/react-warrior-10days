import React from 'react';
import {moviesData} from "../../moviesData";

console.log(moviesData);

class App extends React.Component {

    state = {
        movies: moviesData,
    };
    onDeleteMovie = (id) => {
        let newArray = [...this.state.movies];
        newArray.filter(
            (item) => this.state.movies.id !== item.id);
        this.setState(newArray);
    };

    render() {
        console.log(this);

        const { movies } = this.state;


        return (
            <div>
                { movies.map((movie) => {
                            return (
                                <div>
                                    <p>{movie.title}</p>
                                    <button onClick={()=>this.onDeleteMovie}> DELETE MOVIE</button>
                                </div>
                            )})
                }
            </div>
        )
    }
}

export default App;
