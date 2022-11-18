import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Movies from "../../../components/movies";

function TvSeries() {
  const [series, setSeries] = useState();
  const router = useRouter();
  const page = router.query.slug;
  console.log(page);

  const getSeries = async () => {
    try {
      const response = await axios("http://localhost:8080/tvSeries", {
        params: { page },
      });
      if (response.status === 200) {
        const {
          data: { results },
        } = response.data;
        setSeries(results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSeries();
  }, [page]);
  return (
    <div>
      <Movies movies={series} pageType="tvSeries" />
    </div>
  );
}

export default TvSeries;
