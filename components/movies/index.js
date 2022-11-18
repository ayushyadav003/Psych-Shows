import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "./Movies.module.scss";
import Skeleton from "@mui/material/Skeleton";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Movies({ movies, pageType }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.movieContainer}>
        {movies ? (
          movies.map((movie, i) => {
            const poster = movie.poster_path;
            const title = movie?.original_name || movie?.original_title;
            console.log(movies);
            return (
              <a href={`/showdetails/${title}`}>
                <div className={styles.card} key={i}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${poster}`}
                    alt={movie.original_title}
                    width="100%"
                    height="100%"
                    loading="lazy"
                  />
                  <div className={styles.inner}>
                    <div style={{ display: "flex" }}>
                      <span>
                        <h2>{title}</h2>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <div className={styles.card}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </div>
        )}
      </div>
      <div className={styles.pagination}>
        <Pagination
          count={500}
          variant="outlined"
          shape="rounded"
          onChange={(event, value) => router.push(`/${pageType}/${value}`)}
        />
      </div>
    </>
  );
}

export default Movies;
