import React, { useEffect, useState } from 'react';



const API = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API;
import Search from './componenst/search';
import Spinner from './componenst/spinner';
import Movicard from './componenst/Movicard';
import useDebounce from './../node_modules/react-use/esm/useDebounce';

const API_OPTION = {
  method: "GET",
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
};

const App = () => {
  const [searchmovies, setsearchmovies] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const [debounce, setdebounce] = useState('');

  useDebounce(()=>setdebounce(searchmovies),500,[searchmovies])



  const fetchMovies = async (query = '') => {
    try {
      setLoading(true); // Set loading to true when fetching starts
      const endpoint = query
        ? `${API}/search/movie?query=${encodeURIComponent(query)}`
        : `${API}/discover/movie?sort_by=popularity.desc`;
      
      const res = await fetch(endpoint, API_OPTION);

      if (!res.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await res.json();
      console.log(data.results);  // Debugging log

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
    fetchMovies(debounce);
  }, [debounce]);

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
          <Search setSearchMovies={setsearchmovies} /> {/* Pass correct prop */}

          {error && <p className="error">{error}</p>}

          <section className='all-movies'>
            <h2>All Movies</h2>
            {/* Show loading message or spinner while loading */}
            {loading ? (
              <Spinner />
            ) : (
              <ul>
                {movies.length > 0 ? (
                  movies.map((movie) => (
                    <Movicard key={movie.id} movie={movie} />
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
