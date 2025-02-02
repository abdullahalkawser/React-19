import React, { useEffect, useState } from 'react';
import Search from './componenst/search';
import Spinner from './componenst/spinner';
import Movicard from './componenst/Movicard';


const API = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API;

const API_OPTION = {
  method: "GET",
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false); // State for loading

  const fetchMovies = async () => {
    try {
      setLoading(true); // Set loading to true when fetching starts
      const endpoint = `${API}/discover/movie?sort_by=popularity.desc`;
      const res = await fetch(endpoint, API_OPTION);

      if (!res.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await res.json();
      console.log(data.results);  // Debugging log

      // Ensure that movie data is available
      if (data.results) {
        setMovies(data.results);
      }
    } catch (error) {
      console.error(error.message);
      setError('Something went wrong');
    } finally {
      setLoading(false); // Set loading to false when the fetch is finished
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="hero" />
            <h1 className="text-gradient">
              Find Your Best Movie of All Time
            </h1>
          </header>
          <Search link={link} setLink={setLink} />
          <h1>{link}</h1>

          {error && <p className="error">{error}</p>}

          <section className='all-movies '>
            <h2>All Movies</h2>
            {/* Show loading message or spinner while loading */}
            {loading ? (
           <Spinner/>// You can replace this with a spinner if needed
            ) : (
              <ul >
                {/* Render movies here */}
                {movies.length > 0 ? (
                  movies.map((movie) => (
           <Movicard movie = {movie}/>
                  ))
                ) : (
                  <p>No movies found</p>
                )}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
