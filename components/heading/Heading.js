import React from "react";
import styles from "./heading.module.scss";

function Heading({ heading }) {
  return (
    <>
      {heading && (
        <div className={styles.headingContainer}>
          {/* <div className={styles.inner1}></div>
          <div className={styles.inner2}> */}
          <h2>{heading}</h2>
          {/* </div> */}
        </div>
      )}
    </>
  );
}

export default Heading;
