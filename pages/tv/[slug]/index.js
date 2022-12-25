import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Movies from "../../../components/movies";
import { movieApi } from "../../../services/movieApi";

function TvSeries() {
  const [series, setSeries] = useState();
  const router = useRouter();
  const page = router.query.slug || 1;

  useEffect(() => {
    getMovies();
  }, [page]);
  const getMovies = async () => {
    const data = await movieApi("tvSeries", { page: page });
    if (data) {
      setSeries(data);
    }
  };

  return (
    <div>
      <Head>
        <title>Psych shows - tvSeries</title>
        <meta
          name="keywords"
          content={
            series &&
            series.map((movie) => {
              let keyword = movie.original_name || movie.name;
              return keyword;
            })
          }
        />
        <meta name="robots" content="index" />
        <meta content="https://www.psychshows.com/" property="og:url" />
        <meta
          name="description"
          content="Watch latest movies and tv series from for free, watch any movie and tv series of netflix hulu prime videos disney + hotstar  anytime on you mobile, tablet, pc for free"
        />
        <meta
          property="og:title"
          content={"psychshows - free movies and tv shows"}
        />
        <meta content="website" property="og:type" />
      </Head>
      <Movies movies={series} pageType="tv" />
    </div>
  );
}

export default TvSeries;
