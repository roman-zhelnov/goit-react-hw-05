import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesReviewsById } from "../../services/api";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getDataRev = async () => {
      setIsLoading(true);
      try {
        setError(null);
        const rev = await fetchMoviesReviewsById(movieId);
        setReviews(rev);
      } catch {
        setError("Something wrong, try again...");
      } finally {
        setIsLoading(false);
      }
    };
    getDataRev();
  }, [movieId]);

  if (error) return <h2>{error}</h2>;
  if (!reviews || isLoading) return <Loader />;

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((rev) => (
            <li key={rev.id}>
              <h2>{rev.author}</h2>
              <p>{rev.content}</p>
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};
export default MovieReviews;
