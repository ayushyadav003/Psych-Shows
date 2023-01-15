import React, { useEffect, useState } from "react";
import styles from "./searchbar.module.scss";
import { Search, Close, ArrowRight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { inputHandler, searchDataHandler } from "../redux/features/searchSlice";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import { searchApi } from "../services/movieApi";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    search: { searchValue },
  } = useSelector((state) => state);

  // debouncing searched value dispatch
  useEffect(() => {
    const handleInput = setTimeout(() => {
      if (searchInput) {
        dispatch(inputHandler(searchInput));
      }
    }, 700);

    return () => clearTimeout(handleInput);
  }, [searchInput]);

  // searchapi call when searched value will be set in redux
  useEffect(() => {
    if (searchValue) {
      handleSearch();
    }
  }, [searchValue]);

  // search api
  const handleSearch = async () => {
    const data = await searchApi(searchValue);
    if (data) {
      dispatch(searchDataHandler(data));
      setSearchData(data);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/search/${searchInput}`);
    }
  };
  const handleSearchClick = (e) => {
    router.push(`/search/${searchInput}`);
  };

  return (
    <div className={styles.searchBar}>
      <div style={{ width: "100%" }}>
        <input
          placeholder="Search here..."
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          value={searchInput}
        />
        {/* {searchInput && (
          <div className={styles.searchResultContainer}>
            <span>
              show all <ArrowRight />
            </span>
            {searchData ? (
              searchData.results.slice(0, 5).map((data, i) => {
                let url = data.poster_path;
                return (
                  <img
                    className={styles.searchResultItem}
                    key={i}
                    src={`https://image.tmdb.org/t/p/w500/${url}`}
                    width="150"
                  />
                );
              })
            ) : (
              <div>
                <CircularProgress />
              </div>
            )}
          </div>
        )} */}
      </div>
      {searchInput && (
        <div className={styles.closeIcon} onClick={() => setSearchInput("")}>
          <Close />
        </div>
      )}

      <div className={styles.searchIcon} onClick={handleSearchClick}>
        <Search />
      </div>
    </div>
  );
}

export default Searchbar;
