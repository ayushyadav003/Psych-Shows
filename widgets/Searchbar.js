import React, { useEffect, useState } from "react";
import styles from "./searchbar.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { inputHandler, searchDataHandler } from "../redux/features/searchSlice";
import { useRouter } from "next/router";
import { searchApi } from "../services/movieApi";

function Searchbar() {
  const [searchInput, setSearchInput] = useState();
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
    }, 1500);

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
        />
        {/* {poster_path ? (
          <div className={styles.searchResultContainer}>
            <img />
          </div>
        )} */}
      </div>
      <div className={styles.searchIcon} onClick={handleSearchClick}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Searchbar;
