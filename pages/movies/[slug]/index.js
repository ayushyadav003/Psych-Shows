import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Movies from "../../../components/movies";
import { movieApi } from "../../../services/movieApi";

function SelectedMovie() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const page = router.query.slug || 1;

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    const data = await movieApi("movies", page);
    if (data) {
      setMovies(data);
    }
  };

  return (
    <div>
      <Movies movies={movies} pageType="movies" />
    </div>
  );
}

export default SelectedMovie;
