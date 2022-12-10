import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "./detailPage.module.scss";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { Details, PlayCircle, PlaylistAdd } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { detailApi } from "../../../../services/movieApi";
import Head from "next/head";

function ShowDetailPage() {
  const [detail, setDetail] = useState();
  const [showVideo, setShowVideo] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [selectedEpisode, setSelectedEpisode] = useState(1);
  const videoRef = useRef(null);
  const router = useRouter();
  const {
    query: { slug1, slug },
  } = router;

  useEffect(() => {
    handleDetail();
  }, [slug]);

  const handleDetail = async () => {
    if (slug1 && slug) {
      const data = await detailApi(slug1, slug);
      if (data) {
        setDetail(data);
      }
    }
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
  return (
    <>
      <Head>
        <title>{detail?.title || detail?.name}</title>
        <meta
          name="keywords"
          content={`watch ${detail?.title || detail?.name},watch full ${
            detail?.title || detail?.name
          }, free online ${detail?.title || detail?.name} free,${
            detail?.original_name || detail?.original_title
          }, watch free netflix movies,hulu, prime videos, disney + hotstar`}
        />
        <meta content="https://www.psychshows.com/" property="og:url" />
        <meta
          name="description"
          content="Watch latest movies and tv series from for free, watch any mvie and tv series of netflix hulu prime videos disney + hotstar  anytime on you mobile, tablet, pc for free"
        />
        <meta
          property="og:title"
          content={"psychshows - free movies and tv shows"}
        />
        <meta content="website" property="og:type" />
      </Head>
      <div className={styles.detailPageContainer}>
        {showVideo && (
          <div className={styles.detailShow}>
            <iframe
              ref={videoRef}
              src={
                slug1 !== "tv"
                  ? `https://www.2embed.to/embed/${handleChannel(
                      showVideo
                    )}/movie?id=${showVideo}`
                  : `https://www.2embed.to/embed/${handleChannel(
                      showVideo
                    )}/tv?id=${showVideo} ID&s=${
                      selectedSeason + 1
                    }&e=${selectedEpisode}`
              }
              title={detail?.title || detail?.name}
              allowFullScreen
            ></iframe>
          </div>
        )}
        {detail && (
          <div>
            <div className={styles.detailPageInfo}>
              <div className={styles.detailImageContiner}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detail?.poster_path}`}
                  width="100%"
                  height="100%"
                  alt={detail.title || detail.name}
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
                {slug1 === "tv" && (
                  <div className={styles.seasonContainer}>
                    <div>
                      {detail?.seasons.map((season, i) => {
                        if (season.season_number === 0) {
                          return null;
                        }
                        return (
                          <span
                            key={i}
                            style={{
                              background:
                                season.season_number === selectedSeason + 1
                                  ? "grey"
                                  : "transparent",
                            }}
                            onClick={() =>
                              setSelectedSeason(season.season_number - 1)
                            }
                          >
                            Season {season.season_number}
                          </span>
                        );
                      })}
                    </div>
                    {detail?.seasons[selectedSeason]?.episode_count && (
                      <div>
                        {[
                          ...Array(
                            detail?.seasons[selectedSeason + 1]?.episode_count
                          ),
                        ].map((e, i) => {
                          return (
                            <span
                              key={i}
                              style={{
                                background:
                                  i + 1 === selectedEpisode
                                    ? "grey"
                                    : "transparent",
                              }}
                              onClick={() => setSelectedEpisode(i + 1)}
                            >
                              Ep {i + 1}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
                <div>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      const videoId = detail.imdb_id || detail.id;
                      setShowVideo(videoId);
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
    </>
  );
}

export default ShowDetailPage;
