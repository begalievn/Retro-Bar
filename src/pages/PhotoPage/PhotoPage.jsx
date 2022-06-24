import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import classes from "./PhotoPage.module.css";
const PhotoPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.photo}>
        <Header/>
        <Main/>
      </div>
    </div>
  );
};

export default PhotoPage;
