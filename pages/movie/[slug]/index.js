import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import Movies from "../../../components/movies";
import { movieApi } from "../../../services/movieApi";

function SelectedMovie() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();
  const page = router.query.slug || 1;

  const endContainer = useRef(null);

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async () => {
    const data = await movieApi("movies", { page: page });

    if (data) {
      setMovies(data);
    }
  };
  console.log(movies);

  return (
    <div>
      <Head>
        <title>movies</title>
        <meta
          name="keywords"
          content={
            movies &&
            movies.map((movie) => {
              let keyword = movie.title;
              return keyword;
            })
          }
        />
        <meta content="https://www.psychshows.com/" property="og:url" />
        <meta
          name="description"
          content="Watch latest movies and tv series from for free, watch any mvie and tv series of netflix hulu prime videos disney + hotstar  anytime on you mobile, tablet, pc for free"
        />
        <meta
          property="og:title"
          content={"psychshows - free movies and tv shows"}
        />
        <meta content="website" property="og:type" />
      </Head>
      <Movies movies={movies} pageType="movie" />
      <div ref={endContainer}></div>
    </div>
  );
}

export default SelectedMovie;
