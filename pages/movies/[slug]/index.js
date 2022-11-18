import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "../../../components/header/Header";
import DownloadOption from "../../../components/showDetail/DownloadOption.";
import MovieDetail from "../../../components/showDetail";
import Movies from "../../../components/movies";

function SelectedMovie() {
  const [movies, setMovies] = useState();
  const router = useRouter();
  const page = router.query.slug;
  console.log(page);

  const getMovies = async () => {
    try {
      const response = await axios("http://localhost:8080/movies", {
        params: { page },
      });
      if (response.status === 200) {
        const {
          data: { results },
        } = response.data;
        setMovies(results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, [page]);
  return (
    <div>
      <Movies movies={movies} pageType="movies" />
    </div>
  );
}

export default SelectedMovie;
