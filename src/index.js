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

//     function MovieItem(props) { //parent of Image
//     console.log('MovieItem props= ', props);
//     const { data: { title, vote_average, image}} = props; //destruction obj
//
//     return(
//         <div>
//             <Image src={image} alt={title}/>
//             <p>{title}</p>
//             <p>{vote_average}</p>
//         </div>
//     );
// }


class MovieItem extends React.Component{ //MovieItem = new React.Component()
        constructor(){
            super();
            this.state = {
                show: false
            };
        }
        render(){
            const { data: { title, vote_average, image, overview}} = this.props; //destruction obj
            console.log(' state =  ', this.state);
            return(
                <div>
                    <Image src={image} alt={title}/>
                    <p>{title}</p>
                    <p>{vote_average}</p>
                    <button type="button"
                            onClick={()=> {
                            console.log('show');
                            this.setState({
                                show: true
                            });

                        }}>SHOW</button>
                    <button type="button"
                            onClick={()=> {
                                console.log('show');
                                this.setState({
                                    show: false
                                });

                            }}>HIDE</button>

                    {this.state.show ? <p>{overview}</p> : null}
                </div>
            );
        }
}

function App(){ //parent of MovieItem
    return(
        <div>
            <MovieItem data={movie}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
