import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Movies from "../../../components/movies";
import { searchApi } from "../../../services/movieApi";

export default function SeachPage() {
  // const searchData = useSelector(({ search }) => search.searchData);
  const [searchData, setSeachData] = useState();
  const router = useRouter();
  const value = router.query.slug;
  useEffect(() => {
    getSearchedData();
  }, [value]);

  const getSearchedData = async () => {
    const data = await searchApi(value);
    if (data) {
      setSeachData(data);
    }
  };

  return (
    <div>
      <Movies movies={searchData?.results} />
    </div>
  );
}
