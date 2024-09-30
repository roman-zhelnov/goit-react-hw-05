import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";

const MovieList = () => {
  const [movies, setMovies] = useState;
  useEffect(() => {
    const getTrendingMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
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
