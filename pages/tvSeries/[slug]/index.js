import axios from "axios";
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
      <Movies movies={series} pageType="tvSeries" />
    </div>
  );
}

export default TvSeries;
