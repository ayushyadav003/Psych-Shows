import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./detailPage.module.scss";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Details, PlayCircle, PlaylistAdd } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { detailApi } from "../../../../services/movieApi";

function ShowDetailPage() {
  const [detail, setDetail] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  // const {
  //   movieDetail: { movie },
  // } = useSelector((state) => state);
  const router = useRouter();
  const {
    query: { slug1, slug },
  } = router;

  useEffect(() => {
    handleDetail();
  }, [slug]);

  const handleDetail = async () => {
    const data = await detailApi(slug1, slug);
    if (data) {
      setDetail(data);
    }
    console.log(detail);
  };
  const yearExtractor = (date) => {
    return date.split("-")[0];
  };
  const handleChannel = () => {
    if (showVideo.toString().includes("tt")) {
      return "imdb";
    } else {
      return "tmdb";
    }
  };

  console.log(detail);
  return (
    <div className={styles.detailPageContainer}>
      {showVideo && (
        <div className={styles.detailShow}>
          <iframe
            ref={videoRef}
            src={`https://www.2embed.to/embed/${handleChannel(
              showVideo
            )}/movie?id=${showVideo}`}
            title="W3Schools Free Online Web Tutorials"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {detail && (
        <div>
          <div className={styles.detailPageInfo}>
            <div className={styles.detailImageContiner}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                width="100%"
                height="100%"
                alt={detail.title}
                loading="lazy"
              />
            </div>
            <div className={styles.movieDetails}>
              <h1>
                {detail.title || detail.name}
                {"  "}
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
              <span>
                {yearExtractor(detail.release_date || detail.first_air_date)}
              </span>
              <p>{detail.overview}</p>
              <div>
                {/* <Link
                  href={`https://www.2embed.to/embed/tmdb/movie?id=${detail.id}`}
                  target="_blank"
                > */}
                <Button
                  variant="outlined"
                  // style={{ background: "darkblue" }}
                  onClick={() => {
                    const videoId = detail.imdb_id || detail.id;
                    setShowVideo(videoId);
                    // console.log(videoRef);
                    videoRef?.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Watch Now <PlayCircle />
                </Button>
                {/* </Link> */}
                <Button variant="outlined">
                  Watch Later <PlaylistAdd />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowDetailPage;
