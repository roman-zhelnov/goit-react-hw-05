import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const initialValues = {
    query: "",
  };

  const handelSubmit = (values) => {
    if (values.query.trim() === "") {
      toast.error("Enter the name of the movie ");
      return setSearchParams({});
    }
    searchParams.set("query", values.query);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
    const getMovieData = async () => {
      setIsLoading(true);
      try {
        setError(null);
        const movieData = await fetchMoviesByQuery(query);
        if (!movieData || movieData.length === 0) {
          toast.error("Movie is not found");
        }
        setMovies(movieData);
      } catch {
        setError("Something wrong, try again...");
      } finally {
        setIsLoading(false);
      }
    };

    getMovieData();
  }, [query]);

  if (isLoading) return <Loader />;
  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handelSubmit}>
        <Form>
          <Field name="query" placeholder="Enter your movie" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {query && query.length > 0 ? <MovieList movies={movies} /> : null}
      <Toaster position="top-right" />
    </div>
  );
};
export default MoviesPage;
