import React from "react";
import styles from "../../assets/styles/footer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footer_body}>
      <div>
        <hr />
        <h6 className={styles.copyright}>
          Made with <FontAwesomeIcon icon={faHeart} /> by Suraj Ojha{" "}
        </h6>
      </div>
    </div>
  );
}
