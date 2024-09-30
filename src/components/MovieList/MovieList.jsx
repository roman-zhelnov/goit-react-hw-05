import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";

const MovieList = () => {
  const [movies, setMovies] = useState;
  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p>movie</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
