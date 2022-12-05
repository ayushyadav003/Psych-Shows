import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p>
        Disclaimer: This site does not store any files on its server. All
        contents are provided by non-affiliated third parties.
      </p>
    </div>
  );
}

export default Footer;
