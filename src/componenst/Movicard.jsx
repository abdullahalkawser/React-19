import React from 'react'

const Movicard = ({ movie }) => {

    return (

        <div key={movie.id} className="movie-card">
    

            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

            <div className='mt-4'>
                <h3>{movie.title}</h3>

                <div className='content'>
                    <div className='rating'>
                        <img src="star.svg" alt="start icone" srcset="" />
                        <p>{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
                        <span>.</span>
                        <p className='lang'>{movie.original_language}</p>
                        <span>.</span>
                        <p className='year'>{movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}</p>

                    </div>

                </div>
            </div>


        </div>

    )
}

export default Movicard
