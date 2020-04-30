import React from 'react';

const MovieItem = ({movie, onDeleteMovie}) => {
    return (
        <div>
            <p>{movie.title}</p>
            <button onClick={() => onDeleteMovie(movie.id)}> DELETE MOVIE</button>
        </div>
    );
};

export default MovieItem;