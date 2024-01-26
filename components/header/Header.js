// import { Drawer, Popover } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { useState } from "react";
import Searchbar from "../../widgets/Searchbar";
import { Home, LiveTv, Movie, PlaylistPlay } from "@mui/icons-material/";
import styles from "./Header.module.scss";
// import Home from "../../pages";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const headerData = [
    { name: "Home", url: "/", icon: <Home /> },
    { name: "Movies", url: "/movie/1", icon: <Movie /> },
    { name: "Tv series", url: "/tv/1", icon: <LiveTv /> },
    { name: "Watch Later", url: "/", icon: <PlaylistPlay /> },
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerItemContainer}>
        <div className={styles.headerLogo}>
          <a href="/">
            <Image
              src="/images/logo2.webp"
              width={60}
              height={60}
              alt="pikashow"
              loading="lazy"
            />
          </a>
        </div>
        <div className={styles.headerOptions}>
          {headerData &&
            headerData.map((data, i) => (
              <a href={data.url} key={i}>
                <span>{data.name}</span>
              </a>
            ))}
        </div>
      </div>
      {/* <div className={styles.headerMovileItemContainer}>
        <MenuIcon onClick={() => setIsDrawerOpen(true)} />
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          style={{ width: "40vw" }}
        >
          {headerData &&
            headerData.map((data, i) => (
              <a href={data.url} key={i}>
                <span style={{ fontSize: "20px", padding: "40px 30px" }}>
                  {data.name}
                </span>
              </a>
            ))}
        </Drawer>
      </div> */}
      <div className={styles.headerSearchBar}>
        <Searchbar />
      </div>
      <div className={styles.mobileNavigationBar}>
        <div className={styles.mobileNavigationBarItem}>
          {headerData &&
            headerData.map((data, i) => (
              <a href={data.url} key={i}>
                <span>
                  {data.icon}
                  {data.name}
                </span>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
