import React from "react";
import styles from "../../assets/styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer_body}>
      <div>
        <hr />
        <h4 className={styles.copyright}>
          Copyright &copy; 2021 | Suraj Ojha{" "}
        </h4>
      </div>
    </div>
  );
}
