import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./detailPage.module.scss";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Details, PlayCircle, PlaylistAdd } from "@mui/icons-material";
import Link from "next/link";

function ShowDetailPage() {
  const [detail, setDetail] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const {
    movieDetail: { movie },
  } = useSelector((state) => state);

  useEffect(() => {
    handleDetail();
  }, [movie]);

  const handleDetail = () => {
    setDetail(movie);
  };
  // const tmdbId = detail?.id;
  // const title = detail?.title;
  // const poster = detail?.poster_path;
  // const overview = detail?.overview;
  // const language = detail?.language;
  // const release_date = detail?.release_date;

  return (
    <div className={styles.detailPageContainer}>
      {detail && (
        <div>
          <div className={styles.detailPageInfo}>
            <div className={styles.detailImageContiner}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                width="100%"
                height="100%"
                alt={detail.title}
              />
            </div>
            <div className={styles.movieDetails}>
              <h1>
                {detail.title}{" "}
                <span
                  style={{
                    fontSize: "12px",
                    color: "gray",
                    padding: "2px",
                    border: "1px solid gray",
                  }}
                >
                  {detail.original_language}
                </span>
              </h1>
              <span>{detail.release_date}</span>
              <p>{detail.overview}</p>
              <div>
                {/* <Link
                  href={`https://www.2embed.to/embed/tmdb/movie?id=${detail.id}`}
                  target="_blank"
                > */}
                <Button
                  variant="contained"
                  style={{ background: "darkblue" }}
                  onClick={() => {
                    setShowVideo(true);
                    console.log(videoRef);
                    videoRef?.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Watch Now <PlayCircle />
                </Button>
                {/* </Link> */}
                <Button variant="contained">
                  Watch Later <PlaylistAdd />
                </Button>
              </div>
            </div>
          </div>
          {showVideo && (
            <div className={styles.detailShow}>
              <iframe
                ref={videoRef}
                src={`https://www.2embed.to/embed/tmdb/movie?id=${detail.id}`}
                title="W3Schools Free Online Web Tutorials"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowDetailPage;
