import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesActorsById } from "../../services/api";
import Loader from "../Loader/Loader";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getDataCast = async () => {
      setIsLoading(true);
      try {
        setError(null);
        const actors = await fetchMoviesActorsById(movieId);
        setCast(actors);
      } catch {
        setError("Something wrong, try again...");
      } finally {
        setIsLoading(false);
      }
    };
    getDataCast();
  }, [movieId]);
  if (!cast || isLoading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : "https://dummyimage.com/300x450/877c87/000000.jpg&text=No+image"
              }
              alt={actor.name}
            />
            <h2>{actor.name}</h2>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
