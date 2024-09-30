import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjExZWFkNjkyOTg5NzE2NjJkODFlZmY3MGY3ODI2YyIsIm5iZiI6MTcyNzY4NTg3NS40NDUzMzgsInN1YiI6IjY2ZjcxYWM4YzhhZjgzZjk1Y2MwNzZkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RYE-c5EKDgObw0qcdn5_1eMOQJKEOEqS_pSXD7El8yo",
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await api.get(`/trending/movie/day?language=en-US`);
  return data;
};
