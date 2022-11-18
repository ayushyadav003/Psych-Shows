import React from "react";
import { useSelector } from "react-redux";
import Movies from "../../../components/movies";

export default function SeachPage() {
  const searchData = useSelector(({ search }) => search.searchData);
  return (
    <div>
      <Movies movies={searchData?.results} />
    </div>
  );
}
