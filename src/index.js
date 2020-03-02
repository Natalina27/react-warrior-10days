import React from 'react';
import ReactDOM from 'react-dom';

const movie = {
    title: "Avengers: Infinity War",
    vote_average: 8.5,
    image: "http://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    overview:
    "As the Avengers and their allies have continued to protect the world from threats"
};

    function Image(props) {
        console.log('Image props = ', props);

        return(
            <img src={props.src} alt={props.alt}/>
        );
    }

    function MovieItem(props) {
    console.log('MovieItem props= ', props);
    const { data: { title, vote_average, image}} = props; //destruction obj

    return(
        <div>
            <Image src={image} alt={title}/>
            <p>{title}</p>
            <p>{vote_average}</p>
        </div>
    );
}

function App(){
    return(
        <div>
            <MovieItem data={movie}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
