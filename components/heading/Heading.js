import React from "react";
import styles from "./heading.module.scss";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

function Heading({ heading, slideLeft, slideRight }) {
  return (
    <>
      {heading && (
        <div className={styles.headingContainer}>
          <h2>{heading}</h2>
          <div className={styles.arrowWrapper}>
            <KeyboardArrowLeft className={styles.arrow} onClick={slideLeft} />
            <KeyboardArrowRight className={styles.arrow} onClick={slideRight} />
          </div>
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default Heading;
