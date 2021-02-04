import React from 'react';
import './ImageList.css'

const ImageList = (props) => {
    const movies = props.movies.map((movie) => {
        return <div style={{ backgroundImage: `url(${movie.Poster})` }} key={movie.imdbID} className='movie-card' >
            <div className="movie-title">{movie.Title}
                <p className="movie-subtitle">Available for rent</p>
            </div>
        </div>
    })

    return <div className='movies'>{movies}</div>;
};

export default ImageList;