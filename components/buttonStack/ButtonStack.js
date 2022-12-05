import { Button } from "@mui/material";
import React from "react";
import styles from "./ButtonStack.module.scss";

function ButtonStack({ genre, setActiveGenre, activeGenre }) {
  return (
    <div className={styles.btnStackContainer}>
      <Button
        variant="contained"
        style={{
          background: activeGenre === genre.id ? "gold" : "#fff",
          color: "#000",
        }}
        onClick={() => setActiveGenre(genre.id)}
      >
        {genre.name}
      </Button>
    </div>
  );
}

export default ButtonStack;
