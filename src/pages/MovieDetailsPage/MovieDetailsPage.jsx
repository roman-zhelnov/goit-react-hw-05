import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        setError(null);
        const data = await fetchMoviesById(movieId);
        setMovie(data);
      } catch {
        setError("Something wrong, try again...");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);
  if (!movie || isLoading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  const movieGenres = movie.genres.map((genre) => genre.name).join(", ");
  const productCountry = movie.production_countries.map(
    (country) => country.name
  );
  return (
    <div>
      <div>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://dummyimage.com/500x450/877c87/000000.jpg&text=No+image"
          }
          alt={movie.title}
        />
      </div>
      <h2>
        {movie.title} ({movie.release_date.split("-")[0]})
      </h2>
      <p>User Score: {Math.round((movie.vote_average / 10) * 100)}%</p>
      <h3>Production countries</h3>
      <p>{productCountry}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movieGenres}</p>
      <hr />
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
