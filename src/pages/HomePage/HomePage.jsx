import { useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getTrendingMovies = async () => {
      setIsLoading(true);
      try {
        setError(null);
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch {
        setError("Something wrong, try again...");
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingMovies();
  }, []);
  if (isLoading) return <Loader />;
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};
export default HomePage;
