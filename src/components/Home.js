import React from "react";
import Footer from "./partials/Footer";
import styles from "../assets/styles/home.module.css";
import SearchBar from "./partials/SearchBar";


function Home() {
  return (
    <div className="container-fluid m-4">
      <div className={styles.alignment}>
        <div className="row">
          <div className="col-12">
            <h4>Github Search</h4>
          </div>
        </div>
        <div className="col-12">
          <SearchBar firstPage={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;